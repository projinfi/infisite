import React from 'react';
import '../about/About.css';
import aboutlines from '/src/images/homelines.svg';
import abouttext from '/src/images/abouttext.svg';
import {useScroll,useTransform,useAnimation,motion} from 'framer-motion';

const About = () => {

    const scrollLimit = Array.from({ length: 50 }, (_, index) => index);
    const marqueeVariants = {
        animate: {
          x: [0, -4035],
          transition: {
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 100,
              ease: "linear",
            },
          },
        },
      }; 

  return (
      <div className='about-container'>
          <img className='aboutlines' src={aboutlines} />
          <div className='aboutus-scroller-container'>
              <motion.div variants={marqueeVariants} animate="animate" className='aboutus-scroller-space'>
                  {scrollLimit.map((item, index) => (
                      <div key={index}> <img className='abouttext' src={abouttext} /></div>
                  ))}
              </motion.div>
          </div>
          <div className='about-header'>
              <div className='aboutus-title'>ABOUT</div>
              <div className='aboutus-description'>We believe in transcending boundaries and redefining digital excellence. Our journey began with a vision to revolutionize the digital landscape, empowering businesses with innovative solutions tailored to their unique needs.</div>
              <div className='aboutus-button'>
                <div className='talk-toexperts-title'>Talk to our Experts</div>
                <div className='talk-toexperts-icon'>
                <svg className='featuredsvg' width="30" height="30" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 35C28.2843 35 35 28.2843 35 20C35 11.7157 28.2843 5 20 5C11.7157 5 5 11.7157 5 20C5 28.2843 11.7157 35 20 35Z" stroke="white" stroke-width="2" stroke-miterlimit="10" />
                <path d="M20.9531 25.2969L26.25 20L20.9531 14.7031" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M13.75 20H26.25" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
                </div>
              </div>
          </div>
      </div>
  )
}

export default About