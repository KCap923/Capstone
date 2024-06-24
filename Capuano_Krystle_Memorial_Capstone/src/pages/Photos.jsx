import Navbar from '../components/NavBar'
import PhotoCards from '../components/PhotoCards';
import "../components/CSSPages/photos.css"

export default function Photo() {
  return (
    <>
      <Navbar />
      <h1> Mima & Honey </h1>
      <PhotoCards/>
    </>
  );
}