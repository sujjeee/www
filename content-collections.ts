import { defineCollection, defineConfig } from "@content-collections/core"
import { compileMDX } from "@content-collections/mdx"

const posts = defineCollection({
  name: "posts",
  directory: "src/posts",
  include: "**/*.mdx",
  schema: (z) => ({
    title: z.string(),
    description: z.string(),
    time: z.string()
  }),
  transform: async (document, { collection, cache }) => {
    const mdx = await compileMDX({ cache }, document)
    const docs = await collection.documents()
    const idx = docs.findIndex(
      (d) => document._meta.filePath === d._meta.filePath
    )

    return {
      ...document,
      mdx,
      prev: idx > 0 ? docs[idx - 1] : null,
      next: idx < docs.length - 1 ? docs[idx + 1] : null
    }
  }
})

export default defineConfig({
  collections: [posts]
})
