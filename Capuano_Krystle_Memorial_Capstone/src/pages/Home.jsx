import HomeTron from "../components/HomeTron";
import Navbar from "../components/NavBar";
import Quote from "../components/Quote";
import Obituary from "../components/Obituary"

export default function Home() {
  return (
    <>
        <Navbar /> 
        <HomeTron />
        <Quote />
        <Obituary/>
        </>
  );
}
