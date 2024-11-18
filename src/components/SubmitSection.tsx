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
    <div className="bg-brand-gray text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 flex items-baseline">
          <h2 className="text-5xl font-bold">Submit</h2>
          <span className="mx-8 text-4xl font-light italic text-brand-yellow">Coming Soon</span>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map(({ icon: Icon, title, description }) => (
            <div key={title} className="border border-white/20 rounded-lg p-6 hover:border-brand-green transition">
              <Icon className="w-10 h-10 text-brand-green mb-4" />
              <h3 className="text-xl font-bold mb-2">{title}</h3>
              <p className="text-white/70">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}