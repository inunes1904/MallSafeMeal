import {defineField, defineType} from 'sanity'
import categoria from './categoria'
import prato from './prato'

export default{
  name: 'restaurante',
  title: 'Restaurante',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Nome Restaurante',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'breve_descricao',
      type: 'string',
      title: 'Descrição breve',
      validation: (Rule) => Rule.max(200),
    },
    {
      name: 'imagem',
      type: 'image',
      title: 'Imagem Restaurante',
    },
    {
      name: 'pontuacao',
      type: 'number',
      title: 'Atribuir pontuação de 1 a 5',
      validation: (Rule) => Rule.required()
      .min(1)
      .max(5)
      .error("Introduir valor entre 1 a 5"),
    },

    {
      name: 'tipo',
      title: 'Categoria',
      validation: (Rule) => Rule.required(),
      type: "reference",
      to: [{type: "categoria"}],
    },
    { 
      name: 'pratos',
      type: 'array',
      title: 'Pratos',
      of: [{ type:"reference", to: [{ type: "prato"}]}]
    },

  ],  
}
