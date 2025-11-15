module.exports = function(eleventyConfig) {
  // Copiar todo el directorio admin tal cual
  eleventyConfig.addPassthroughCopy("admin");

  // También copiar posts si quieres editar contenido
  eleventyConfig.addPassthroughCopy("posts");

  return {
    dir: {
      input: ".",
      output: "_site"
    }
  };
};
