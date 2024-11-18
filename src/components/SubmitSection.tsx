import React from 'react';
import { BookOpen, FileText, Presentation, Image } from 'lucide-react';
import supportBorder from '../assets/images/carla25_img-support02-min.png';

const categories = [
  { 
    icon: BookOpen, 
    title: 'Workshops', 
    description: 'Share your knowledge through interactive sessions. Workshops provide hands-on experience with cutting-edge HPC technologies and methodologies. Sessions typically run for 2-4 hours with practical exercises.'
  },
  { 
    icon: FileText, 
    title: 'Papers', 
    description: 'Present your research findings in HPC and AI convergence. We welcome both full papers (12 pages) and short papers (6 pages) covering original research, case studies, and industry applications.'
  },
  { 
    icon: Presentation, 
    title: 'Tutorials', 
    description: 'Guide others through technical concepts in HPC. Tutorials should focus on emerging technologies, programming models, or optimization techniques. Perfect for educational content and best practices.'
  },
  { 
    icon: Image, 
    title: 'Posters', 
    description: 'Visual presentation of your work in progress or completed research. Posters offer an excellent opportunity for informal discussion and feedback from the HPC community. Includes a lightning talk session.'
  },
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
            <div key={title} className="relative p-6 group min-h-[300px] flex flex-col">
              <img 
                src={supportBorder} 
                alt="" 
                className="absolute inset-0 w-full h-full object-fill opacity-60 group-hover:opacity-100 transition-opacity"
              />
              <div className="relative z-10 flex flex-col flex-grow">
                <Icon className="w-10 h-10 text-brand-green mb-4" />
                <h3 className="text-xl font-bold mb-4">{title}</h3>
                <p className="text-white/70 text-sm leading-relaxed">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}