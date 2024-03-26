import React,{useRef} from 'react';
import '../about/About.css';
import aboutlines from '/src/images/homelines.svg';
import abouttext from '/src/images/abouttext.svg';
import {useScroll,useTransform,useAnimation,motion} from 'framer-motion';
import { useInView } from 'react-intersection-observer';

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

      const { ref:ref1, inView:view1 } = useInView({
        threshold: 0.75,
        triggerOnce: true
    });

      const animation = {
        initial : {y:"30%"},
        enter : i => ({y:'0',transition:{duration:0.75,ease:[0.33, 1, 0.68, 1],delay: 0.075 * i }})
      }
      const animation2 = {
        initial : {y:"100%"},
        enter : i => ({y:'0',transition:{duration:0.75,ease:[0.33, 1, 0.68, 1],delay: 0.075 * i }})
      }

  return (
      <div  className='about-container'>
          <img className='aboutlines' src={aboutlines} />
          <div ref={ref1} className='aboutus-scroller-container'>
              <motion.div variants={marqueeVariants} animate="animate" className='aboutus-scroller-space'>
                  {scrollLimit.map((item, index) => (
                      <div key={index}> <img className='abouttext' src={abouttext} /></div>
                  ))}
              </motion.div>
          </div>
      <div  className='about-header'>
        <motion.div variants={animation}  initial="initial" animate={view1 ? "enter" : ""} className='aboutus-title'>ABOUT</motion.div>
        <motion.div  variants={animation}  initial="initial" animate={view1 ? "enter" : ""} className='aboutus-description'>We believe in transcending boundaries and redefining digital excellence. Our journey began with a vision to revolutionize the digital landscape, empowering businesses with innovative solutions tailored to their unique needs.</motion.div>
        <motion.div  variants={animation2}  initial="initial" animate={view1 ? "enter" : ""} className='aboutus-button'>
          <div className='talk-toexperts-title'>Talk to our Experts</div>
          <div className='talk-toexperts-icon'>
            <svg className='featuredsvg' width="30" height="30" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 35C28.2843 35 35 28.2843 35 20C35 11.7157 28.2843 5 20 5C11.7157 5 5 11.7157 5 20C5 28.2843 11.7157 35 20 35Z" stroke="white" stroke-width="2" stroke-miterlimit="10" />
              <path d="M20.9531 25.2969L26.25 20L20.9531 14.7031" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M13.75 20H26.25" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </div>
      </motion.div>
    </div>
      </div>
  )
}

export default About