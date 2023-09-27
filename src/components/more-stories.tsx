import PostPreview from './post-preview'
import Post from "@retrojb/interfaces/post";

type MoreStoriesProps = {
    posts: Post[]
}

const MoreStories = ({ posts}: MoreStoriesProps) => {
    return (
        <section>
            <h2>More Stories</h2>
            <div>
                {posts.map((post) => (
                    <PostPreview
                    key={post.slug}
                    title={post.title}
                    coverImg={post.coverImg}
                    date={post.date}
                    author={post.author}
                    slug={post.slug}
                    excerpt={post.excerpt}
                    />
                ))}
            </div>
        </section>
    )
};

export default MoreStories;
