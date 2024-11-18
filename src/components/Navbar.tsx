import React from 'react';
import { Menu } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-black text-white py-4 px-6 fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-sm">LATIN AMERICA HIGH PERFORMANCE COMPUTING CONFERENCE</div>
        <button className="lg:hidden">
          <Menu className="w-6 h-6" />
        </button>
        <div className="hidden lg:flex space-x-6">
          <a href="#about" className="hover:text-green-400 transition">About</a>
          <a href="#submit" className="hover:text-green-400 transition">Submit</a>
          <a href="#registration" className="hover:text-green-400 transition">Registration</a>
          <a href="#location" className="hover:text-green-400 transition">Location</a>
        </div>
      </div>
    </nav>
  );
}