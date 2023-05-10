import {defineField, defineType} from 'sanity'

export default {
  name: 'prato',
  title: 'Prato',
  type: 'document',
  fields: [

    {
      name: "name",
      type: "string",
      title: "Nome do prato",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "breve_descricao",
      type: "string",
      title: "Breve descricao",
      validation: (Rule) => Rule.max(200),
    },
    {
      name: "preco",
      type: "number",
      title: "Preco do prato/menu em euros",
    },
    {
      name: 'imagem',
      type: 'image',
      title: 'Imagem prato',
    },
  ],
}
