
interface BlogCards  {
    authorName : string , 
    title : string , 
    content : string ,
    publishedDate : boolean

}
function BlogCard({
    authorName,
    title,
    content,
    publishedDate
} : BlogCards) {
  return (
    <div>BlogCard</div>
  )
}

export default BlogCard