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
import {useScroll,useTransform,useAnimation,motion, inView} from 'framer-motion';
import { ScrollTrigger as Sct } from 'gsap/all';
import gsap from 'gsap';
import { useInView } from 'react-intersection-observer';

import {Swiper,SwiperSlide} from 'swiper/react';
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import 'swiper/css';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import { Fade } from 'react-awesome-reveal';


const Home = () => {

  const [counterOn, setCounterOn] = useState(false)
    let xPercent = 0;
    const scrollLimit = Array.from({ length: 50 }, (_, index) => index);
     let direction = -80;
    const [scrollDirection, setScrollDirection] = useState('down');
    const firstText = useRef(null);
    const controls = useAnimation();
    const slider = useRef(null);
    const [inViewRef1, inView1] = useInView();
    const [inViewRef2, inView2] = useInView();

  const animation = {
    initial: { y: "30%" },
    enter: i => ({ y: "0", transition: { duration: 0.75, ease: [0.33, 1, 0.68, 1], delay: 0.075 * i } })
  }
  const animation2 = {
    initial: { x: "150%" },
    enter: i => ({ x: "0", transition: { duration: 0.95, ease: [0.33, 1, 0.68, 1], delay: 0.075 * i } })
  }

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
        gsap.registerPlugin(Sct);
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
      
      const { ref:ref1, inView:view1 } = useInView({
        threshold: 0.75,
        triggerOnce: true
    });
    const { ref:ref2, inView:view2 } = useInView({
      threshold: 0.75,
      triggerOnce: true
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='home-container'>
           <img className='homelines' src={homelines}/>
        <div className='intro-container'>
          
            <div ref={ref1} className='intro-section'>
                <div className='intro-left'>
                <img src={homec3} className='home-image-elements mobileelement1' />
           
                    <motion.div variants={animation} initial="initial" animate={view1 ? "enter" : ""} className='intro-title'>Crafting Experiences that <span className='matters-txt'>Matters.</span></motion.div>
                    
                    <motion.div variants={animation} initial="initial" animate={view1 ? "enter" : ""} className='intro-description'>Join us on a journey beyond boundaries as we transform your vision into a limitless digital reality.</motion.div>
                 
                    <motion.div variants={animation} initial="initial" animate={view1 ? "enter" : ""} className='intro-more-btns'>
                      
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
                        
                    </motion.div>
                
                         
                </div>
                <div className='intro-right'>
                   
            <motion.div  variants={animation2} initial="initial" animate={view1 ? "enter" : ""} className='home-image'>
              <img src={homec1} className='home-image-elements element1' />
              <img src={homec2} className='home-image-elements element2' />
              <img src={homec3} className='home-image-elements element3' />
              <img src={homec4} className='home-image-elements element4' />
              <img src={homec5} className='home-image-elements element5' />

              <img className='home-person' src={homeperson} />


            </motion.div>
               
                </div>
             
            </div>
        <div className='scroller-container'>
          <div className='scroller-space' ref={slider}>
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
          <Fade cascade damping={0.1} >
          <div  className='whyus-title'>Join us on a journey beyond boundaries as we transform your vision into a limitless <span className='digital-reality'>digital reality.</span></div>
          </Fade>
         
          <div>
            <div  className='videocont' style={{ borderRadius: '22px', overflow: 'hidden' }}>
              <video  controls autoPlay muted loop  className='whyus-video'  style={{ width: '100%', borderRadius: '22px' }}>
                <source src={productvideo} type="video/mp4" />
                {/* Add other video sources for different formats if needed */}
                Your browser does not support the video tag.
              </video>
            </div>
           
          </div >
          <div className='whyus-quesans'>
          <Fade cascade damping={0.1} >
            <div className='whyus-question'>WHY CHOOSE US ?</div>
            <div className='whyus-answer'>From innovative digital strategies to cutting-edge web design, seamless software development, and captivating design services.</div>
            </Fade>
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
            <Fade cascade damping={0.1} >
            <div className='motto-title'>Smart Choices</div>
            <div className='motto-description'>Utilizing data insights to inform strategic decisions and optimize outcomes.</div>
            </Fade>
          </div>

          <div className='our-motto-section'>
            <div className='motto-image'>
              <svg className='mottoimg' width="100%" height="auto" viewBox="0 0 383 215" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="6" y="6" width="371" height="203" rx="101.5" fill="#F8FFD1" />
                <rect x="6" y="6" width="371" height="203" rx="101.5" stroke="#E5F788" stroke-width="12" />
                <path d="M191.5 51.0312C160.363 51.0312 135.031 76.3635 135.031 107.5C135.031 138.637 160.363 163.969 191.5 163.969C222.637 163.969 247.969 138.637 247.969 107.5C247.969 76.3635 222.637 51.0312 191.5 51.0312ZM204.583 83.9949L211.126 89.7123L191.142 112.544L184.599 106.284L204.583 83.9949ZM174.106 131.019L154.95 111.844L161.094 105.7L180.252 124.875L174.106 131.019ZM191.752 131.233L172.374 111.844L178.52 105.703L191.324 118.52L221.494 83.9949L228.036 89.7123L191.752 131.233Z" fill="#01050B" />
              </svg>
            </div>
            <Fade cascade damping={0.1} >
            <div className='motto-title'>Custom Solutions</div>
            <div className='motto-description'>Crafting customized answers to fit the unique needs of diverse industries.</div>
            </Fade>
          </div>

          <div className='our-motto-section'>
            <div className='motto-image'>
              
              <svg className='mottoimg' width="100%" height="auto" viewBox="0 0 383 215" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="6" y="6" width="371" height="203" rx="101.5" fill="#F8FFD1" />
                <rect x="6" y="6" width="371" height="203" rx="101.5" stroke="#E5F788" stroke-width="12" />
                <path d="M191.5 51.0312C160.363 51.0312 135.031 76.3635 135.031 107.5C135.031 138.637 160.363 163.969 191.5 163.969C222.637 163.969 247.969 138.637 247.969 107.5C247.969 76.3635 222.637 51.0312 191.5 51.0312ZM204.583 83.9949L211.126 89.7123L191.142 112.544L184.599 106.284L204.583 83.9949ZM174.106 131.019L154.95 111.844L161.094 105.7L180.252 124.875L174.106 131.019ZM191.752 131.233L172.374 111.844L178.52 105.703L191.324 118.52L221.494 83.9949L228.036 89.7123L191.752 131.233Z" fill="#01050B" />
              </svg>
            </div>
            <Fade cascade damping={0.1} >
            <div className='motto-title'>Advanced Tech</div>
            <div className='motto-description'>Embracing continuous innovation and adapting to stay ahead in a dynamic scope.</div>
            </Fade>
          </div>

        </div>
      </div>


    {/* our services */}
    <div className='our-services-container'>
      <div className='our-services-contents'>

        <div className='our-services-titles'>
        <Fade cascade damping={0.1} >
               <div className='our-service-title'>OUR SERVICES</div>
               <div className='our-service-description'>From innovative digital strategies to cutting-edge web design, seamless software development, and captivating design services.</div>
               </Fade>
        </div>

          <div className='our-services-jobs'>
            <div className='job-box'>
            <Fade cascade damping={0.1} >
              <div className='job-title'>Branding & Digital Strategies</div>
              </Fade>

              <div className='job-image'>
            
              </div>
              

              <div class='arrow-container'>
                <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path className='arrowstroke' d="M40 70C56.5685 70 70 56.5685 70 40C70 23.4315 56.5685 10 40 10C23.4315 10 10 23.4315 10 40C10 56.5685 23.4315 70 40 70Z" stroke="#01050B" stroke-width="3" stroke-miterlimit="10" />
                <path className='arrowstroke' d="M33.75 31.25H48.75V46.25" stroke="#01050B" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                <path className='arrowstroke' d="M31.25 48.75L48.75 31.25" stroke="#01050B" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
              </svg></div>
            </div>
            <div className='job-box'>
            <Fade cascade damping={0.1} >
              <div className='job-title'>Results-Driven Digital marketing</div>
              </Fade>
              <div className='job-image'></div>
              <div class='arrow-container'>
                <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path className='arrowstroke' d="M40 70C56.5685 70 70 56.5685 70 40C70 23.4315 56.5685 10 40 10C23.4315 10 10 23.4315 10 40C10 56.5685 23.4315 70 40 70Z" stroke="#01050B" stroke-width="3" stroke-miterlimit="10" />
                <path className='arrowstroke' d="M33.75 31.25H48.75V46.25" stroke="#01050B" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                <path className='arrowstroke' d="M31.25 48.75L48.75 31.25" stroke="#01050B" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
              </svg></div>
            </div>
            <div className='job-box'>
            <Fade cascade damping={0.1} >
              <div className='job-title'>Web Design & App Development</div>
              </Fade>
              <div className='job-image'></div>
              <div class='arrow-container'>
                <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path className='arrowstroke' d="M40 70C56.5685 70 70 56.5685 70 40C70 23.4315 56.5685 10 40 10C23.4315 10 10 23.4315 10 40C10 56.5685 23.4315 70 40 70Z" stroke="#01050B" stroke-width="3" stroke-miterlimit="10" />
                <path className='arrowstroke' d="M33.75 31.25H48.75V46.25" stroke="#01050B" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                <path className='arrowstroke' d="M31.25 48.75L48.75 31.25" stroke="#01050B" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
              </svg></div>
            </div>
            <div className='job-box'>
            <Fade cascade damping={0.1} >
              <div className='job-title'>Visual Production</div>
              </Fade>
              <div className='job-image'></div>
              <div class='arrow-container'>
                <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path className='arrowstroke' d="M40 70C56.5685 70 70 56.5685 70 40C70 23.4315 56.5685 10 40 10C23.4315 10 10 23.4315 10 40C10 56.5685 23.4315 70 40 70Z" stroke="#01050B" stroke-width="3" stroke-miterlimit="10" />
                <path className='arrowstroke' d="M33.75 31.25H48.75V46.25" stroke="#01050B" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                <path className='arrowstroke' d="M31.25 48.75L48.75 31.25" stroke="#01050B" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
              </svg></div>
            </div>
            <div className='job-box'>
            <Fade cascade damping={0.1} >
              <div className='job-title'>Influencer Marketing</div>
              </Fade>
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

    
      <div className='featured-works-container'>
        <div className='featured-works-content'>
          <div className='featured-title-btn'>
          <Fade cascade damping={0.1} >
            <div className='featured-title'>FEATURED WORKS</div>
            </Fade>
            <div className='featured-btn'>
              <div>View All Work</div>
              <svg className='featuredsvg' width="30" height="30" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 35C28.2843 35 35 28.2843 35 20C35 11.7157 28.2843 5 20 5C11.7157 5 5 11.7157 5 20C5 28.2843 11.7157 35 20 35Z" stroke="white" stroke-width="2" stroke-miterlimit="10" />
                <path d="M20.9531 25.2969L26.25 20L20.9531 14.7031" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M13.75 20H26.25" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
          </div>
          <Fade cascade damping={0.1} >
          <div className='featured-description'>From innovative digital strategies to cutting-edge web design, seamless software development, and captivating design services.</div>
          </Fade>

          <div className='featured-image-container'>
           
            <div className='featured-image-sec1'>
              
              
              <div className='featured-image-box imgbx1'></div>
              <div className='featured-image-box imgbx2'></div>
            </div>

            <div className='featured-image-sec2'>
              <div className=' imgsmallbox imgbx3'></div>
              <div className='imgsmallbox imgbx4'></div>
              <div className=' imgsmallbox imgbx5'></div>
            </div>
            <div className='featured-image-sec3'>
              <div className='featured-image-box imgbx6'></div>
              <div className='featured-image-box imgbx7'></div>
            </div>
          </div>


        </div>
      </div>

      <div className='about-results-container'>
        <div className='about-results-content'>
          <div className='about-title-des'>
          <Fade cascade damping={0.1} >
            <div className='about-results-title'>IT’S ALL ABOUT RESULTS</div>
            <div className='about-results-description'>You can bet on it! We deliver the best.</div>
            </Fade>
          </div>
          <div className='about-results-points'>
            <ScrollTrigger onEnter={() => setCounterOn(true)}/>
            <div className='about-point-box'>
              <div className='about-point'>{counterOn && <CountUp start={0} end={100} />}%</div>
              <div className='about-comments'>Customer Satisfaction</div>
            </div>
            <div className='about-point-box oc-points'>
              <div className='about-point'>{counterOn && <CountUp start={1} end={3} />}+</div>
              <div className='about-comments'>Operating Countries</div>
            </div>
            <div className='about-point-box'>
              <div className='about-point'>{counterOn && <CountUp start={0} end={50} />}+</div>
              <div className='about-comments'>Successful Campaigns</div>
            </div>
       
          </div>
        </div>
      </div>
 
      {/* our client says */}
      <div className='client-says-container'>
        <div className='client-says-content'>

          <div className='client-says-title-des'>
          <Fade cascade damping={0.1} >
              <div className='client-says-title'>WHAT OUR CLIENT SAYS</div>
              <div className='client-says-description'>Client satisfaction is a key value that we holds.</div>
              </Fade>
          </div>

          <div className='client-says-slider'>
            <Swiper
              spaceBetween={30}
              loop={true} // Set loop to true
              slidesPerView={1}
             
             
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              speed={1000}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper"
              effect={'slide'} 
              breakpoints={{
               
                900: {
                  slidesPerView: 2,
                },
              }}
            >
              <SwiperSlide>
                <div className='slider-card'>
                  <div className='slider-quote-icon'>
                    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M26.9756 43.4841C26.9756 46.0362 26.0824 48.1735 24.296 49.8961C22.5096 51.6187 20.2766 52.48 17.597 52.48C15.0449 52.48 12.8757 51.4911 11.0893 49.5133C9.30288 47.5355 8.40967 45.0472 8.40967 42.0486C8.40967 39.8794 8.88817 37.4869 9.84518 34.871C10.866 32.2552 12.1739 29.6075 13.7689 26.9279C15.4277 24.2482 17.278 21.6005 19.3196 18.9847C21.425 16.3051 23.5304 13.8168 25.6358 11.52L28.2198 13.6254C25.3487 17.0069 22.9562 20.4202 21.0422 23.8654C19.1282 27.3107 17.9798 30.6921 17.597 34.0097C20.149 34.2011 22.3501 35.1581 24.2003 36.8808C26.0505 38.6034 26.9756 40.8045 26.9756 43.4841ZM54.4418 43.4841C54.4418 46.0362 53.5486 48.1735 51.7622 49.8961C49.9758 51.6187 47.7428 52.48 45.0631 52.48C42.5111 52.48 40.3419 51.4911 38.5555 49.5133C36.769 47.5355 35.8758 45.0472 35.8758 42.0486C35.8758 39.8794 36.3543 37.4869 37.3113 34.871C38.3322 32.2552 39.6401 29.6075 41.2351 26.9279C42.8939 24.2482 44.7441 21.6005 46.7857 18.9847C48.8912 16.3051 50.9966 13.8168 53.102 11.52L55.5902 13.6254C52.7192 17.0069 50.3267 20.4202 48.4127 23.8654C46.5624 27.3107 45.4459 30.6921 45.0631 34.0097C47.6152 34.2011 49.8163 35.1581 51.6665 36.8808C53.5167 38.6034 54.4418 40.8045 54.4418 43.4841Z" fill="#146EF8" />
                    </svg>
                  </div>
                  <div className='slider-comments'>A game-changer for my business. Thank you for your expertise! The guidance and strategies provided by this team have transformed my business into a thriving success.</div>
                  <div className='slider-profile-details'>
                    <div className='slider-profile-image'>

                    </div>
                    <div className='slider-profile-info'>
                      <div className='slider-profile-name'>Sanath S B</div>
                      <div className='slider-profile-location'>Fullstack Developer</div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='slider-card'>
                  <div className='slider-quote-icon'>
                    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M26.9756 43.4841C26.9756 46.0362 26.0824 48.1735 24.296 49.8961C22.5096 51.6187 20.2766 52.48 17.597 52.48C15.0449 52.48 12.8757 51.4911 11.0893 49.5133C9.30288 47.5355 8.40967 45.0472 8.40967 42.0486C8.40967 39.8794 8.88817 37.4869 9.84518 34.871C10.866 32.2552 12.1739 29.6075 13.7689 26.9279C15.4277 24.2482 17.278 21.6005 19.3196 18.9847C21.425 16.3051 23.5304 13.8168 25.6358 11.52L28.2198 13.6254C25.3487 17.0069 22.9562 20.4202 21.0422 23.8654C19.1282 27.3107 17.9798 30.6921 17.597 34.0097C20.149 34.2011 22.3501 35.1581 24.2003 36.8808C26.0505 38.6034 26.9756 40.8045 26.9756 43.4841ZM54.4418 43.4841C54.4418 46.0362 53.5486 48.1735 51.7622 49.8961C49.9758 51.6187 47.7428 52.48 45.0631 52.48C42.5111 52.48 40.3419 51.4911 38.5555 49.5133C36.769 47.5355 35.8758 45.0472 35.8758 42.0486C35.8758 39.8794 36.3543 37.4869 37.3113 34.871C38.3322 32.2552 39.6401 29.6075 41.2351 26.9279C42.8939 24.2482 44.7441 21.6005 46.7857 18.9847C48.8912 16.3051 50.9966 13.8168 53.102 11.52L55.5902 13.6254C52.7192 17.0069 50.3267 20.4202 48.4127 23.8654C46.5624 27.3107 45.4459 30.6921 45.0631 34.0097C47.6152 34.2011 49.8163 35.1581 51.6665 36.8808C53.5167 38.6034 54.4418 40.8045 54.4418 43.4841Z" fill="#146EF8" />
                    </svg>
                  </div>
                  <div className='slider-comments'>A game-changer for my business. Thank you for your expertise! The guidance and strategies provided by this team have transformed my business into a thriving success.</div>
                  <div className='slider-profile-details'>
                    <div className='slider-profile-image'>

                    </div>
                    <div className='slider-profile-info'>
                      <div className='slider-profile-name'>Sanath S B</div>
                      <div className='slider-profile-location'>Fullstack Developer</div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='slider-card'>
                  <div className='slider-quote-icon'>
                    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M26.9756 43.4841C26.9756 46.0362 26.0824 48.1735 24.296 49.8961C22.5096 51.6187 20.2766 52.48 17.597 52.48C15.0449 52.48 12.8757 51.4911 11.0893 49.5133C9.30288 47.5355 8.40967 45.0472 8.40967 42.0486C8.40967 39.8794 8.88817 37.4869 9.84518 34.871C10.866 32.2552 12.1739 29.6075 13.7689 26.9279C15.4277 24.2482 17.278 21.6005 19.3196 18.9847C21.425 16.3051 23.5304 13.8168 25.6358 11.52L28.2198 13.6254C25.3487 17.0069 22.9562 20.4202 21.0422 23.8654C19.1282 27.3107 17.9798 30.6921 17.597 34.0097C20.149 34.2011 22.3501 35.1581 24.2003 36.8808C26.0505 38.6034 26.9756 40.8045 26.9756 43.4841ZM54.4418 43.4841C54.4418 46.0362 53.5486 48.1735 51.7622 49.8961C49.9758 51.6187 47.7428 52.48 45.0631 52.48C42.5111 52.48 40.3419 51.4911 38.5555 49.5133C36.769 47.5355 35.8758 45.0472 35.8758 42.0486C35.8758 39.8794 36.3543 37.4869 37.3113 34.871C38.3322 32.2552 39.6401 29.6075 41.2351 26.9279C42.8939 24.2482 44.7441 21.6005 46.7857 18.9847C48.8912 16.3051 50.9966 13.8168 53.102 11.52L55.5902 13.6254C52.7192 17.0069 50.3267 20.4202 48.4127 23.8654C46.5624 27.3107 45.4459 30.6921 45.0631 34.0097C47.6152 34.2011 49.8163 35.1581 51.6665 36.8808C53.5167 38.6034 54.4418 40.8045 54.4418 43.4841Z" fill="#146EF8" />
                    </svg>
                  </div>
                  <div className='slider-comments'>A game-changer for my business. Thank you for your expertise! The guidance and strategies provided by this team have transformed my business into a thriving success.</div>
                  <div className='slider-profile-details'>
                    <div className='slider-profile-image'>

                    </div>
                    <div className='slider-profile-info'>
                      <div className='slider-profile-name'>Sanath S B</div>
                      <div className='slider-profile-location'>Fullstack Developer</div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='slider-card'>
                  <div className='slider-quote-icon'>
                    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M26.9756 43.4841C26.9756 46.0362 26.0824 48.1735 24.296 49.8961C22.5096 51.6187 20.2766 52.48 17.597 52.48C15.0449 52.48 12.8757 51.4911 11.0893 49.5133C9.30288 47.5355 8.40967 45.0472 8.40967 42.0486C8.40967 39.8794 8.88817 37.4869 9.84518 34.871C10.866 32.2552 12.1739 29.6075 13.7689 26.9279C15.4277 24.2482 17.278 21.6005 19.3196 18.9847C21.425 16.3051 23.5304 13.8168 25.6358 11.52L28.2198 13.6254C25.3487 17.0069 22.9562 20.4202 21.0422 23.8654C19.1282 27.3107 17.9798 30.6921 17.597 34.0097C20.149 34.2011 22.3501 35.1581 24.2003 36.8808C26.0505 38.6034 26.9756 40.8045 26.9756 43.4841ZM54.4418 43.4841C54.4418 46.0362 53.5486 48.1735 51.7622 49.8961C49.9758 51.6187 47.7428 52.48 45.0631 52.48C42.5111 52.48 40.3419 51.4911 38.5555 49.5133C36.769 47.5355 35.8758 45.0472 35.8758 42.0486C35.8758 39.8794 36.3543 37.4869 37.3113 34.871C38.3322 32.2552 39.6401 29.6075 41.2351 26.9279C42.8939 24.2482 44.7441 21.6005 46.7857 18.9847C48.8912 16.3051 50.9966 13.8168 53.102 11.52L55.5902 13.6254C52.7192 17.0069 50.3267 20.4202 48.4127 23.8654C46.5624 27.3107 45.4459 30.6921 45.0631 34.0097C47.6152 34.2011 49.8163 35.1581 51.6665 36.8808C53.5167 38.6034 54.4418 40.8045 54.4418 43.4841Z" fill="#146EF8" />
                    </svg>
                  </div>
                  <div className='slider-comments'>A game-changer for my business. Thank you for your expertise! The guidance and strategies provided by this team have transformed my business into a thriving success.</div>
                  <div className='slider-profile-details'>
                    <div className='slider-profile-image'>

                    </div>
                    <div className='slider-profile-info'>
                      <div className='slider-profile-name'>Sanath S B</div>
                      <div className='slider-profile-location'>Fullstack Developer</div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

            </Swiper>

           

            

            

            

          </div>

        </div>
      </div>
      {/* let discuss about your project */}
      <div className='lets-discuss-container'>
        <div className='lets-discuss-content'>
         
          <div className='discuss-project-section'>
          <Fade cascade damping={0.1} >
            <div className='discuss-project-title'>LET’S DISCUSS YOUR PROJECT</div>
            <div className='discuss-project-description'>Our team is here to deliver tailored solutions that drive results. Contact us today and let's embark on this journey together!</div>
            </Fade>
            <div className='contact-us-today'>
              <div>Contact us today!</div>
              <div className='svg-contact-us'>
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 35C28.2843 35 35 28.2843 35 20C35 11.7157 28.2843 5 20 5C11.7157 5 5 11.7157 5 20C5 28.2843 11.7157 35 20 35Z" stroke="#146EF8" stroke-width="2" stroke-miterlimit="10" />
                  <path d="M20.9531 25.2969L26.25 20L20.9531 14.7031" stroke="#146EF8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M13.75 20H26.25" stroke="#146EF8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </div>
            </div>
          </div>
        


        </div>
      </div>








      </div>
  )
}

export default Home