import { useState, useEffect } from "react";
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

  // Define function
  useEffect(() => {
    const getComments = async () => {
      try {
        const response = await fetch(`${baseUrl}/comments`);

        if (response.status !== 200) {
          return;
        }

        const data = await response.json();

        setComments(data);
      } catch (err) {
        console.log(err);
      }
    };

    // Run Function
    getComments();
  }, []);

  return (
    <>
      <Navbar />
      <h1> Memory Page </h1>
      {/* Heart Icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="35"
        height="35"
        fill="#27374D"
        className="bi bi-suit-heart-fill"
        viewBox="0 0 16 16"
      >
        <path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1" />
      </svg>

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
