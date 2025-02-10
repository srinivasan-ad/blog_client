import { Avatar } from "./BlogCard";

function Bar() {
  return (
    <div className="border-b flex justify-between items-center font-extrabold px-10 py-4">
      <div>Verbser's Blog</div>
      <div>
        <Avatar name="Aditya" size="big" />
      </div>
    </div>
  );
}

export default Bar;
