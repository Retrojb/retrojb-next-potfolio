import {ReactNode} from "react";

type PostTitleProps = {
    children?: ReactNode
}
const PostTitle = ({ children }: PostTitleProps) => {
    return (
        <h1>{children}</h1>
    )
}

export default PostTitle