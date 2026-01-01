import { defineDocumentType, makeSource } from "contentlayer2/source-files";

export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `blog/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      description: "The title of the post",
      required: true,
    },
    date: {
      type: "date",
      description: "The date of the post",
      required: true,
    },
    description: {
      type: "string",
      description: "Short description for SEO and previews",
      required: true,
    },
    image: {
      type: "string",
      description: "Cover image URL",
      required: false,
    },
    author: {
      type: "string",
      description: "Post author",
      required: false,
    },
    tags: {
      type: "list",
      of: { type: "string" },
      description: "Post tags",
      required: false,
    },
    published: {
      type: "boolean",
      description: "Whether the post is published",
      required: false,
      default: true,
    },
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (post) => post._raw.flattenedPath.replace("blog/", ""),
    },
    url: {
      type: "string",
      resolve: (post) => `/blog/${post._raw.flattenedPath.replace("blog/", "")}`,
    },
  },
}));

export default makeSource({
  contentDirPath: "content",
  documentTypes: [Post],
  mdx: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});
