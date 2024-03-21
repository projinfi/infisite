import React from 'react';
import '../footer/Footer.css';

const Footer = () => {
  return (
    <div className='footer-container'>
      <div className='footer-contents'>
        <div className='footer-empty-space'>
          <div className='discuss-project-section'>
            <div className='discuss-project-title'>LET’S DISCUSS YOUR PROJECT</div>
            <div className='discuss-project-description'>Our team is here to deliver tailored solutions that drive results. Contact us today and let's embark on this journey together!</div>
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
      <div className='footer-section'>
      <div className='footer-content-section'>

</div>
      </div>
    </div>
  )
}

export default Footer