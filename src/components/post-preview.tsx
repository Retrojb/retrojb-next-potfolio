import Author from "@retrojb/interfaces/author";
import Link from "next/link";
import DateFormatter from "@retrojb/components/date-formatter";
import CoverImage from "@retrojb/components/cover-image";

type PostPreviewProps = {
    title: string
    coverImg: string
    date: string
    excerpt: string
    author: Author
    slug: string
}

const PostPreview = ({ title, coverImg, date, excerpt, author, slug}: PostPreviewProps) => {
    return (
        <div>
            <div>
                <CoverImage slug={slug} title={title} src={coverImg} />
            </div>
            <h3>
                <Link
                    as={`/posts/${slug}`}
                    href="/posts/[slug]"
                >
                    {title}
                </Link>
            </h3>
            <div>
                <DateFormatter dateString={date} />
            </div>
        </div>
    )
}

export default PostPreview