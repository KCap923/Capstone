import HomeTron from "../components/HomeTron";
import Navbar from "../components/NavBar";
import Quote from "../components/Quote";
import Obituary from "../components/Obituary"
import "../components/CSSPages/home.css"

export default function Home() {
  return (
    <>
        <Navbar /> 
        <HomeTron />
        <Quote />
        <br />
        <Obituary/>
        </>
  );
}
