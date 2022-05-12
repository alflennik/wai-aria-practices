const path = require("path");
const { parse: parseHtml } = require("node-html-parser");
const walkHtmlElements = require("../../../utilities/walkHtmlElements");

const manualRemappings = {
  "/ARIA/APG/#aria_ex": "/ARIA/APG/patterns/",

  // Special case since two sections are combined here
  "/ARIA/APG/#presentation_role":
    "/ARIA/APG/practices/hiding-semantics/#presentation-role",
  "/ARIA/APG/#children_presentational":
    "/ARIA/APG/practices/hiding-semantics/#children-presentational",
};

const urlRewrites = [
  // Replaces `../../examples/` with `../../example-index/
  [/^([\/.]*)\/examples\//g, "$1/example-index/"],
];

const oldToNewLink = { ...manualRemappings };

const findNewLinksForOldLinks = (section) => {
  if (!section.content) return;

  const root = parseHtml(section.content);

  walkHtmlElements(root, (element) => {
    const anchorId = element.getAttribute("id");
    if (anchorId) {
      const noHash = section.permalinkReplacesFormerAnchorId === anchorId;
      oldToNewLink[`/ARIA/APG/#${anchorId}`] = noHash
        ? section.permalink
        : `${section.permalink}#${anchorId}`;
    }
  });
};

const fixLink = (element, permalink, oldPermalink = "/ARIA/APG/") => {
  const getApgAnchorId = (href, oldPermalink) => {
    if (!href.includes("#")) return null;
    if (oldPermalink === "/ARIA/APG/" && href.startsWith("#")) {
      return href.substr(1);
    }

    let apgPath = (() => {
      const directory = oldPermalink.substr(0, oldPermalink.lastIndexOf("/"));
      return path.relative(directory, "/ARIA/APG/") + "/";
    })();

    const [hrefPath, hrefHash] = href.split("#");

    return hrefPath === apgPath ? hrefHash : null;
  };

  const href = element.getAttribute("href");
  const apgAnchorId = getApgAnchorId(href, oldPermalink);
  const isSiteLink = apgAnchorId
    ? null
    : !href.match(/^(http|mailto|javascript)/);
  if (!!apgAnchorId) {
    const rootRelativePath = oldToNewLink[`/ARIA/APG/#${apgAnchorId}`];
    let newLink = `{{ '${rootRelativePath}' | relative_url }}`;
    if (!newLink) {
      throw new Error(
        `Unable to remap anchor link "${href}" in "${permalink}". This will ` +
          "happen if a link is found which points to an section that is not " +
          "present in the redesigned APG site. This can be fixed by adding " +
          "the link to the manual link remappings at the top of this file."
      );
    }

    element.setAttribute("href", newLink);
  }
  if (isSiteLink) {
    const fixedLinkBase = path.relative(permalink, oldPermalink);
    const fixedLink = path.join(fixedLinkBase, href);
    const rewrittenLink = rewriteUrls(fixedLink);
    element.setAttribute("href", rewrittenLink);
  }
};

const getFixedLinks = (section) => {
  if (!section.content) return section;

  const root = parseHtml(section.content);

  walkHtmlElements(root, (element) => {
    const isLink = element.tagName === "A" && element.getAttribute("href");
    if (isLink) {
      fixLink(element, section.permalink);
    }
  });

  return { ...section, content: root.outerHTML };
};

const fixLinks = ({
  sections: previousSections,
  patterns: previousPatterns,
}) => {
  Object.values(previousSections).forEach(findNewLinksForOldLinks);
  previousPatterns.forEach(findNewLinksForOldLinks);

  const sections = Object.fromEntries(
    Object.entries(previousSections).map(([label, section]) => {
      return [label, getFixedLinks(section)];
    })
  );

  const patterns = previousPatterns.map((pattern) => getFixedLinks(pattern));

  return { sections, patterns };
};

const rewriteUrls = (url) => {
  let rewrittenUrl = url;
  urlRewrites.forEach(([regexFind, regexReplace]) => {
    rewrittenUrl = rewrittenUrl.replace(regexFind, regexReplace);
  });
  return rewrittenUrl;
};

module.exports = { fixLinks, fixLink };
