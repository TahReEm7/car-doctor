import React from 'react';
import { FaCalendarAlt, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

function Availability() {
  return (
    <section className="bg-black rounded-md text-white grid grid-cols-1 md:grid-cols-3 gap-6 p-10 md:p-20 my-10">
      
      {/* Opening Hours */}
      <div className="flex gap-4 items-center">
        <div className="text-3xl text-yellow-400">
          <FaCalendarAlt />
        </div>
        <div className=" flex flex-col gap-1">
          <p>We Are Open Monday-Friday</p>
          <p className='font-bold text-xl'>7:00 am - 8:00 pm</p>
        </div>
      </div>

      {/* Contact Number */}
      <div className="flex gap-4 items-center">
        <div className="text-3xl text-green-400">
          <FaPhoneAlt />
        </div>
        <div className="flex flex-col gap-1">
          <p>Have a question?</p>
          <p className='font-bold text-xl'>+880 1936532058</p>
        </div>
      </div>

      {/* Address */}
      <div className="flex gap-4 items-center">
        <div className="text-3xl text-red-400">
          <FaMapMarkerAlt />
        </div>
        <div className="flex flex-col gap-1">
          <p>Need repair? Our Address</p>
          <p className='font-bold  text-xl'>Uttara, Dhaka</p>
        </div>
      </div>

    </section>
  );
}

export default Availability;
