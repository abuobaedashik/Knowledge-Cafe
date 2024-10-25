import { useState } from 'react';
import './App.css'
import Blog from './assets/components/Blogs/Blog'
import Bookmarks from './assets/components/Bookmarks/Bookmarks'
import Header from './assets/components/Header'

function App() {
  const [bookmarks , setbookmarks]= useState([]);
  const handleBookmark=blog=>{
    const newBookmark=[...bookmarks,blog]
    setbookmarks(newBookmark)
  }
  return (
    <>
      <Header></Header>
      <main className='md:flex gap-3 mt-6'>
       <Blog handleBookmark={handleBookmark}></Blog>
       <Bookmarks bookmarks={bookmarks}></Bookmarks>
      </main>
    </>
  )
}

export default App
