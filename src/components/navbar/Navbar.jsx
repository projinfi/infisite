import React,{useContext} from 'react';
import '../navbar/Navbar.css';
import infilogo from '/src/images/infilogo.png';
import { useNavigate } from 'react-router-dom';
import {useScroll,useTransform,useAnimation,motion, inView} from 'framer-motion';
import hamburger from '/src/images/hamburger.svg';
import {NavbarContext} from './NavbarContext'

const Navbar = () => {

  const {toggled,setToggled} = useContext(NavbarContext)

  const navigate = useNavigate()
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
                <img onClick={()=>{navigate("/")}} className='navbarlogo' src={infilogo} width='100px' height='50px'/>
            </div>
            
            <div style={{maxWidth: toggled ? '100%':'',justifyContent: toggled ? 'center':'',flexDirection : toggled ? 'column':''}} className='navbar-content-right'>
                <div onClick={()=>{navigate("/about")}} className='navbar-link'>About</div>

                <div className='navbar-link'>Services</div>
                <div className='navbar-link'>Our Works</div>
                <div className='navbar-link'>Industries</div>
                <div className='navbar-btn'>Let's talk</div>

                <div style={{display : toggled ? 'block' :'none'}} onClick={()=>{navigate("/about")}} className='navbar-mobile-link'>About</div>
                <div style={{display : toggled ? 'block' :'none'}} className='navbar-mobile-link'>Services</div>
                <div style={{display : toggled ? 'block' :'none'}} className='navbar-mobile-link'>Our Works</div>
                <div style={{display : toggled ? 'block' :'none'}} className='navbar-mobile-link'>Industries</div>
       

           
             
                <div className='navbar-toggle'>
                  {toggled ? ( <div className='navbar-cross-icon' onClick={handleToggle}>X</div> ) : ( <img onClick={handleToggle} className='hamburger-icon' src={hamburger}/>)}
               
                </div>
            </div>
        </div>


    </motion.div>
  )
}

export default Navbar