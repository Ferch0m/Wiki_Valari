module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("admin"); // NECESARIO
  eleventyConfig.addPassthroughCopy("assets"); // Para imágenes si las usas

  return {
    // Le dice que los archivos de OCs estarán en la carpeta "ocs"
    dir: {
      input: ".", // Carpeta principal
      output: "_site", // Carpeta donde se genera el sitio final
      includes: "_includes" // Carpeta para plantillas
    }
  };
};