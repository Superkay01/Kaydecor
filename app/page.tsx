
import React from 'react';
import Image from 'next/image';
import About from '@/components/About';
import Project from '@/components/Project';
import Contact from '@/components/Contact';


const Page: React.FC = () => {
  return (
    <div>
   
      <div className="grid grid-cols-1 sm:grid-cols-2 sm:pt-16 pt-5 px-10 pb-12 ">
        <div className="sm:mt-25 mt-10">
          <p className="text-blue-700 text-[19px] sm:text-[30px] font-semibold sm:px-10 px-2 py-4">
            Event Decorator
          </p>
          <h1 className="text-blue-700 text-[19px] sm:px-10 px-2 sm:text-[40px] font-bold">
            Hello, My Name
          </h1>
          <h1 className="text-blue-700 text-[19px] sm:px-10 px-2 sm:text-[40px] font-bold mt-2 overflow-hidden whitespace-nowrap border-r-4 border-blue-700 animate-typing-infinite">
          Is Adegbesan Oluwakayode
        </h1>
          <p className="text-blue-700 text-[19px] sm:text-[25px] sm:px-10 px-2 py-4">
            I am an Event Decorator
          </p>
        </div>

        <div className="flex justify-center items-start">
          <Image
            src="/Aboutme.jpeg"
            alt="Hero Picture"
            width={500}
            height={500}
            className="w-full max-w-md h-[500px] object-cover object-top rounded-lg shadow-lg"
            priority 
          />
        </div>
      </div>

      
      <About />
      <Project />
      <Contact />
    </div>
  );
};

export default Page;