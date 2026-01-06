import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/navbar"
import Footer from "./components/footer"
import ScrollToTop from "./components/ScrollToTop"
import Home from "./pages/home"
import About from "./pages/about"
import Directors from "./pages/directors"
import Sustainability from "./pages/sustainability"
import Directory from "./pages/directory"
import Captains from "./pages/captains"
import Forms from "./pages/forms-and-applications"
import CaptainApps from "./pages/captain-application"
import Events from "./pages/events"

function App() {
  return (
    <BrowserRouter>
    <ScrollToTop />
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/about/directors" element={<Directors />} />
        <Route path="/about/sustainability" element={<Sustainability />} />
        <Route path="/directory" element={<Directory />} />
        <Route path="/participate/volunteers/captains" element={<Captains />} />
        <Route path="/participate/forms-and-applications" element={<Forms />} />
        <Route path="/participate/forms-and-applications/captain-application" element={<CaptainApps />} />
        <Route path="/events" element={<Events />} />
      </Routes>
    <Footer />
    </BrowserRouter>
  )
}

export default App
