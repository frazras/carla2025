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
            <p className="text-lg leading-relaxed text-brand-black">
              Jamaica is a vibrant Caribbean island nation known for its rich culture, stunning beaches, and warm hospitality. Located in the Caribbean Sea, it is the third-largest island of the Greater Antilles.
            </p>
            <p className="text-lg leading-relaxed text-brand-black">
              The official language is English, making communication easy for international visitors. The local currency is the Jamaican Dollar (JMD), though US dollars are widely accepted in tourist areas.
            </p>
            <p className="text-lg leading-relaxed text-brand-black">
              Jamaica enjoys a tropical climate with warm temperatures year-round. The average temperature ranges from 75°F to 85°F (24°C to 29°C), making it an ideal destination for the conference.
            </p>
            <p className="text-lg leading-relaxed text-brand-black">
              The island is easily accessible through two major international airports: Sangster International Airport in Montego Bay and Norman Manley International Airport in Kingston, with direct flights from many major cities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 