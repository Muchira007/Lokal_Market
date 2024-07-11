import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Category Name',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      type: 'string',
      title: 'Category Name',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image of the Category',
    },
    {
      name: 'subcategory',
      type: 'array',
      title: 'subcategory',
      of: [{type: 'reference', to: [{type: 'subcategories'}]}]
  }
  ],
})
