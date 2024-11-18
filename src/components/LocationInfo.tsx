import React from 'react';
import jamaicaImage from '../assets/images/carla25_img-jamaica01-min.png';

export default function LocationInfo() {
  return (
    <div className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <div className="relative h-[600px] rounded-xl overflow-hidden">
            <img 
              src={jamaicaImage}
              alt="Jamaica"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <div className="space-y-6 lg:pt-0">
            <h2 className="text-4xl font-light tracking-wide text-brand-black">What to know about Jamaica</h2>
            {/* ... rest of the content ... */}
          </div>
        </div>
      </div>
    </div>
  );
} 