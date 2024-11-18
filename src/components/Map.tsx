import React from 'react';

export default function Map() {
  return (
    <div className="w-full h-[500px]">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30466.239441487493!2d-76.80494553222657!3d17.997058957229244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8edb3f04e1642631%3A0x4f3d11c7c5f89888!2sNew%20Kingston%2C%20Kingston%2C%20Jamaica!5e0!3m2!1sen!2s!4v1709764583037!5m2!1sen!2s"
        className="w-full h-full border-0"
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
} 