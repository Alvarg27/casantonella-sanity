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
    {
      name: "new",
      title: "Nuevo",
      type: "boolean",
    },
    {
      name: "recommended",
      title: "Recomendado",
      type: "boolean",
    },
    {
      name: "vegan",
      title: "Vegano",
      type: "boolean",
    },
    {
      name: "vegetarian",
      title: "Vegetariano",
      type: "boolean",
    },
    {
      name: "glutenFree",
      title: "Sin gluten",
      type: "boolean",
    },
    {
      name: "sugarFree",
      title: "Sin azucar",
      type: "boolean",
    },
    {
      name: "alcoholFree",
      title: "Sin alcohol",
      type: "boolean",
    },
  ],

  preview: {
    select: {
      title: "titleEs",
    },
  },
};
