'use client';

import Image from 'next/image';
import { useState } from 'react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    // Left column (smaller images)
    { src: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c', alt: 'Education Support 1', size: 'small' },
    { src: 'https://images.unsplash.com/photo-1509062522246-3755977927d7', alt: 'Community Work 1', size: 'small' },
    { src: 'https://images.unsplash.com/photo-1542810634-71277d95dcbb', alt: 'Healthcare Initiative 1', size: 'small' },
    { src: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6', alt: 'Education Support 2', size: 'small' },
    { src: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74', alt: 'Community Work 2', size: 'small' },
    { src: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74', alt: 'Community Work 2', size: 'small' },
    { src: 'https://images.unsplash.com/photo-1511949860663-92c5c57d48a7', alt: 'Education Support 3', size: 'small' },
    { src: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655', alt: 'Community Work 3', size: 'small' },
    // Right column (larger images)
    { src: 'https://images.unsplash.com/photo-1507537297725-24a1c029d3ca', alt: 'Featured Project 1', size: 'large' },
    { src: 'https://images.unsplash.com/photo-1518998053901-5348d3961a04', alt: 'Featured Project 2', size: 'large' },
    { src: 'https://images.unsplash.com/photo-1508830524289-0adcbe822b40', alt: 'Featured Project 3', size: 'large' },
    { src: 'https://images.unsplash.com/photo-1495727034151-8fdc73e332a8', alt: 'Featured Project 4', size: 'large' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Gallery Header */}
      <div className="bg-black text-white py-16 text-center mb-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="mb-4">
            <svg className="w-12 h-12 mx-auto text-emerald-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M4 4h16a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm0 2v8l4-2 4 2V6H4zm0 11v1h16v-1l-4-4-4 4-4-4-4 4z"/>
            </svg>
          </div>
          <h1 className="text-4xl font-bold mb-4">GALLERY</h1>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="max-w-7xl mx-auto px-4 mb-16">
        <div className="grid grid-cols-3 gap-4">
          {/* Left and Middle Columns (Small Images) */}
          <div className="col-span-2 grid grid-cols-2 gap-4">
            {galleryImages.slice(0, 8).map((image, index) => (
              <div 
                key={index}
                className="aspect-square relative overflow-hidden rounded-lg cursor-pointer hover:opacity-90 transition-opacity"
                onClick={() => setSelectedImage(image.src)}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>

          {/* Right Column (Large Images) */}
          <div className="space-y-4">
            {galleryImages.slice(8).map((image, index) => (
              <div 
                key={index}
                className="aspect-[3/4] relative overflow-hidden rounded-lg cursor-pointer hover:opacity-90 transition-opacity"
                onClick={() => setSelectedImage(image.src)}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Watch More Button */}
      <div className="text-center mb-16">
        <button className="bg-emerald-500 text-white px-8 py-3 rounded-full hover:bg-emerald-600 transition-colors">
          Watch More
        </button>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh] w-full h-full">
            <Image
              src={selectedImage}
              alt="Selected gallery image"
              fill
              className="object-contain"
            />
            <button 
              className="absolute top-4 right-4 text-white text-xl"
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery; 