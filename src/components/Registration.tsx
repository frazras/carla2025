import React from 'react';
import registrationBanner from '../assets/images/carla25_bn-registrer-min.png';

export default function Registration() {
  return (
    <>
      {/* Desktop version */}
      <div className="hidden lg:block relative h-[400px] w-full">
        <img 
          src={registrationBanner}
          alt="Registration Banner"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Mobile/Tablet version */}
      <div className="lg:hidden relative h-[400px] w-full">
        <div 
          className="w-full h-full flex flex-col items-center justify-center"
          style={{
            background: `
              radial-gradient(circle at top left, #efde36 0%, rgba(255,255,255,0.9) 50%, rgba(0,0,0,0.1) 100%),
              radial-gradient(circle at bottom right, #efde36 0%, rgba(255,255,255,0.9) 50%, rgba(0,0,0,0.1) 100%)
            `
          }}
        >
          <h2 className="text-5xl font-bold mb-8 text-brand-black">
            Registration
          </h2>
          <p className="text-2xl mb-4 text-brand-black">
            Registration site will be open in
          </p>
          <p className="text-4xl font-bold text-brand-black">
            Spring 2025
          </p>
        </div>
      </div>
    </>
  );
}