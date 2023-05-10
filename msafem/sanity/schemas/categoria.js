export default({
  name: 'categoria',
  title: 'Menu Categoria',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Nome Categoria',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'imagem',
      title: 'Imagem da Categoria',
      type: 'image',
    },
  ],
})
