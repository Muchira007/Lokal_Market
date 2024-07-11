import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'users',
  title: 'users',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'password',
      type: 'string',
      title: 'subcategory Name',
      validation: (Rule) => Rule.required(),
    }
  ],
})