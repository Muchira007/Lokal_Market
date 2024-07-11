import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'specials',
  title: 'specials',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      type: 'string',
      title: 'Description',
      validation: (Rule) => Rule.required(),
    },
    {
        name: 'price',
        type: 'number',
        title: 'price in ksh',
        validation: (Rule) => Rule.required(),
      },
    {
        name: 'rating',
        type: 'number',
        title: 'Enter a number between 1 to 5',
        validation: (Rule) => Rule.required().min(1).max(5).error('Please enter a value between 1 to 5'),
      },
      {
        name: 'ingredients',
        type: 'array',
        title: 'Ingredients',
        of: [{ type: 'string' }],
        description: 'List of ingredients for the special item',
        validation: (Rule) => Rule.required().min(1).error('Please provide at least one ingredient'),
        of: [{type: 'reference', to: [{type: 'subcategories'}]}]
      },
      {
        name: 'review',
        type: 'string',
        title: 'Reviews',
      },
    {
      name: 'image',
      type: 'image',
      title: 'Image of the Category',
    }
  ],
})