import React from 'react';
import headerImage from '../assets/images/carla25_img-header-min.png';
import headerLogo from '../assets/images/carla25_logotiype-header-min.png';

export default function Hero() {
  return (
    <div className="relative bg-brand-black text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative flex flex-col md:block">
          <div className="flex items-center justify-center">
            <img src={headerLogo} alt="CARLA'25 Logo" className="h-52 py-1" />
          </div>
          <div className="md:absolute right-0 top-1/2 -translate-y-1/2 flex justify-center mt-4 md:mt-0">
            <img 
              src={headerImage} 
              alt="CARLA'25 Header" 
              className="h-20 object-cover"
            />
          </div>
        </div>
      </div>
      <div className="hidden md:block w-full h-20 bg-brand-green" />
    </div>
  );
}