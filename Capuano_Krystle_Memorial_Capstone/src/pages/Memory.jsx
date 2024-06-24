import Navbar from '../components/NavBar'
import MemoryTron from "../components/Memory"
import "../components/CSSPages/memory.css"
import Footer from "../components/Footer"

export default function Memory() {
  return (
    <>
      <Navbar />
      <h1> Memory Page </h1>
      <MemoryTron/>
      <Footer/>
    </>
  );
}