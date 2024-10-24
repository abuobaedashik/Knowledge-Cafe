import { useEffect } from "react";
import { useState } from "react";
import EveryBlog from "../EveryBlog/EveryBlog";

const Blog = () => {
    const [Blog,setBlog]=useState([]);
    useEffect(()=>{
        fetch('khowladge.json')
        .then(res=>res.json())
        .then(data=>setBlog(data))
    },[])
    return (
        <div>
            <h3>Total item:{Blog.length}</h3>
            {Blog.map(blog=><EveryBlog key={blog.id} blog={blog}></EveryBlog>)}
        </div>
    );
};

export default Blog;