import {defineField, defineType} from 'sanity'

export default {
  name: 'destaque',
  title: 'Destaque Menu Categorias',
  type: 'document',
  fields: [

    {
      name: "name",
      type: "string",
      title: "Nome do destaque",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "breve_descricao",
      type: "string",
      title: "Breve descricao",
      validation: (Rule) => Rule.max(200),
    },
    {
      name: 'restaurantes',
      type: 'array',
      title: 'Restaurantes',
      of: [{ type:"reference", to: 
      [{ type:"restaurante" }] }]
    },
  ],
}
