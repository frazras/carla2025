import React, { useState, useEffect } from 'react';

export default function SubscribePopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [email, setEmail] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const pageHeight = document.documentElement.scrollHeight;
      const windowHeight = window.innerHeight;
      const halfwayPoint = (pageHeight - windowHeight) / 2;

      if (scrollPosition > halfwayPoint && !isSubmitted) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isSubmitted]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the email submission
    setIsSubmitted(true);
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl p-8 max-w-md w-full relative">
        <button 
          onClick={() => setIsVisible(false)}
          className="absolute top-4 right-4 text-brand-gray hover:text-brand-black"
        >
          ✕
        </button>
        
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold text-brand-black mb-2">Stay Updated!</h3>
          <p className="text-brand-gray">
            Join the CARLA'25 community and be the first to receive important updates about:
          </p>
          <ul className="text-left text-brand-gray mt-4 space-y-2">
            <li>• Early bird registration dates</li>
            <li>• Call for papers deadlines</li>
            <li>• Keynote speaker announcements</li>
            <li>• Workshop schedules</li>
          </ul>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            required
            className="w-full p-3 border border-brand-gray/20 rounded-lg focus:outline-none focus:border-brand-green"
          />
          <button
            type="submit"
            className="w-full bg-brand-green text-white py-3 rounded-lg hover:bg-brand-green/90 transition"
          >
            Subscribe to Updates
          </button>
        </form>
      </div>
    </div>
  );
} 