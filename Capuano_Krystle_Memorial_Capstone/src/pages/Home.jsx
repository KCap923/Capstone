import HomeTron from "../components/Home";
import Navbar from "../components/NavBar";
import Quote from "../components/Quote";
import Obituary from "../components/Obituary"
import Footer from "../components/Footer"
import "../components/CSSPages/home.css"

export default function Home() {
  return (
    <>
        <Navbar /> 
        <HomeTron />
        <Quote />
        <br />
        <Obituary/>
        <Footer/>
        </>
  );
}
