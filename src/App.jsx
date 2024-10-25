import { useState } from 'react';
import './App.css'
import Blog from './assets/components/Blogs/Blog'
import Bookmarks from './assets/components/Bookmarks/Bookmarks'
import Header from './assets/components/Header'

function App() {
  const [bookmarks , setbookmarks]= useState([]);
  const[markAsRead,setMarkAsRead]=useState(0);

  const handleBookmark=blog=>{
    const newBookmark=[...bookmarks,blog]
    setbookmarks(newBookmark)
  }

  const handleMarkAsRead =time=>{
    console.log("Hello click",time);
    setMarkAsRead(markAsRead+time)
  }
  return (
    <>
      <Header></Header>
      <h1> All Blogs</h1>
      <main className='md:flex gap-5 mt-6'>
       <Blog handleBookmark={handleBookmark} handleMarkAsRead ={handleMarkAsRead}></Blog>
       <Bookmarks bookmarks={bookmarks} markAsRead={markAsRead}></Bookmarks>
      </main>
    </>
  )
}

export default App
