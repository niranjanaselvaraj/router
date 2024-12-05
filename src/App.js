import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Pages/Home"
import About from "./Pages/About"
import Users from "./Pages/Users"
import User from "./Pages/User"
import Contact from "./Pages/Contact"
import Navbar from "./components/Navbar"

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>}  />
        <Route path="/users" element={<Users/>}  />
        <Route path="/user/:username" element={<User/>}  />
        <Route path="/contact" element={<Contact/>}  />
        </Routes>
        </BrowserRouter>
  )
}

export default App;
