import CustomHeader2 from "@/components/common/custom-header-2.component";
import { LuCalendar } from "react-icons/lu";

export default function ArticleItem({
  id = "",
  post,
}: {
  id?: string;
  post: any;
}) {
  return (
    <div id={id} className="rounded-xl bg-container">
      {post.thumbnail && /\.(png|jpe?g)$/i.test(post.thumbnail) ? (
        <img
          src={
            post.thumbnail && /\.(png|jpe?g)$/i.test(post.thumbnail)
              ? post.thumbnail
              : "/blog/no-image.jpg"
          }
          alt={post.title}
          className="w-full object-cover rounded-t-xl"
        />
      ) : null}
      <div className="p-lg">
        <a href={post.link} className="hover:text-primary">
          <CustomHeader2>{post.title}</CustomHeader2>
          <div className="flex flex-row gap-sm items-center">
            <LuCalendar className="text-2xl md:text-4xl" />
            <p>{new Date(post.pubDate).toDateString()}</p>
          </div>
        </a>
      </div>
    </div>
  );
}
