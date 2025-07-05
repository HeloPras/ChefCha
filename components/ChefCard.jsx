import React from 'react';
import { MdStarRate } from 'react-icons/md';

const ChefCard = ({ name, specialty, image, rating }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
      <div className='h-90 w-auto'>
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover cursor-pointer hover:scale-105 transition-all duration-500 ease-in-out"
        />
      </div>
      <div className="p-4">
        <h2 className="text-lg font-bold mb-1">{name}</h2>
        <p className="text-sm text-gray-600 mb-2">{specialty}</p>
        <div className="flex items-center justify-between">
          <p className="flex items-center gap-1">
            <MdStarRate className="text-yellow-500" /> {rating}
          </p>
          <button className="font-medium bg-[#fc8019] text-[14px] p-1 px-3 rounded-md hover:text-white">
            View Profile
          </button>
        </div>
      </div>
    </div>
  )
};

export default ChefCard;
