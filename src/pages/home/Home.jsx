import React,{useRef,useEffect,useState} from 'react';
import '../home/Home.css';
import homeperson from '/src/images/homeperson.png';
import homec1 from '/src/images/homec1.png';
import homec2 from '/src/images/homec2.png';
import homec3 from '/src/images/homec3.png';
import homec4 from '/src/images/homec4.png';
import homec5 from '/src/images/homec5.png';
import playicon from '/src/images/playicon.svg';
import productvideo from '/src/images/productvideo.mp4'
import homelines from '/src/images/homelines.svg';
import {useScroll,useTransform,useAnimation,motion} from 'framer-motion';
import { ScrollTrigger } from 'gsap/all';
import gsap from 'gsap';
import { useInView } from 'react-intersection-observer';


const Home = () => {

    let xPercent = 0;
    const scrollLimit = Array.from({ length: 50 }, (_, index) => index);
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
        // Trigger the animation when the component mounts
        controls.start({
          x: ['-100%', '0%'], // Animation from -100% to 0% (move from left to right)
          transition: { duration: 10, ease: 'linear', loop: Infinity }, // Loop the animation indefinitely
        });
      }, [controls]);

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
    <div className='home-container'>
        <div className='intro-container'>
            <div className='intro-section'>
                <div className='intro-left'>
                <img src={homec3} className='home-image-elements mobileelement1' />
                <img className='homelines' src={homelines}/>
                    <div className='intro-title'>Crafting Experiences that <span className='matters-txt'>Matters.</span></div>
                    
                    <div className='intro-description'>Join us on a journey beyond boundaries as we transform your vision into a limitless digital reality.</div>
                 
                    <div className='intro-more-btns'>
                      
                        <div className='get-free-quote'>
                            <div className='free-quote-text'>Get a Free Quote</div>
                              <div className='free-quote-icon'>
                                  <svg className='quote-icon' viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
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
            <motion.div variants={marqueeVariants} animate="animate" className='motion-div'>
              
              {scrollLimit.map((item, index) => (
                <div key={index} className='scroll-contents'>
                  <div className='scroll-text'>Infideck</div>
                  <div className='scroll-icon'>
                    <svg className='rotate-svg' width="57" height="56" viewBox="0 0 57 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M53.0585 26.8801L3.96806 29.1492M27.3787 3.46944L29.6479 52.5599M14.8571 42.9945L42.1695 13.0348M43.4932 41.6709L13.5334 14.3584" stroke="black" strokeWidth="6.14286" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
              ))}

                
                  
                </motion.div>
                  
              </div>



          </div>
        </div>

        {/* scroller */}
          
      <div className='whyus-container'>
        <div className='whyus-content'>
          <div className='whyus-title'>Join us on a journey beyond boundaries as we transform your vision into a limitless <span className='digital-reality'>digital reality.</span></div>
          <div>
            <div style={{ borderRadius: '22px', overflow: 'hidden' }}>
              <video  controls autoPlay muted loop  className='whyus-video'  style={{ width: '100%', borderRadius: '22px' }}>
                <source src={productvideo} type="video/mp4" />
                {/* Add other video sources for different formats if needed */}
                Your browser does not support the video tag.
              </video>
            </div>
           
          </div>
           <div className='whyus-quesans'>
           <div className='whyus-question'>WHY CHOOSE US ?</div>
            <div className='whyus-answer'>From innovative digital strategies to cutting-edge web design, seamless software development, and captivating design services.</div>
           </div>
            </div>
          </div>

          {/* our motto */}
      <div className='our-motto-container'>
        <div className='our-motto-contents'>

          <div className='our-motto-section'>
            <div className='motto-image'>
              <svg className='mottoimg' width="100%" height="auto" viewBox="0 0 383 215" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="6" y="6" width="371" height="203" rx="101.5" fill="#F8FFD1" />
                <rect x="6" y="6" width="371" height="203" rx="101.5" stroke="#E5F788" stroke-width="12" />
                <path d="M191.5 51.0312C160.363 51.0312 135.031 76.3635 135.031 107.5C135.031 138.637 160.363 163.969 191.5 163.969C222.637 163.969 247.969 138.637 247.969 107.5C247.969 76.3635 222.637 51.0312 191.5 51.0312ZM204.583 83.9949L211.126 89.7123L191.142 112.544L184.599 106.284L204.583 83.9949ZM174.106 131.019L154.95 111.844L161.094 105.7L180.252 124.875L174.106 131.019ZM191.752 131.233L172.374 111.844L178.52 105.703L191.324 118.52L221.494 83.9949L228.036 89.7123L191.752 131.233Z" fill="#01050B" />
              </svg>
            </div>
            <div className='motto-title'>Smart Choices</div>
            <div className='motto-description'>Utilizing data insights to inform strategic decisions and optimize outcomes.</div>
          </div>

          <div className='our-motto-section'>
            <div className='motto-image'>
              <svg className='mottoimg' width="100%" height="auto" viewBox="0 0 383 215" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="6" y="6" width="371" height="203" rx="101.5" fill="#F8FFD1" />
                <rect x="6" y="6" width="371" height="203" rx="101.5" stroke="#E5F788" stroke-width="12" />
                <path d="M191.5 51.0312C160.363 51.0312 135.031 76.3635 135.031 107.5C135.031 138.637 160.363 163.969 191.5 163.969C222.637 163.969 247.969 138.637 247.969 107.5C247.969 76.3635 222.637 51.0312 191.5 51.0312ZM204.583 83.9949L211.126 89.7123L191.142 112.544L184.599 106.284L204.583 83.9949ZM174.106 131.019L154.95 111.844L161.094 105.7L180.252 124.875L174.106 131.019ZM191.752 131.233L172.374 111.844L178.52 105.703L191.324 118.52L221.494 83.9949L228.036 89.7123L191.752 131.233Z" fill="#01050B" />
              </svg>
            </div>
            <div className='motto-title'>Custom Solutions</div>
            <div className='motto-description'>Crafting customized answers to fit the unique needs of diverse industries.</div>
          </div>

          <div className='our-motto-section'>
            <div className='motto-image'>
              <svg className='mottoimg' width="100%" height="auto" viewBox="0 0 383 215" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="6" y="6" width="371" height="203" rx="101.5" fill="#F8FFD1" />
                <rect x="6" y="6" width="371" height="203" rx="101.5" stroke="#E5F788" stroke-width="12" />
                <path d="M191.5 51.0312C160.363 51.0312 135.031 76.3635 135.031 107.5C135.031 138.637 160.363 163.969 191.5 163.969C222.637 163.969 247.969 138.637 247.969 107.5C247.969 76.3635 222.637 51.0312 191.5 51.0312ZM204.583 83.9949L211.126 89.7123L191.142 112.544L184.599 106.284L204.583 83.9949ZM174.106 131.019L154.95 111.844L161.094 105.7L180.252 124.875L174.106 131.019ZM191.752 131.233L172.374 111.844L178.52 105.703L191.324 118.52L221.494 83.9949L228.036 89.7123L191.752 131.233Z" fill="#01050B" />
              </svg>
            </div>
            <div className='motto-title'>Advanced Tech</div>
            <div className='motto-description'>Embracing continuous innovation and adapting to stay ahead in a dynamic scope.</div>
          </div>

        </div>
      </div>


    {/* our services */}
    <div className='our-services-container'>
      <div className='our-services-contents'>

        <div className='our-services-titles'>
               <div className='our-service-title'>OUR SERVICES</div>
               <div className='our-service-description'>From innovative digital strategies to cutting-edge web design, seamless software development, and captivating design services.</div>
        </div>

          <div className='our-services-jobs'>
            <div className='job-box'>
              <div className='job-title'>Branding & Digital Strategies</div>
              <div className='job-image'></div>
              <div class='arrow-container'>
                <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path className='arrowstroke' d="M40 70C56.5685 70 70 56.5685 70 40C70 23.4315 56.5685 10 40 10C23.4315 10 10 23.4315 10 40C10 56.5685 23.4315 70 40 70Z" stroke="#01050B" stroke-width="3" stroke-miterlimit="10" />
                <path className='arrowstroke' d="M33.75 31.25H48.75V46.25" stroke="#01050B" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                <path className='arrowstroke' d="M31.25 48.75L48.75 31.25" stroke="#01050B" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
              </svg></div>
            </div>
            <div className='job-box'>
              <div className='job-title'>Results-Driven Digital marketing</div>
              <div className='job-image'></div>
              <div class='arrow-container'>
                <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path className='arrowstroke' d="M40 70C56.5685 70 70 56.5685 70 40C70 23.4315 56.5685 10 40 10C23.4315 10 10 23.4315 10 40C10 56.5685 23.4315 70 40 70Z" stroke="#01050B" stroke-width="3" stroke-miterlimit="10" />
                <path className='arrowstroke' d="M33.75 31.25H48.75V46.25" stroke="#01050B" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                <path className='arrowstroke' d="M31.25 48.75L48.75 31.25" stroke="#01050B" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
              </svg></div>
            </div>
            <div className='job-box'>
              <div className='job-title'>Web Design & App Development</div>
              <div className='job-image'></div>
              <div class='arrow-container'>
                <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path className='arrowstroke' d="M40 70C56.5685 70 70 56.5685 70 40C70 23.4315 56.5685 10 40 10C23.4315 10 10 23.4315 10 40C10 56.5685 23.4315 70 40 70Z" stroke="#01050B" stroke-width="3" stroke-miterlimit="10" />
                <path className='arrowstroke' d="M33.75 31.25H48.75V46.25" stroke="#01050B" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                <path className='arrowstroke' d="M31.25 48.75L48.75 31.25" stroke="#01050B" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
              </svg></div>
            </div>
            <div className='job-box'>
              <div className='job-title'>Visual Production</div>
              <div className='job-image'></div>
              <div class='arrow-container'>
                <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path className='arrowstroke' d="M40 70C56.5685 70 70 56.5685 70 40C70 23.4315 56.5685 10 40 10C23.4315 10 10 23.4315 10 40C10 56.5685 23.4315 70 40 70Z" stroke="#01050B" stroke-width="3" stroke-miterlimit="10" />
                <path className='arrowstroke' d="M33.75 31.25H48.75V46.25" stroke="#01050B" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                <path className='arrowstroke' d="M31.25 48.75L48.75 31.25" stroke="#01050B" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
              </svg></div>
            </div>
            <div className='job-box'>
              <div className='job-title'>Influencer Marketing</div>
              <div className='job-image'></div>
              <div class='arrow-container'>
                <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path className='arrowstroke' d="M40 70C56.5685 70 70 56.5685 70 40C70 23.4315 56.5685 10 40 10C23.4315 10 10 23.4315 10 40C10 56.5685 23.4315 70 40 70Z" stroke="#01050B" stroke-width="3" stroke-miterlimit="10" />
                <path className='arrowstroke' d="M33.75 31.25H48.75V46.25" stroke="#01050B" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                <path className='arrowstroke' d="M31.25 48.75L48.75 31.25" stroke="#01050B" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
              </svg></div>
            </div>
            
          </div>
        

      </div>
    </div>
      </div>
  )
}

export default Home