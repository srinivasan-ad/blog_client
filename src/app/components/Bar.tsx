import { Avatar } from "./BlogCard"


function Bar() {
  return (
    <div className="border-b flex justify-between px-10 py-4">
        <div>
            Verbser's Blog
        </div>
        <div>
   <Avatar name = "Aditya" size = {6}/>
        </div>
    </div>
  )
}

export default Bar