import fs from "fs";
import { join } from "path";
import matter from "gray-matter"

const postDirectory = join(process.cwd(), 'src/_posts');

export function getPostSlugs() {
    return fs.readdirSync(postDirectory)
}

export function getPostBySlug(slug: string, fields: string[] = []) {
    const realSlug = slug.replace(/\.md$/, '')
    const fullPath = join(postDirectory, `${realSlug}.md`)
    const fileContent = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContent)

    type Items = {
        [key: string]: string
    }

    const items: Items = {}

    fields.forEach((field) => {
        if ( field === 'slug') {
            items[field] = realSlug
        }
        if ( field === 'content') {
            items[field] = content
        }
        if ( typeof data[field] !== 'undefined') {
            items[field] = data[field]
        }
    })
    return items;
};

export function getAllPosts(fields: string[] = []) {
    const slugs = getPostSlugs()
    const posts = slugs
        .map((slug) => getPostBySlug(slug, fields))
        .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
    return posts
}