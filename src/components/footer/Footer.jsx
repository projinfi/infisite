import React from 'react';
import '../footer/Footer.css';
import infilogo from '/src/images/infilogo.png';
import { useNavigate } from 'react-router-dom';

const Footer = () => {

  const navigate = useNavigate()

  return (
    <div className='footer-container'>
     
      <div className='footer-section'>
      <div className='footer-content-section'>
           <div className='footer-section-1'>
            <div className='footer-left-contents'>
                  <div className='footer-logo'>
                    <img className='footerlogo' onClick={()=>{navigate("/")}} src={infilogo}/>
                  </div>
                  <div className='footer-title'>Infideck Technologies</div>
                  <div className='footer-address'>Technology Business Incubator, Sreekariyam, College of Engineering, Trivandum - 695016</div>
                  <div className='footer-contact-email'>
                <div className='footer-contact'>
                  <div className='footer-contact-icon'>
                    <svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M23.75 17.0163L17.8875 14.5163C17.585 14.3807 17.253 14.3245 16.9227 14.3529C16.5924 14.3814 16.2749 14.4935 16 14.6788L12.8625 16.7663C10.9503 15.8376 9.4021 14.2982 8.4625 12.3913L10.5375 9.21632C10.7216 8.94116 10.834 8.6244 10.8645 8.29478C10.8951 7.96515 10.8428 7.63312 10.7125 7.32882L8.2 1.46632C8.02468 1.07046 7.72782 0.740741 7.35247 0.524973C6.97713 0.309205 6.54281 0.218607 6.1125 0.266318C4.42449 0.487449 2.87421 1.31403 1.7499 2.59239C0.625592 3.87075 0.00375294 5.51389 0 7.21632C0 17.1413 8.075 25.2163 18 25.2163C19.7024 25.2126 21.3456 24.5907 22.6239 23.4664C23.9023 22.3421 24.7289 20.7918 24.95 19.1038C24.9977 18.6735 24.9071 18.2392 24.6913 17.8638C24.4756 17.4885 24.1459 17.1916 23.75 17.0163Z" fill="white" />
                    </svg>
                  </div>
                      <div className='footer-contact-text'>+91 8590313343</div>
                    </div>
                <div className='footer-email'>
                  <div className='footer-email-icon'>
                    <svg width="26" height="25" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M25.55 8.37881L13.55 0.378808C13.3856 0.274271 13.1949 0.21875 13 0.21875C12.8052 0.21875 12.6144 0.274271 12.45 0.378808L0.450042 8.37881C0.310619 8.46926 0.19628 8.59344 0.117618 8.73984C0.0389561 8.88624 -0.00148494 9.05012 4.16713e-05 9.21631V22.2163C4.16713e-05 22.7467 0.210755 23.2554 0.585828 23.6305C0.960901 24.0056 1.46961 24.2163 2.00004 24.2163H24C24.5305 24.2163 25.0392 24.0056 25.4143 23.6305C25.7893 23.2554 26 22.7467 26 22.2163V9.21631C26.0016 9.05012 25.9611 8.88624 25.8825 8.73984C25.8038 8.59344 25.6895 8.46926 25.55 8.37881ZM9.08754 16.2163L2.00004 21.2163V11.1538L9.08754 16.2163ZM11.1375 17.2163H14.8625L21.9375 22.2163H4.06254L11.1375 17.2163ZM16.9125 16.2163L24 11.1538V21.2163L16.9125 16.2163Z" fill="white" />
                    </svg>
                  </div>
                  <div className='footer-email-text'>hello@infideck.com</div>
                </div>
              </div>
            </div>
            <div className='footer-right-contents'>

              <div className='footer-pages-section'>
                <div className='footer-page-title'>Company</div>
                <div className='footer-page-links'>
                  <div onClick={()=>{navigate("/about")}} className='footer-page-link'>About</div>
                  <div className='footer-page-link'>Services</div>
                  <div className='footer-page-link'>Our Works</div>
                  <div className='footer-page-link'>Industries</div>
                  <div className='footer-page-link'>Careers</div>
                </div>
              </div>

              <div className='footer-pages-section'>
                <div className='footer-page-title'>Services</div>
                <div className='footer-page-links'>
                  <div className='footer-page-link'>Branding & Digital Strategies</div>
                  <div className='footer-page-link'>Digital marketing</div>
                  <div className='footer-page-link'>Web Design & App Development</div>
                  <div className='footer-page-link'>Visual Production</div>
                  <div className='footer-page-link'>Influencer Marketing</div>
                </div>
              </div>

              <div className='footer-pages-section'>
                <div className='footer-page-title'>Social Links</div>
                <div className='footer-page-links'>
                  <div className='footer-page-link'>Instagram</div>
                  <div className='footer-page-link'>LinkedIn</div>
                  <div className='footer-page-link'>Facebook</div>
                  <div className='footer-page-link'>Twitter</div>
                </div>
              </div>


              </div>
           </div>
           <div className='footer-section-2'>
            <div className='footer-copyright'>Infideck Technologies @2024</div>
            </div>
       </div>
      </div>
    </div>
  )
}

export default Footer