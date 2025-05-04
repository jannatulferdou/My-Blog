import React from 'react';
import { FaBookmark } from "react-icons/fa";

const Blog = ({blog, handleBookMark, handleMarkAsRead}) => {
    // const {blog}=props;
    // console.log(blog);
    
    return (
        <div className='m-3'>
            
            <div className="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img
      src={blog.cover}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <div className="author flex justify-around items-center">
        <h3>{blog.author}</h3>
        <img src={blog.author_img} alt="" className='w-15' />
        <button onClick={()=>handleBookMark(blog)}><FaBookmark size={25} /></button>
        
    </div>
    <h2 className="card-title">{blog.title}</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>

   <div className="flex">
   {
        blog.hashtags.map(has=><p key={has}>{has}</p>)
    }
   </div>
    <div className="card-actions justify-end">
      <button className="btn btn-primary" onClick={()=>handleMarkAsRead(blog.reading_time, blog.id)}>mark as read</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Blog;