import React from 'react';
import '../navbar/Navbar.css';
import infilogo from '/src/images/infilogo.png';
import { useNavigate } from 'react-router-dom';
import {useScroll,useTransform,useAnimation,motion, inView} from 'framer-motion';

const Navbar = () => {

  const navigate = useNavigate()
  const animation = {
    initial: { y: "-70%" },
    enter: i => ({ y: "0", transition: { duration: 0.75, ease: [0.33, 1, 0.68, 1], delay: 0.075 * i } })
  }

  return (
    <motion.div  variants={animation} initial="initial" animate={"enter"} className='navbar-container'>
        <div className='navbar-content'>
            <div className='navbar-content-left'>
                <img onClick={()=>{navigate("/")}} className='navbarlogo' src={infilogo} width='100px' height='50px'/>
            </div>
            <div className='navbar-content-right'>
                <div onClick={()=>{navigate("/about")}} className='navbar-link'>About</div>
                <div className='navbar-link'>Services</div>
                <div className='navbar-link'>Our Works</div>
                <div className='navbar-link'>Industries</div>
                <div className='navbar-btn'>Let's talk</div>
            </div>
        </div>
    </motion.div>
  )
}

export default Navbar