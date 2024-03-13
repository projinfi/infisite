import React from 'react';
import '../navbar/Navbar.css';
import infilogo from '/src/images/infilogo.png'

const Navbar = () => {
  return (
    <div className='navbar-container'>
        <div className='navbar-content'>
            <div className='navbar-content-left'>
                <img src={infilogo} width='100px' height='50px'/>
            </div>
            <div className='navbar-content-right'>
                <div className='navbar-link'>About</div>
                <div className='navbar-link'>Services</div>
                <div className='navbar-link'>Our Works</div>
                <div className='navbar-link'>Industries</div>
                <div className='navbar-btn'>Let's talk</div>
            </div>
        </div>
    </div>
  )
}

export default Navbar