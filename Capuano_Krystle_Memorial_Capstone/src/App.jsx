import './App.css'
import NavBar from './components/NavBar'

// Import Route and our components
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Timeline from "./pages/Timeline"
import Memory from "./pages/Memory"
import Photos from "./pages/Photos"
import Nopage from "./pages/NoPage"


export default function App() {
  return (
    <BrowserRouter>  
    <Routes>
    <Route index element={<Home/>}/>
    <Route path="/home" element={<Home/>}/>
    <Route path="/timeline" element={<Timeline/>}/>
    <Route path="/memories" element={<Memory/>}/>
    <Route path="/photos" element={<Photos/>}/>
    <Route path="*" element={<Nopage/>}/>
    </Routes>
    </BrowserRouter>
  )
}

