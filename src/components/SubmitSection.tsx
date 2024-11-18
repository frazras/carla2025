import React from 'react';
import { BookOpen, FileText, Presentation, Image } from 'lucide-react';

const categories = [
  { icon: BookOpen, title: 'Workshops', description: 'Share your knowledge through interactive sessions' },
  { icon: FileText, title: 'Papers', description: 'Present your research findings' },
  { icon: Presentation, title: 'Tutorials', description: 'Guide others through technical concepts' },
  { icon: Image, title: 'Posters', description: 'Visual presentation of your work' },
];

export default function SubmitSection() {
  return (
    <div className="bg-gray-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Submit</h2>
          <p className="text-xl text-gray-400">Coming soon</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map(({ icon: Icon, title, description }) => (
            <div key={title} className="border border-gray-700 rounded-lg p-6 hover:border-green-400 transition">
              <Icon className="w-10 h-10 text-green-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">{title}</h3>
              <p className="text-gray-400">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}