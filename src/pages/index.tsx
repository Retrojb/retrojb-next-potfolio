import Post from "@retrojb/interfaces/post";
import {getAllPosts} from "@retrojb/lib/api";
import Layout from "@retrojb/components/layout";
import Head from "next/head";
import {CMS_NAME} from "@retrojb/lib/constants";
import HeroPost from "@retrojb/components/hero-post";
import MoreStories from "@retrojb/components/more-stories";

type Props = {
    allPosts: Post[]
}
export default function Index({ allPosts}: Props) {
    const heroPost = allPosts[0];
    const morePosts = allPosts.slice(1);

    return (
        <>
            <Layout>
                <Head>
                    <title>{`${CMS_NAME}`}</title>
                </Head>
                <div>
                    {heroPost && (
                        <HeroPost
                            title={heroPost.title}
                            coverImg={heroPost.coverImg}
                            date={heroPost.date}
                            author={heroPost.author}
                            slug={heroPost.slug}
                            excerpt={heroPost.excerpt}
                        />
                    )}
                    {morePosts.length > 0 && <MoreStories posts={morePosts} />}
                </div>
            </Layout>
        </>
    )
}

export const getStaticProps = async () => {
    const allPosts = getAllPosts([
        'title',
        'date',
        'slug',
        'author',
        'coverImg',
        'excerpt'
    ])
    return {
        props: { allPosts }
    }
}