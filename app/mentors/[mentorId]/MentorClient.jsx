'use client'

import React, { useState } from 'react';
import { AiFillStar } from "react-icons/ai";
import Button from '@/app/components/Button';
import { toast } from "react-hot-toast";


import { DatePicker } from "@tremor/react";
import Avatar from '@/app/components/Avatar';

const MentorClient = ({mentor, currentUser, reservations = []}) => { 

    const timeFrames = [
        '9:00', '9:30', '10:00', '10:30', '11:00', '11:30', '12:00', '12:30',
        '13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00'
    ];

    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTime, setSelectedTime] = useState('');

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const createBooking = async (mentor, date, time) => {
        if (!currentUser) { 
            toast.error('You must be logged in to book a session');
            return;
        }
        

        const status = "pending";

        let body = {
            receiver: mentor._id,
            sender: currentUser._id,
            date: date,
            time: time,
            status: status
        }
        
        //console.log(body);

        try {
            const response = await fetch('http://localhost:5000/api/meetings', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(body),
            });
        
            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
            }

            if(response.ok) {
                toast.success('Booking created successfully');
            }
        
            //const meeting = await response.json();
        
            //console.log(meeting);
          } catch (error) {
            console.error('Failed to create booking:', error);
          }
    }

    return (
        <div className='w-full max-w-[1440px] md:mx-auto lg:px-20 md:px-10 sm:px-6'>
        
        <section className="my-8 shadow-full p-4 rounded-xl">
            <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2 sm:col-span-1">
                    <div className="flex items-center mb-4 ">
                        <Avatar src={mentor.img} width={64} height={64} />
                            <div className='ml-4'>
                                <h2 className="text-xl font-bold">{mentor.firstName} {mentor.lastName}</h2>
                                <p className="text-gray-500">{mentor.email}</p>
                                <code className="text-gray-500 italic">{mentor.profession}</code>
                            </div>
                    </div>
                    <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam, sapien eu fringilla fringilla, lectus justo finibus orci, ac tincidunt elit turpis eu mi.
                        Sed aliquam, sapien eu fringilla fringilla, lectus justo finibus orci, ac tincidunt elit turpis eu mi.
                        Sed aliquam, sapien eu fringilla fringilla, lectus justo finibus orci, ac tincidunt elit turpis eu mi.
                    </p>

                    <div className="text-gray-600 pt-8 font-semibold">
                        Other Info
                    </div>
                </div>
                <div className="col-span-2 sm:col-span-1">
                    <div className="aspect-w-16 aspect-h-9">
                        <iframe src="https://www.youtube.com/embed/p2vpqKBPj4U" title="Mentor Video" className="w-full h-80  rounded-lg" allowFullScreen>
                        </iframe>                    
                    </div>
                </div>
            </div>
        </section>

        <section className="my-8 shadow-full p-4 rounded-xl">

            <h2 className="text-2xl font-bold mb-4">Book a Session</h2>

            <div className='flex flex-col gap-10 justify-center sm:flex-row sm:justify-start flex-wrap '>
            <DatePicker className="max-w-xs " 
                enableClear={false} defaultValue={selectedDate} onValueChange={handleDateChange} minDate={new Date(Date.now() + 86400000)} />
                {/* <Calendar
                value={selectedDate}
                onChange={handleDateChange}
                /> */}

                {selectedDate && (<div className=" grid grid-cols-4 gap-4 sm:col-span-1">
                        {timeFrames.map((time, index) => (
                        <Button label={time} outline={selectedTime !== time} small
                            onClick={() => setSelectedTime(time)}
                            key={index}
                            //className={`${selectedTime === time ? 'bg-blue-700' : ''} bg-gray-400 text-white text-center p-4 hover:bg-blue-400 cursor-pointer`}
                        >
                            {time}
                        </Button>
                        ))}
                </div>)}

                {(selectedDate && selectedTime) &&(<div className="space-y-2 sm:col-span-1">
                    <p className='text-neutral-500'>Selected date: 
                        <strong> {selectedDate.toDateString()}</strong>
                    </p>
                    <p className='text-neutral-500'>Selected time: 
                        <strong> {selectedTime}</strong>
                    </p>
                   <Button
                        customWidth={"w-3/5"}
                        label="Book now"
                        small
                        onClick={() => createBooking(mentor, selectedDate, selectedTime)}  >
                   </Button>
                </div>)}

            </div>
        </section>

        <section className="my-8 shadow-full p-4 rounded-xl">
            <h2 className="text-2xl font-bold mb-4 flex items-center">
                <AiFillStar size={20}/>
                4.86
                |
                34 Reviews
            </h2>
            
            {/* Reviews itself */}
            <div className="flex items-start my-6"> 
                <img
                    src={'/images/placeholder.jpg'}
                    alt="User Avatar"
                    className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                    <div className="flex items-center mb-2">
                    <h3 className="text-lg font-bold mr-2">John Doe</h3>
                    <span className="text-gray-500">- August 25, 2023</span>
                    </div>
                    <p className="text-gray-700 mb-2">
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam, sapien eu fringilla fringilla, lectus justo finibus orci, ac tincidunt elit turpis eu mi."
                    </p>
                </div>
            </div>
            
            <hr />

            <div className="flex items-start my-6"> 
                <img
                    src={'/images/placeholder.jpg'}
                    alt="User Avatar"
                    className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                    <div className="flex items-center mb-2">
                    <h3 className="text-lg font-bold mr-2">Carl Jhonson</h3>
                    <span className="text-gray-500">- July 1, 2023</span>
                    </div>
                    <p className="text-gray-700 mb-2">
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam, sapien eu fringilla fringilla, lectus justo finibus orci, ac tincidunt elit turpis eu mi."
                    </p>
                </div>
            </div>


        </section>
   


        </div> 
    )

}


export default MentorClient;