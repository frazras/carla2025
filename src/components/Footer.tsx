import React from 'react';
import footerLogo from '../assets/images/carla25_logotype-footer-min.png';
import footerImage from '../assets/images/carla25_img-footer-min.png';
import mailIcon from '../assets/images/carla25_ico-mail-min.png';
import facebookIcon from '../assets/images/carla25_ico-facebook-min.png';
import instagramIcon from '../assets/images/carla25_ico-instagram-min.png';
import linkedinIcon from '../assets/images/carla25_ico-linkedin-min.png';
import xIcon from '../assets/images/carla25_ico-x-min.png';

export default function Footer() {
  return (
    <footer className="bg-brand-black text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center space-y-6">
          <img src={footerLogo} alt="CARLA'25" className="w-16 h-16" />
          <div className="flex items-center space-x-2">
            <img src={mailIcon} alt="Email" className="w-5 h-5" />
            <a href="mailto:contact@carlaconference.org" className="hover:text-brand-green transition">
              contact@carlaconference.org
            </a>
          </div>
          <div className="flex space-x-6">
            <a href="#"><img src={xIcon} alt="X" className="w-6 h-6" /></a>
            <a href="#"><img src={linkedinIcon} alt="LinkedIn" className="w-6 h-6" /></a>
            <a href="#"><img src={instagramIcon} alt="Instagram" className="w-6 h-6" /></a>
            <a href="#"><img src={facebookIcon} alt="Facebook" className="w-6 h-6" /></a>
          </div>
          <img src={footerImage} alt="Footer" className="w-full" />
        </div>
      </div>
    </footer>
  );
}