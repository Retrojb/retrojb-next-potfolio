import Image from "next/image";
import Link from "next/link";

type CoverImageProps = {
    title: string
    src: string
    slug?: string
}

const CoverImage = ({title, src, slug}: CoverImageProps) => {
    const img = (
        <Image src={src} alt={`Cover image for ${title}`} width={1300} height={630} />
    )
    return (
        <div>
            {slug ? (
                <Link as={`post/${slug}`} href="/posts/[slug]" aria-label={title}>
                    {img}
                </Link>
            ) : (
                img
            )}
        </div>
    )
}

export default CoverImage