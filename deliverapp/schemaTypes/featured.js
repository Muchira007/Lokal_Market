import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'featured',
  title: 'Featured Products',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Featured Name',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      type: 'string',
      title: 'Description',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image of the Category',
    },
    {
        name: 'specials',
        type: 'array',
        title: 'Specials',
        of: [{type: 'reference', to: [{type: 'specials'}]}]
    }
  ],
})