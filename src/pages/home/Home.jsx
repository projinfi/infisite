import React from 'react';
import '../home/Home.css';
import homeperson from '/src/images/homeperson.png';
import homec1 from '/src/images/homec1.png';
import homec2 from '/src/images/homec2.png';
import homec3 from '/src/images/homec3.png';
import homec4 from '/src/images/homec4.png';
import homec5 from '/src/images/homec5.png';

const Home = () => {
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
        </div>
    </div>
  )
}

export default Home