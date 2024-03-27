import React,{useContext} from 'react';
import '../navbar/Navbar.css';
import infilogo from '/src/images/infilogo.png';
import { useNavigate } from 'react-router-dom';
import {useScroll,useTransform,useAnimation,motion, inView} from 'framer-motion';
import hamburger from '/src/images/hamburger.svg';
import {NavbarContext} from './NavbarContext';
import { Link } from 'react-router-dom';

const Navbar = ({activelink,onLinkChange}) => {

  const {toggled,setToggled} = useContext(NavbarContext)

 
  const navigate = useNavigate()

  const navigateHome = () => {
    onLinkChange('')
    navigate('/')
  }

  const animation = {
    initial: { y: "-70%" },
    enter: i => ({ y: "0", transition: { duration: 0.75, ease: [0.33, 1, 0.68, 1], delay: 0.075 * i } })
  }

  const handleToggle = () => {
    setToggled(!toggled)
  }

  console.log(toggled)

  return (
    <motion.div  variants={animation} initial="initial" animate={"enter"} className='navbar-container'>

        <div style={{height : toggled ? '400px':'', flexDirection : toggled ? 'column':'',alignItems: toggled ? 'flex-start' :'' }} className='navbar-content'>
            <div className='navbar-content-left'>
                <img onClick={navigateHome} className='navbarlogo' src={infilogo} width='100px' height='50px'/>
            </div>
            
        <div style={{ maxWidth: toggled ? '100%' : '', justifyContent: toggled ? 'center' : '', flexDirection: toggled ? 'column' : '' }} className='navbar-content-right'>
          <div className='navbar-link'>
            <Link onClick={() => { onLinkChange('about') }} style={{ textDecoration: 'none', color: activelink === 'about' ? '#146EF8' :'white', fontWeight: activelink === 'about' ? '800' :'' }} to='/about'>About</Link>
          </div>

          <div onClick={() => { navigate("/services") }} className='navbar-link'>
            <Link onClick={() => { onLinkChange('services') }} style={{ textDecoration: 'none', color: activelink === 'services' ? '#146EF8' :'white', fontWeight: activelink === 'services' ? '800' :''  }} to='/services'>Services</Link>
          </div>
          <div onClick={() => { navigate("/works") }} className='navbar-link'>
            <Link onClick={() => { onLinkChange('works') }} style={{ textDecoration: 'none',color: activelink === 'works' ? '#146EF8' :'white', fontWeight: activelink === 'works' ? '800' :''  }} to='/works'>Our Works</Link>
          </div>
          <div onClick={() => { navigate("/industries") }} className='navbar-link'>
            <Link onClick={() => { onLinkChange('industries') }} style={{ textDecoration: 'none',color: activelink === 'industries' ? '#146EF8' :'white', fontWeight: activelink === 'industries' ? '800' :''  }} to='/industries'>Industries</Link>
          </div>
          <div className='navbar-btn'>Let's talk</div>

                <div style={{display : toggled ? 'block' :'none'}} onClick={()=>{navigate("/about")}} className='navbar-mobile-link'>
                <Link onClick={() => { onLinkChange('about') }} style={{ textDecoration: 'none', color: activelink === 'about' ? '#146EF8' :'white', fontWeight: activelink === 'about' ? '800' :'' }} to='/about'>About</Link>
                </div>
                <div style={{display : toggled ? 'block' :'none'}} onClick={()=>{navigate("/services")}} className='navbar-mobile-link'>
                <Link onClick={() => { onLinkChange('services') }} style={{ textDecoration: 'none', color: activelink === 'services' ? '#146EF8' :'white', fontWeight: activelink === 'services' ? '800' :''  }} to='/services'>Services</Link>
                </div>
                <div style={{display : toggled ? 'block' :'none'}} onClick={()=>{navigate("/works")}} className='navbar-mobile-link'>
                   <Link onClick={() => { onLinkChange('works') }} style={{ textDecoration: 'none',color: activelink === 'works' ? '#146EF8' :'white', fontWeight: activelink === 'works' ? '800' :''  }} to='/works'>Our Works</Link>
                </div>
                <div style={{display : toggled ? 'block' :'none'}} onClick={()=>{navigate("/industries")}} className='navbar-mobile-link'>
                <Link onClick={() => { onLinkChange('industries') }} style={{ textDecoration: 'none',color: activelink === 'industries' ? '#146EF8' :'white', fontWeight: activelink === 'industries' ? '800' :''  }} to='/industries'>Industries</Link>
                </div>
       

           
             
                <div className='navbar-toggle'>
                  {toggled ? ( <div className='navbar-cross-icon' onClick={handleToggle}>X</div> ) : ( <img onClick={handleToggle} className='hamburger-icon' src={hamburger}/>)}
               
                </div>
            </div>
        </div>


    </motion.div>
  )
}

export default Navbar