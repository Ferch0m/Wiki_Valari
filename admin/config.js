window.CMS_CONFIG = {
  backend: {
    name: "github", // Usa GitHub
    repo: "Ferch0m/Wiki_Valari", // <<-- ¡ASEGÚRATE DE QUE ESTE ES TU REPOSITORIO EXACTO!
    branch: "main", // La rama principal
  },
  media_folder: "assets/uploads", // Dónde guardar imágenes
  public_folder: "/assets/uploads",
  collections: [
    {
      name: "ocs", // Nombre de la colección
      label: "Personajes (OCs)", // Etiqueta en el admin
      folder: "ocs", // Dónde guardar los archivos
      create: true, // Permitir crear nuevos
      slug: "{{slug}}", // El nombre del archivo
      fields: [
        // Los campos que pides al crear un OC
        { label: "Título (Nombre del OC)", name: "titulo", widget: "string" },
        { label: "Imagen Principal", name: "image", widget: "image" },
        { label: "Layout", name: "layout", widget: "hidden", default: "oc-layout.njk" }, // IMPORTANTE: Asigna la plantilla
        { label: "Descripción", name: "body", widget: "markdown" },
      ],
    },
  ],
};

CMS.init({ config: window.CMS_CONFIG });