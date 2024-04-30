import React from 'react'
import Image from 'next/image'
const Hero = () => {
  return (
    <>
      <div className="container h-full grid grid-cols-1 lg:grid-cols-5 mt-10 lg:mt-20">
        <div className="col-span-4">
          <h1 className="text-[8rem] lg:text-[9.5rem] font-black uppercase tracking-tight">
            Find your dream house!
          </h1>
        </div>
        <div className="col-span-1">
          <p className="text-gray-400 tracking-wider text-sm">
            "Explore our wide range of exquisite homes and find the perfect one
            for you. Whether you're searching for a cozy apartment in the city
            or a luxurious villa by the beach, we have something to suit every
            taste and lifestyle. Let us help you find your dream house today!"
          </p>
        </div>
      </div>

      <div className="relative mt-32 lg:mt-12">
        <img
          src="/house.jpg"
          alt="Banner"
          className="w-full h-[600px] object-cover"
        />
        <div className="absolute -top-24 right-10 lg:right-72 bg-[#104378] p-5 w-48 h-48 rounded-full flex justify-center items-center border-8 border-white">
          <h1 className="text-bold text-foreground">View Project</h1>
        </div>
      </div>
    </>
  );
}

export default Hero