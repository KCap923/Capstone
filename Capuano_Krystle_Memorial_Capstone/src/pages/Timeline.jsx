import TimeTron from "../components/Timeline";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer"
import "../components/CSSPages/timeline.css"

export default function Home() {
  return (
    <>
        <Navbar /> 
        <TimeTron/>
        <Footer/>
        </>
  );
}