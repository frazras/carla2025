import React from 'react';
import { Bird, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center space-y-6">
          <Bird className="w-16 h-16 text-green-400" />
          <div className="flex items-center space-x-2">
            <Mail className="w-5 h-5" />
            <a href="mailto:contact@carlaconference.org" className="hover:text-green-400 transition">
              contact@carlaconference.org
            </a>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-green-400 transition">Twitter</a>
            <a href="#" className="hover:text-green-400 transition">LinkedIn</a>
            <a href="#" className="hover:text-green-400 transition">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
}