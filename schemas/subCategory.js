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
      name: "mainCategories",
      title: "Categoría pricipal",
      type: "array",
      of: [{ type: "reference", to: { type: "mainCategory" } }],
    },
  ],
};
