import React,{useRef,useEffect,useState} from 'react';
import '../home/Home.css';
import homeperson from '/src/images/homeperson.png';
import homec1 from '/src/images/homec1.png';
import homec2 from '/src/images/homec2.png';
import homec3 from '/src/images/homec3.png';
import homec4 from '/src/images/homec4.png';
import homec5 from '/src/images/homec5.png';
import playicon from '/src/images/playicon.svg';
import {useScroll,useTransform,useAnimation} from 'framer-motion';
import { ScrollTrigger } from 'gsap/all';
import gsap from 'gsap';
import { useInView } from 'react-intersection-observer';

const Home = () => {

    let xPercent = 0;
     let direction = -80;
    const [scrollDirection, setScrollDirection] = useState('down');
    const firstText = useRef(null);
    const controls = useAnimation();
    const slider = useRef(null);
    const [inViewRef1, inView1] = useInView();
    const [inViewRef2, inView2] = useInView();

    const animate = () => {
        if (xPercent < -100) {
          xPercent = 0;
        } else if (xPercent > 0) {
          xPercent = -100;
        }
        gsap.set(firstText.current, { xPercent: xPercent });
        xPercent += 0.1; // Adjust the speed of the scroll
        
        requestAnimationFrame(animate);
      };
      

      useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.to(slider.current, {
          scrollTrigger: {
            trigger: document.documentElement,
            scrub: 0.2, // Adjust this value
            start: 0,
            end: window.innerHeight,
            onUpdate: (e) => {
              direction = e.direction * -1;
            }
          },
          x: '-100px'
        });
        
     
      }, []);

      useEffect(() => {
        if (inView1 || inView2) {
          controls.start({
            x: scrollDirection === 'down' ? '100%' : '-100%',
            transition: { duration: 10, ease: 'linear' },
            loop: Infinity // Add loop property to make it loop indefinitely
          });
        }
      }, [inView1, inView2, controls, scrollDirection]);

      useEffect(() => {
        const handleScroll = () => {
          const newScrollDirection = window.scrollY > 0 ? 'up' : 'down';
          setScrollDirection(newScrollDirection);
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
      

  return (
    <div className='home-container'>
        <div className='intro-container'>
            <div className='intro-section'>
                <div className='intro-left'>
                    <div className='intro-title'>Crafting Experiences that <span className='matters-txt'>Matters.</span></div>
                    <div className='intro-description'>Join us on a journey beyond boundaries as we transform your vision into a limitless digital reality.</div>
                    <div className='intro-more-btns'>
                        <div className='get-free-quote'>
                            <div className='free-quote-text'>Get a Free Quote</div>
                              <div className='free-quote-icon'>
                                  <svg className='quote-icon' width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M20 35C28.2843 35 35 28.2843 35 20C35 11.7157 28.2843 5 20 5C11.7157 5 5 11.7157 5 20C5 28.2843 11.7157 35 20 35Z" stroke="white" stroke-width="2" stroke-miterlimit="10" />
                                      <path d="M20.9531 25.2969L26.25 20L20.9531 14.7031" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                      <path d="M13.75 20H26.25" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                  </svg>
                              </div>
                          </div>
                        <div className='explore-btn'>Explore More</div>
                    </div>
                
                         
                </div>
                <div className='intro-right'>
                   
                      <div className='home-image'>
                          <img src={homec1} className='home-image-elements element1' />
                          <img src={homec2} className='home-image-elements element2' />
                          <img src={homec3} className='home-image-elements element3' />
                          <img src={homec4} className='home-image-elements element4' />
                          <img src={homec5} className='home-image-elements element5' />
                        
                          <img className='home-person' src={homeperson} />
                     
                       
                      </div>
               
                </div>
             
            </div>
            <div className='scroller-container'>
              <div className='scroller-space'  ref={slider}>
                  <div ref={firstText} className='scroll-contents'>
                      <div className='scroll-text'>Infideck</div>
                      <div className='scroll-icon'>
                          <svg className='rotate-svg' width="57" height="56" viewBox="0 0 57 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M53.0585 26.8801L3.96806 29.1492M27.3787 3.46944L29.6479 52.5599M14.8571 42.9945L42.1695 13.0348M43.4932 41.6709L13.5334 14.3584" stroke="black" stroke-width="6.14286" stroke-linecap="round" stroke-linejoin="round" />
                          </svg>
                      </div>
                  </div>
                  <div ref={firstText} className='scroll-contents'>
                      <div className='scroll-text'>Infideck</div>
                      <div className='scroll-icon'>
                          <svg className='rotate-svg' width="57" height="56" viewBox="0 0 57 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M53.0585 26.8801L3.96806 29.1492M27.3787 3.46944L29.6479 52.5599M14.8571 42.9945L42.1695 13.0348M43.4932 41.6709L13.5334 14.3584" stroke="black" stroke-width="6.14286" stroke-linecap="round" stroke-linejoin="round" />
                          </svg>
                      </div>
                  </div>
                  <div ref={firstText} className='scroll-contents'>
                      <div className='scroll-text'>Infideck</div>
                      <div className='scroll-icon'>
                          <svg className='rotate-svg' width="57" height="56" viewBox="0 0 57 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M53.0585 26.8801L3.96806 29.1492M27.3787 3.46944L29.6479 52.5599M14.8571 42.9945L42.1695 13.0348M43.4932 41.6709L13.5334 14.3584" stroke="black" stroke-width="6.14286" stroke-linecap="round" stroke-linejoin="round" />
                          </svg>
                      </div>
                  </div>
                  <div ref={firstText} className='scroll-contents'>
                      <div className='scroll-text'>Infideck</div>
                      <div className='scroll-icon'>
                          <svg className='rotate-svg' width="57" height="56" viewBox="0 0 57 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M53.0585 26.8801L3.96806 29.1492M27.3787 3.46944L29.6479 52.5599M14.8571 42.9945L42.1695 13.0348M43.4932 41.6709L13.5334 14.3584" stroke="black" stroke-width="6.14286" stroke-linecap="round" stroke-linejoin="round" />
                          </svg>
                      </div>
                  </div>
                  <div ref={firstText} className='scroll-contents'>
                      <div className='scroll-text'>Infideck</div>
                      <div className='scroll-icon'>
                          <svg className='rotate-svg' width="57" height="56" viewBox="0 0 57 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M53.0585 26.8801L3.96806 29.1492M27.3787 3.46944L29.6479 52.5599M14.8571 42.9945L42.1695 13.0348M43.4932 41.6709L13.5334 14.3584" stroke="black" stroke-width="6.14286" stroke-linecap="round" stroke-linejoin="round" />
                          </svg>
                      </div>
                  </div>
                  <div ref={firstText} className='scroll-contents'>
                      <div className='scroll-text'>Infideck</div>
                      <div className='scroll-icon'>
                          <svg className='rotate-svg' width="57" height="56" viewBox="0 0 57 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M53.0585 26.8801L3.96806 29.1492M27.3787 3.46944L29.6479 52.5599M14.8571 42.9945L42.1695 13.0348M43.4932 41.6709L13.5334 14.3584" stroke="black" stroke-width="6.14286" stroke-linecap="round" stroke-linejoin="round" />
                          </svg>
                      </div>
                  </div>
                  <div ref={firstText} className='scroll-contents'>
                      <div className='scroll-text'>Infideck</div>
                      <div className='scroll-icon'>
                          <svg className='rotate-svg' width="57" height="56" viewBox="0 0 57 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M53.0585 26.8801L3.96806 29.1492M27.3787 3.46944L29.6479 52.5599M14.8571 42.9945L42.1695 13.0348M43.4932 41.6709L13.5334 14.3584" stroke="black" stroke-width="6.14286" stroke-linecap="round" stroke-linejoin="round" />
                          </svg>
                      </div>
                  </div>
              </div>



          </div>
        </div>

        {/* scroller */}
          
          <div className='whyus-container'>
            <div className='whyus-content'>
            <div className='whyus-title'>Join us on a journey beyond boundaries as we transform your vision into a limitless <span className='digital-reality'>digital reality.</span></div>
            <div className='whyus-video'>
                <img src={playicon}/>
            </div>
           <div className='whyus-quesans'>
           <div className='whyus-question'>WHY CHOOSE US ?</div>
            <div className='whyus-answer'>From innovative digital strategies to cutting-edge web design, seamless software development, and captivating design services.</div>
           </div>
            </div>
          </div>
      </div>
  )
}

export default Home