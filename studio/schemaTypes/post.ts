import { defineField, defineType } from 'sanity'

export const post = defineType({
  name: 'post',
  title: 'Blog Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          { title: 'Draft', value: 'draft' },
          { title: 'Ready for Review', value: 'review' },
          { title: 'Published', value: 'published' },
        ],
        layout: 'radio',
      },
      initialValue: 'draft',
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
    }),
    defineField({
      name: 'targetState',
      title: 'Target State',
      type: 'string',
      options: {
        list: [
          { title: 'Florida', value: 'FL' },
          { title: 'Michigan', value: 'MI' },
          { title: 'North Carolina', value: 'NC' },
          { title: 'Arizona', value: 'AZ' },
          { title: 'Texas', value: 'TX' },
          { title: 'Georgia', value: 'GA' },
          { title: 'Indiana', value: 'IN' },
          { title: 'National', value: 'NATIONAL' },
        ],
      },
    }),
    defineField({
      name: 'contentTrack',
      title: 'Content Track',
      type: 'string',
      options: {
        list: [
          { title: 'ACA Subsidy Crisis', value: 'aca_crisis' },
          { title: 'Life Insurance Trojan Horse', value: 'life_insurance' },
          { title: 'Medicaid Unwinding', value: 'medicaid' },
          { title: 'SEP Strategy', value: 'sep' },
          { title: 'General Education', value: 'general' },
        ],
      },
    }),
    defineField({
      name: 'bridgeType',
      title: 'Life Insurance Bridge Type',
      type: 'string',
      options: {
        list: [
          { title: 'Type A — Found Money', value: 'A' },
          { title: 'Type B — Living Benefits', value: 'B' },
          { title: 'Type C — Early Retiree', value: 'C' },
          { title: 'None', value: 'none' },
        ],
      },
      initialValue: 'A',
    }),
    defineField({
      name: 'seo',
      title: 'SEO Settings',
      type: 'object',
      fields: [
        defineField({
          name: 'metaTitle',
          title: 'Meta Title (65 chars max)',
          type: 'string',
          validation: (Rule) => Rule.max(65),
        }),
        defineField({
          name: 'metaDescription',
          title: 'Meta Description (155 chars max)',
          type: 'string',
          validation: (Rule) => Rule.max(155),
        }),
        defineField({
          name: 'focusKeyword',
          title: 'Focus Keyword',
          type: 'string',
        }),
      ],
    }),
    defineField({
      name: 'body',
      title: 'Article Body',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'H2', value: 'h2' },
            { title: 'H3', value: 'h3' },
            { title: 'Quote', value: 'blockquote' },
          ],
          marks: {
            decorators: [
              { title: 'Bold', value: 'strong' },
              { title: 'Italic', value: 'em' },
            ],
          },
        },
      ],
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt (for cards/previews)',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'gapDefeated',
      title: 'Gap Defeated (internal note)',
      type: 'string',
      description: 'What weak content are we replacing? (SEO Publisher fills this)',
    }),
    defineField({
      name: 'targetQuery',
      title: 'Target Query (internal note)',
      type: 'string',
      description: 'The exact search query this article targets',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      status: 'status',
      targetState: 'targetState',
      contentTrack: 'contentTrack',
    },
    prepare({ title, status, targetState, contentTrack }) {
      return {
        title,
        subtitle: `${status?.toUpperCase()} · ${targetState ?? 'NATIONAL'} · ${contentTrack ?? 'general'}`,
      }
    },
  },
})
