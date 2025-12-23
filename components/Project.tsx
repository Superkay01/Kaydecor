import React from 'react';
import Image from "next/image"
import Link from "next/link"

const AlbumPage: React.FC = () => {
  const images = [
    '/dec1.jpeg', 
    '/dec2.jpeg', 
    '/dec3.jpeg',
    '/dec4.jpeg',
    '/dec5.jpeg',
    '/dec6.jpeg'
  ];

  return (
    <div className="container mx-auto px-4 py-6 mt-15 mb-5">
      <h2 className="text-3xl text-[#1800ad] font-bold text-center mb-8">Event Decoration Album</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((images, index) => (
          <div key={index} className="relative overflow-hidden rounded-lg shadow-lg h-60">
            <Image 
              src={images} 
              alt={`Decoration ${index + 1}`} 
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <Link href="/project" className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          See More
        </Link>
      </div>
    </div>
  );
};

export default AlbumPage;