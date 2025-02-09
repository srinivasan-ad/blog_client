import useBlogs from "../hooks"
import Bar from "./Bar"
import BlogCard from "./BlogCard"


function Blog() {
    const {loading,blogs} = useBlogs()
    if(loading)
    {
        return(
        <div>
            ...loading
        </div>
        )
    }
  return (
    <div>
<Bar/>
    <div className="flex justify-center pt-4">
        <div className="max-w-xl space-y-10">
        {blogs.map((blog: any) => (
            <BlogCard
              key={blog.id}
              authorName={blog.authorName}
              title={blog.title}
              content={blog.content}
              publishedDate={new Date(blog.created_at).toLocaleDateString()}
            />
          ))}
   
        </div>
    </div>
    </div>
  )
}

export default Blog