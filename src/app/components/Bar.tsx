import { Avatar } from "./BlogCard";

function Bar() {
  return (
    <div className="border-b flex justify-between items-center font-extrabold px-10 py-4">
      <div>Verbser's Blog</div>
      <div className="flex  items-center px-10 py-4 gap-x-10">
        <h1>All Blogs</h1>
        <h1>Create Blog</h1>
        <Avatar name="Aditya" size="big" />
      </div>
    </div>
  );
}

export default Bar;
