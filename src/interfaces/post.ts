import type Author from "@retrojb/interfaces/author";

type PostType = {
    slug: string
    title: string
    date: string
    coverImg: string
    author: Author
    excerpt: string
    ogImg?: {
        url: string
    }
    content?: string
}

export default PostType