// Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";
// Define a `type` and `schema` for each collection
import { glob } from 'astro/loaders';

const blogCollection = defineCollection({
     loader: glob({
        pattern: '**/*.md',
        base: './src/content/blog',
    }),
    schema: z.object({
      title: z.string(),
      pubDate: z.string(),
      description: z.string(),
      image: z.string(),
      slug: z.string().optional()
    })
});
// Export a single `collections` object to register your collection(s)
export const collections = {
  blog: blogCollection,
};