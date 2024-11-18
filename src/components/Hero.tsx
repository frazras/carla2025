import React from 'react';
import { Bird } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative bg-black text-white pt-20">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex items-center justify-center mb-8">
          <Bird className="w-16 h-16 text-green-400" />
          <div className="ml-4">
            <h1 className="text-4xl font-bold">CARLA'25</h1>
            <p className="text-xl">SEPTEMBER 22 - 26</p>
            <p className="text-xl">KINGSTON, JAMAICA</p>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-b from-transparent to-green-500"></div>
    </div>
  );
}