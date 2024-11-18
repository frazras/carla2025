import React from 'react';
import registrationBanner from '../assets/images/carla25_bn-registrer-min.png';

export default function Registration() {
  return (
    <div className="relative h-[400px] w-full">
      <img 
        src={registrationBanner}
        alt="Registration Banner"
        className="w-full h-full object-cover"
      />
    </div>
  );
}