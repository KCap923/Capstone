import { useState } from "react";
import Navbar from "../components/NavBar";
import MemoryTron from "../components/Memory";
import NewComment from "../components/Comments";
import "../components/CSSPages/memory.css";
import Footer from "../components/Footer";

export default function Memory() {
  //Holds all of the State and fetches all the comments to display
  const [Comments, setComments] = useState([]);

  // Grabbing API/ Send a request to our API when someone submits a comment
  const baseUrl = "https://capstone-memorial-backend.onrender.com";

  return (
    <>
      <Navbar />
      <h1> Memory Page </h1>
        <MemoryTron />
        <br />
      {/* Creating prop (comments={Comments}) and passing setter function (setComments={setComments}) */}
      {/* Once we get a new comment after getting a response, then updates  */}
      <NewComment
        comments={Comments}
        setComments={setComments}
        baseURL={baseUrl}
      />
    
      <Footer />
    </>
  );
}
