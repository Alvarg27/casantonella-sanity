export default {
  name: "subCategory",
  title: "Sub-categoría",
  type: "document",
  fields: [
    {
      name: "titleEs",
      title: "Titulo español",
      type: "string",
    },
    {
      name: "titleEn",
      title: "Titulo inglés",
      type: "string",
    },
    {
      name: "descriptionEs",
      title: "Descripción español (opcional)",
      type: "string",
    },
    {
      name: "descriptionEn",
      title: "Descripción inglés (opcional)",
      type: "string",
    },
    {
      name: "mainCategories",
      title: "Categoría pricipal",
      type: "array",
      of: [{ type: "reference", to: { type: "mainCategory" } }],
    },
  ],
};
