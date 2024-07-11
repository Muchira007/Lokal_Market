import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'subcategories',
  title: 'subcategories',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'subcategory Name',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      type: 'string',
      title: 'subcategory Name',
      validation: (Rule) => Rule.required(),
    },
    {
        name: 'price',
        type: 'number',
        title: 'price in ksh',
        validation: (Rule) => Rule.required(),
      },
    {
      name: 'image',
      type: 'image',
      title: 'Image of the Category',
    }
  ],
})