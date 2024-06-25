import { useState } from 'react'
import Navbar from '../components/NavBar'
import MemoryTron from "../components/Memory"
import NewComment from '../components/Comments'
import "../components/CSSPages/memory.css"
import Footer from "../components/Footer"


export default function Memory() {

  const [Comments, setComments] = useState ([])

  return (
    <>
      <Navbar />
      <h1> Memory Page </h1>
      {/* Creating prop (comments={Comments}) and passing setter function (setComments={setComments}) */}
      <NewComment comments={Comments} setComments={setComments}/>
      <MemoryTron/>
      <Footer/>
    </>
  );
}