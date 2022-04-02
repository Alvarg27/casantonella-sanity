export default {
  name: "products",
  title: "Productos",
  type: "document",
  fields: [
    {
      name: "titleEs",
      title: "Título español",
      type: "string",
    },
    {
      name: "titleEn",
      title: "Título inglés",
      type: "string",
    },
    {
      name: "subCategories",
      title: "sub-Categorías",
      type: "array",
      of: [{ type: "reference", to: { type: "subCategory" } }],
    },
    {
      name: "descriptionEs",
      title: "Descripción español",
      type: "string",
    },
    {
      name: "descriptionEn",
      title: "Descripción inglés",
      type: "string",
    },
    {
      name: "price",
      title: "Precio",
      type: "number",
    },
    {
      name: "mainImage",
      title: "Imagen del producto (opcional)",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],

  preview: {
    select: {
      title: "titleEs",
    },
  },
};
