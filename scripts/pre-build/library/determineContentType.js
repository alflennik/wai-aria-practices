const determineContentType = (sourcePath) => {
  if (sourcePath.includes("content/about/coverage-and-quality/")) {
    return "ignored";
  }
  if (sourcePath.endsWith("content/apg-home.html")) {
    return "homepage";
  }
  if (sourcePath.match(/content\/about\/about\.html$/)) {
    return "about";
  }
  if (
    !sourcePath.endsWith("html") ||
    sourcePath.includes("landmarks/examples/") ||
    sourcePath.endsWith("feed/examples/feedDisplay.html") ||
    sourcePath.endsWith("toolbar/examples/help.html") ||
    sourcePath.endsWith("shared/templates/example-usage-warning.html")
  ) {
    return "asset";
  }
  if (sourcePath.match(/content\/practices\/.+\/.+-practice\.html$/)) {
    return "practice";
  }
  if (sourcePath.match(/content\/patterns\/.+-pattern\.html$/)) {
    return "pattern";
  }
  if (sourcePath.match(/content\/patterns\/.+\/examples\/.+\.html$/)) {
    return "example";
  }
  if (sourcePath.match(/content\/patterns\/patterns\.html$/)) {
    return "patternIndex";
  }
  if (sourcePath.match(/content\/practices\/practices\.html$/)) {
    return "practiceIndex";
  }
  if (sourcePath.endsWith("content/index/index.html")) {
    return "exampleIndex";
  }
  throw new Error(
    `Could not determine content type for file at ${sourcePath}\n` +
      `This file may not follow established conventions.`
  );
};

module.exports = determineContentType;
