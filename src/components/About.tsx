import React from 'react';

export default function About() {
  return (
    <div className="bg-gradient-to-b from-green-500 to-blue-500 text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-6xl font-light tracking-wider">KINGSTON</h2>
            <p className="text-lg">
              CARLA is an international conference aimed at providing a forum to foster the growth and strength of the High
              Performance Computing (HPC) community in Latin America and beyond. The conference serves as a platform for
              new ideas, techniques, and research in HPC and its applications areas. Started in 2014.
            </p>
            <p className="text-lg">
              CARLA has become the flagship conference for HPC in the region. We invite the international community to
              share its advances on both HPC and HPC4AI as these fields are key areas that are becoming the
              predominant engine for innovation and development.
            </p>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1580450744180-2b2d2b0ad6a5?auto=format&fit=crop&w=800"
              alt="Kingston Jamaica"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}