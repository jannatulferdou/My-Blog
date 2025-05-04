

import { useState } from 'react'
import './App.css'
import Blogs from './components/navbar/blogs/blogs'
import Navbar from './components/navbar/Navbar'

function App() {

  const [bookmark, setBookMark]=useState([]);
  const [readingCount, setReadingCount]=useState([])
  
  const handleBookMark=(blog)=>{
setBookMark([...bookmark,blog])
  }

  const handleMarkAsRead=(time, id)=>{
setReadingCount(readingCount+time);
handleRemoveFromBookMark(id);
  }
  // console.log(readingCount);
  const handleRemoveFromBookMark=(id)=>{
const remainingBook=bookmark.filter((mark)=>mark.id!==id);
setBookMark(remainingBook);
  }
  

  return (
    <>
      <Navbar></Navbar>
     

      <div className="main-container flex text-center">
      <div className="left-container w-[70%]">

        
        <Blogs handleBookMark={handleBookMark} handleMarkAsRead={handleMarkAsRead}
        ></Blogs>

      </div>
      <div className="right-container w-[30%]">
        <h1>reading time:{readingCount}</h1>
        <h1>bookmark count:{bookmark.length}</h1>
        {
          bookmark.map(marked=><p key={marked.id} className='bg-amber-200 p-4 shadow m-2 rounded-lg'>{marked.title}</p>)
        }
      </div>
      
      </div>
     
    </>
  )
}

export default App
