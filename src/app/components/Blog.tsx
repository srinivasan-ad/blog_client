import BlogCard from "./BlogCard"


function Blog() {
  return (
    <div className="flex justify-center pt-4">
        <div className="max-w-xl space-y-10">
        <BlogCard
    
    authorName = "Aditya Srinivasan"
    title = "My First Blog"
    content = "This is my first blog built using next js for client and express js for server along with postgres sql for database" 
    publishedDate = "10/02/2025"
  
  />
     <BlogCard
    
    authorName = "Aditya Srinivasan"
    title = "My First Blog"
    content = "This is my first blog built using next js for client and express js for server along with postgres sql for database" 
    publishedDate = "10/02/2025"
  
  />
     <BlogCard
    
    authorName = "Aditya Srinivasan"
    title = "My First Blog"
    content = "This is my first blog built using next js for client and express js for server along with postgres sql for database" 
    publishedDate = "10/02/2025"
  
  />
   <BlogCard
    
    authorName = "Aditya Srinivasan"
    title = "My First Blog"
    content = "This is my first blog built using next js for client and express js for server along with postgres sql for database" 
    publishedDate = "10/02/2025"
  
  />
        </div>
    </div>
  )
}

export default Blog