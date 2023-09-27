import Author from "@retrojb/interfaces/author";
import PostTitle from "@retrojb/components/post-title";
import CoverImage from "@retrojb/components/cover-image";
import DateFormatter from "@retrojb/components/date-formatter";

type PostHeaderProps = {
    title: string
    coverImg: string
    date: string
    author: Author
}

const PostHeader = ({ title, coverImg, date, author }: PostHeaderProps) => {
    return (
        <>
        <PostTitle>{title}</PostTitle>
            <div>Will be avatar</div>
            <div>
                <CoverImage title={title} src={coverImg} />
            </div>
            <div>Will be another avatar</div>
            <div>
                <DateFormatter dateString={date} />
            </div>
        </>
    )
};

export default PostHeader