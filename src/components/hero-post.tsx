import Post from "@retrojb/interfaces/post";
import Link from "next/link";
import DateFormatter from "@retrojb/components/date-formatter";
import CoverImage from "@retrojb/components/cover-image";
import {sl} from "date-fns/locale";

const HeroPost = ({ title, coverImg, date, excerpt, author, slug}: Post) => {
    return (
        <section>
            <div>
               <CoverImage title={title} src={coverImg} slug={slug} />
            </div>
            <div>
                <h3>
                    <Link as={`/posts/${slug}`} href="/posts/[slug]">{title}</Link>
                </h3>
            </div>
            <div>
                <DateFormatter dateString={date} />
            </div>
            <div>
                <p>{excerpt}</p>
            </div>
        </section>
    )
}

export default HeroPost