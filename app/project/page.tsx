'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Contact from '@/components/Contact';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
}

const ProjectPage: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: 'Church',
      description: 'Church Decoration',
      image: '/dec1.jpeg',
    },
    {
      id: 2,
      title: 'Church',
      description: 'Church Decoration',
      image: '/dec2.jpeg',
    },
    {
      id: 3,
      title: 'Church',
      description: 'Church Decoration',
      image: '/dec3.jpeg',
    },
    {
      id: 4,
      title: 'Church',
      description: 'Church Decoration',
      image: '/dec4.jpeg',
    },
    {
      id: 5,
      title: 'Church',
      description: 'Church Decoration',
      image: '/dec5.jpeg',
    },
    {
      id: 6,
      title: 'Church',
      description: 'Church Decoration',
      image: '/dec6.jpeg',
    },
    {
      id: 7,
      title: 'Church',
      description: 'Church Decoration',
      image: '/dec7.jpeg',
    },
    {
      id: 8,
      title: 'Church',
      description: 'Church Decoration',
      image: '/dec8.jpeg',
    },
    {
      id: 9,
      title: 'Church',
      description: 'Church Decoration',
      image: '/dec9.jpeg',
    },
    {
      id: 10,
      title: 'Church',
      description: 'Church Decoration',
      image: '/dec11.jpeg',
    },
    {
      id: 11,
      title: 'Church',
      description: 'Church Decoration',
      image: '/dec12.jpeg',
    },
    {
      id: 12,
      title: 'Church',
      description: 'Church Decoration',
      image: '/dec13.jpeg',
    },
    {
      id: 13,
      title: 'Church',
      description: 'Church Decoration',
      image: '/dec14.jpeg',
    },
    {
      id: 14,
      title: 'Church',
      description: 'Church Decoration',
      image: '/dec15.jpeg',
    },
    {
      id: 15,
      title: 'Wedding',
      description: 'Wedding Reception Decoration',
      image: '/dec16.jpeg',
    },
    {
      id: 16,
      title: 'Wedding',
      description: 'Wedding Reception Decoration',
      image: '/dec17.jpeg',
    },
    {
      id: 17,
      title: 'Wedding',
      description: 'Wedding Reception Decoration',
      image: '/dec18.jpeg',
    },
    {
      id: 18,
      title: 'Wedding',
      description: 'Wedding Reception Decoration',
      image: '/dec19.jpeg',
    },
    {
      id: 19,
      title: 'Wedding',
      description: 'Wedding Reception Decoration',
      image: '/dec20.jpeg',
    },
  ];

  return (
    <div>
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <div className="relative h-[50vh] min-h-[400px] md:h-[60vh]">
        <Image
          src="/dec3.jpeg"
          alt="Background"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-black/60">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight drop-shadow-2xl">
            MY PROJECTS
          </h1>
        </div>
      </div>

      {/* Gallery */}
      <div className="container mx-auto px-4 py-16 md:py-24 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1800ad] mb-4">
            Featured Works
          </h2>
          <p className="text-lg max-w-2xl mx-auto text-[#1800ad]">
            Discover our finest interior and event decoration projects
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedImage(project.image)}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#1800ad] group-hover:text-[#1800ad] transition-colors">
                  {project.title}
                </h3>
                <p className="mt-2 text-[#1800ad] text-sm line-clamp-2">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* TRUE FULL-SCREEN MODAL – edge-to-edge */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[9999] bg-black flex items-center justify-center"
          onClick={() => setSelectedImage(null)}
        >
          {/* Image takes full viewport */}
          <div className="relative w-full h-full">
            <Image
              src={selectedImage}
              alt="Full screen project"
              fill
              className="object-contain"
              sizes="100vw"
              priority
              quality={90}
            />
          </div>

          {/* Close button – floating top-right */}
          <button
            className="fixed top-4 right-4 z-[10000] text-white text-5xl md:text-6xl font-light hover:text-gray-300 transition-colors focus:outline-none"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(null);
            }}
            aria-label="Close full screen"
          >
            ×
          </button>

          {/* Optional: subtle loading hint
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 text-sm md:text-base">
            Click anywhere or press × to close
          </div> */}
        </div>
      )}
      
    </div>
    <Contact/>
    </div>
  );
};

export default ProjectPage;