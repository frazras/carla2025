import React from 'react';
import bannerImage from '../assets/images/carla25_bn-home-min.png';

export default function About() {
  return (
    <div 
      className="py-20 bg-cover bg-center bg-fixed relative"
      style={{
        backgroundImage: `url(${bannerImage})`,
      }}
    >
      <div className="absolute inset-0 bg-brand-black/20" />
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="bg-brand-black rounded-xl p-8 max-w-6xl mx-auto mt-[6em]">
          <div className="grid lg:grid-cols-2 gap-16 p-2">
            <div className="p-2">
              <p className="text-white text-lg leading-relaxed">
                CARLA is an international conference aimed at providing a forum to foster the growth and strength of the High
                Performance Computing (HPC) community in Latin America and beyond. The conference serves as a platform for
                new ideas, techniques, and research in HPC and its applications areas. Started in 2014.
              </p>
            </div>
            <div className="space-y-8">
              <p className="text-white text-lg leading-relaxed">
                CARLA has become the flagship conference for HPC in the region. We invite the international community to
                share its advances on both HPC and HPC4AI as these fields are key areas that are becoming the
                predominant engine for innovation and development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}