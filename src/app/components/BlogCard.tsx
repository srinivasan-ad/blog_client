import Link from "next/link";

interface BlogCards {
  id: number;
  authorName: string;
  title: string;
  content: string;
  publishedDate: string;
}

function BlogCard({
  id,
  authorName,
  title,
  content,
  publishedDate,
}: BlogCards) {
  return (
    <Link href={`blog/${id}`}>
      <div className="  border-b border-slate-200  p-4 bg-white hover:shadow-lg lg:w-screen lg:max-w-4xl ">
        <div className="flex">
          <Avatar name={authorName} />

          <div className="font-thin pl-2 text-sm flex justify-center items-center flex-col">
            {authorName}
          </div>

          <div className="flex justify-center items-center flex-col pl-2">
            <Circle />
          </div>

          <div className="pl-2 font-thin text-slate-500 text-sm flex justify-center items-center flex-col">
            {new Date(publishedDate).toDateString()}
          </div>
        </div>

        <div className="text-xl font-semibold pt-2">{title}</div>

        <div className="text-md font-thin">
          {`${content.slice(0, 100)} ...`}
        </div>

        <div className="w-full text-slate-600 font-thin pt-4">
          {`${Math.ceil(content.length / 100)} minute(s) read`}
        </div>
      </div>
    </Link>
  );
}

export default BlogCard;

export function Avatar({
  name,
  size = "small",
}: {
  name: string;
  size?: "small" | "big";
}) {
  return (
    <div
      className={`relative inline-flex items-center justify-center ${
        size === "small" ? "w-6 h-6 " : "w-10 h-10 "
      }  overflow-hidden bg-gray-500 rounded-full dark:bg-gray-600`}
    >
      <span className="font-xs text-gray-100 dark:text-gray-300">
        {name[0]}
      </span>
    </div>
  );
}

function Circle() {
  return <div className="h-1 w-1 rounded-full bg-slate-600"></div>;
}
