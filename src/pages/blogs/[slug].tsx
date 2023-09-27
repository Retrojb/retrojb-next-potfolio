import {useRouter} from "next/router";
import ErrorPage from "next/error";
import PostType from "@retrojb/interfaces/post";
import React from "react";
import Layout from "@retrojb/components/layout";
import PostTitle from "@retrojb/components/post-title";
import Head from "next/head";
import Header from "@retrojb/components/header";
import PostHeader from "@retrojb/components/post-header";
import PostBody from "@retrojb/components/post-body";
import {getAllPosts, getPostBySlug} from "@retrojb/lib/api";
import mdToHtml from "@retrojb/lib/mdToHtml";

type BlogPostProps = {
    post: PostType
    morePosts: PostType[]
    preview?: boolean
}

export default function BlogPost({ post, morePosts, preview}: BlogPostProps) {
    const router = useRouter();
    const title = `${post.title}`
    if (!router.isFallback && !post?.slug) {
        return <ErrorPage statusCode={400} />
    }

    // @ts-ignore
    return (
        <Layout preview={preview}>
            <div>
                <Header />
                {router.isFallback ? (
                    <PostTitle>Loading...</PostTitle>
                ) : (
                    <>
                        <article>
                            <Head>
                                <title>{title}</title>
                                <meta property="og:image" content={post.ogImg?.url} />
                            </Head>
                            <PostHeader title={post.title} coverImg={post.coverImg} date={post.date} author={post.author} />
                            <PostBody content={post.content} />

                        </article>
                    </>
                )}
            </div>
        </Layout>
    )
}
type Params = {
    params: {
        slug: string
    }
}

export async function getStaticProps({ params }: Params) {
    const post = getPostBySlug(params.slug, [
        'title',
        'date',
        'slug',
        'author',
        'content',
        'ogImage',
        'coverImg'
    ])

    const content = await mdToHtml(post.content || '');

    return {
        props: {
            post: {
                ...post,
                content,
            }
        }
    }
}

export async function getStaticPaths() {
    const posts = getAllPosts(['slug'])

    return {
        paths: posts.map((post) => {
            return {
                params: {
                    slug: post.slug,
                }
            }
        }),
        fallback: false
    }
}