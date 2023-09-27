
type PostBodyProps = {
    content: string
}

const PostBody = ({ content }: PostBodyProps) => {
    return (
        <div>
            <div dangerouslySetInnerHTML={{ __html: content }} />
        </div>
    )
}

export default PostBody