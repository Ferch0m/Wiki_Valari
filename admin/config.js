window.CMS_CONFIG = {
  backend: {
    name: "test-repo",
  },
  collections: [
    {
      name: "ocs",
      label: "Personajes (OCs)",
      folder: "ocs",
      create: true,
      fields: [
        { label: "Titulo (Nombre del OC)", name: "titulo", widget: "string" },
        { label: "Imagen Principal", name: "image", widget: "image" },
        { label: "Layout", name: "layout", widget: "hidden", default: "oc-layout.njk" },
        { label: "Descripcion", name: "body", widget: "markdown" },
      ],
    },
  ],
};

CMS.init({ config: window.CMS_CONFIG });