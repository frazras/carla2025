import React from 'react';
import footerBg from '../assets/images/carla25_img-footer-min.png';
import footerLogo from '../assets/images/carla25_logotype-footer-min.png';
import facebookIcon from '../assets/images/carla25_ico-facebook-min.png';
import instagramIcon from '../assets/images/carla25_ico-instagram-min.png';
import xIcon from '../assets/images/carla25_ico-x-min.png';
import linkedinIcon from '../assets/images/carla25_ico-linkedin-min.png';

export default function Footer() {
  return (
    <div className="relative w-full">
      <img 
        src={footerBg}
        alt=""
        className="w-full h-[300px] object-cover"
      />
      <div className="absolute inset-0">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="flex flex-col items-start">
            <img 
              src={footerLogo} 
              alt="CARLA'25" 
              className="h-44 object-contain mb-8"
            />
            
            <hr className="w-full border-brand-black my-8" />
            
            <div className="flex items-center space-x-8">
              <a 
                href="https://facebook.com/ccarlaorg" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:opacity-80 transition"
              >
                <img src={facebookIcon} alt="Facebook" className="h-8" />
              </a>
              
              <a 
                href="https://instagram.com/ccarlaorg" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:opacity-80 transition"
              >
                <img src={instagramIcon} alt="Instagram" className="h-8" />
              </a>
              
              <a 
                href="https://x.com/Carla_conf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:opacity-80 transition"
              >
                <img src={xIcon} alt="X" className="h-8" />
              </a>
              
              <a 
                href="https://linkedin.com/company/carla-conference" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:opacity-80 transition"
              >
                <img src={linkedinIcon} alt="LinkedIn" className="h-8" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}