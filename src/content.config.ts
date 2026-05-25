import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
    category: z.string().default('Copywriting'),
    tags: z.array(z.string()).default([]),
    readingTime: z.number().optional(),
    draft: z.boolean().default(false),
    author: z.object({
      name: z.string(),
      url: z.string().optional(),
    }).default({ name: 'Karol Leszczyński', url: '/o-autorze/' }),
  }),
});

export const collections = { blog };
