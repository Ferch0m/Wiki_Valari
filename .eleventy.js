module.exports = function(eleventyConfig) {
  // Le dice que la carpeta "assets" (con CSS/Imágenes) debe copiarse tal cual
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("admin"); // Copia el admin de Decap

  return {
    // Le dice que los archivos de OCs estarán en la carpeta "ocs"
    dir: {
      input: ".", // Carpeta principal
      output: "_site", // Carpeta donde se genera el sitio final
      includes: "_includes" // Carpeta para plantillas
    }
  };
};