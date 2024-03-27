import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Lenis from '@studio-freight/lenis'
import About from './pages/about/About';
import { NavbarProvider } from './components/navbar/NavbarContext';
import Industries from './pages/industries/Industries';
import Services from './pages/services/Services';
import OurWorks from './pages/ourworks/OurWorks';
import { useEffect, useState } from 'react';


function App() {

  const [activelink, setActiveLink] = useState(null)

  const onLinkChange = (link) => {
    setActiveLink(link)
    sessionStorage.setItem('activeLink',link)
  }

  useEffect(()=>{

   const storedActiveLink = sessionStorage.getItem('activeLink')

  if(storedActiveLink || activelink){
    setActiveLink(storedActiveLink)
  }else{
    setActiveLink('')
  }

  },[])

  console.log(activelink)

  const lenis = new Lenis()
  lenis.on('scroll', (e) => {
    console.log(e)
  })

  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }

  requestAnimationFrame(raf)

  return (
    <>
      <Router>
        <NavbarProvider>
          <Navbar activelink={activelink} onLinkChange={onLinkChange} />
        </NavbarProvider>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/industries' element={<Industries />} />
          <Route path='/works' element={<OurWorks />} />
          <Route path='/services' element={<Services />} />
        </Routes>
        <Footer activelink={activelink} onLinkChange={onLinkChange} />
      </Router>
    </>
  )
}

export default App
