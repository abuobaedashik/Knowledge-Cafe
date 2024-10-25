import { useEffect } from "react";
import { useState } from "react";
import EveryBlog from "../EveryBlog/EveryBlog";

const Blog = ({handleBookmark,handleMarkAsRead }) => {
    const [Blog,setBlog]=useState([]);
    useEffect(()=>{
        fetch('khowladge.json')
        .then(res=>res.json())
        .then(data=>setBlog(data))
    },[])
    return (
        <div className="md:w-2/3 mt-5">
            {Blog.map(blog=>
            <EveryBlog 
              key={blog.id}
              blog={blog}
              handleBookmark={handleBookmark}
              handleMarkAsRead ={handleMarkAsRead}
             >
            </EveryBlog>)}
        </div>
    );
};

export default Blog;