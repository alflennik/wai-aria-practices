const path = require("path");
const determineContentType = require("./determineContentType");

const sourceRoot = path.resolve(__dirname, "../../../_external/aria-practices");

const buildRoot = path.resolve(__dirname, "../../../ARIA/apg");

const dirname = (sitePath) => {
  if (sitePath.endsWith("/")) return sitePath;
  const pathComponents = sitePath.split("/");
  pathComponents.splice(-1, 1);
  return pathComponents.join("/") + "/";
};

const relative = (sitePath1, sitePath2) => {
  if (sitePath2.endsWith("/")) return path.relative(sitePath1, sitePath2) + "/";
  return path.relative(sitePath1, sitePath2);
};

const rewriteSourcePath = (sourcePath) => {
  const contentType = determineContentType(sourcePath);

  const githubPath = relative(sourceRoot, sourcePath);

  let buildRelative = githubPath.replace(/^content\//, "");
  if (contentType !== "asset") {
    buildRelative = buildRelative.replace(/\.html$/, ".md");
  }

  const buildPath = path.resolve(buildRoot, buildRelative);

  const sitePath = getSitePath(buildPath, contentType);

  return { githubPath, buildPath, sitePath };
};

const getSitePath = (buildPath, contentType) => {
  const buildRelative = relative(buildRoot, buildPath);

  switch (contentType) {
    case "pattern":
      return buildRelative.replace(/\/[^/]+-pattern\.md/, "/");
    case "example":
      return buildRelative.replace(/examples\/([^/]+)\.md/, "examples/$1/");
    case "practice":
      return buildRelative.replace(
        /practices\/([^/]+)\/[^/]+\.md/,
        "practices/$1/"
      );
    case "homepage":
      return buildRelative.replace(/index\.md/, "");
    case "exampleIndex":
      return buildRelative.replace(/index\/index\.md/, "example-index/");
    case "patternIndex":
      return buildRelative.replace(/patterns\/patterns\.md/, "patterns/");
    case "practiceIndex":
      return buildRelative.replace(/practices\/practices\.md/, "practices/");
    case "otherPage":
      return buildRelative.replace(/\/([^/]+)\.md/, "$1/");
    case "asset":
      return buildRelative;
    default:
      throw new Error(`Script did not recognize content type ${contentType}`);
  }
};

const rewriteRelativePath = (relativePath, { onSourcePath }) => {
  const { buildPath: onBuildPath } = rewriteSourcePath(onSourcePath);

  const sourcePath = path.resolve(dirname(onSourcePath), relativePath);
  const { buildPath } = rewriteSourcePath(sourcePath);

  const siteRootPath = getSitePath(buildPath, determineContentType(sourcePath));
  const onSitePath = getSitePath(
    onBuildPath,
    determineContentType(onSourcePath)
  );
  const siteRelativePath = relative(dirname(onSitePath), siteRootPath);

  return { siteRelativePath, siteRootPath, buildPath };
};

module.exports = {
  rewriteSourcePath,
  rewriteRelativePath,
  sourceRoot,
  buildRoot,
};