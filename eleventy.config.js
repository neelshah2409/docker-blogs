module.exports = function (eleventyConfig) {
  // Post files are self-contained HTML (with their own <style>/<script>) —
  // copy them verbatim rather than running them through a template engine.
  eleventyConfig.addPassthroughCopy({ posts: "posts" });

  eleventyConfig.addFilter("sortByDateDesc", function (arr) {
    return [...arr].sort((a, b) => new Date(b.date) - new Date(a.date));
  });

  return {
    dir: {
      input: "src",
      output: "docs",
      includes: "_includes",
      data: "_data",
    },
    pathPrefix: "/docker-blogs/",
  };
};
