'use client'

import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { AiFillStar } from "react-icons/ai";
import Container from "@/app/components/Container";
import Button from '@/app/components/Button';

const MentorClient = ({mentor, reservations = [],currentUser}) => { 

    const timeFrames = [
        '9:00', '9:30', '10:00', '10:30', '11:00', '11:30', '12:00', '12:30',
        '13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00'
    ];

    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTime, setSelectedTime] = useState('');

    const handleDateChange = (date) => {
        setSelectedDate(date);
        console.log("selectedDate", date);
    };

    const createBooking = (mentor, date, time) => {
        const status = "pending";

        let body = {
            receiver: mentor.email,
            sender: "mentor3@gmail.com",
            date: date,
            time: time,
            status: status
        }
        
        console.log(body);
    }

    return (
        <Container>
        
        <section className="my-8 shadow-lg p-4">
            <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2 sm:col-span-1">
                    <div className="flex items-center mb-4">
                        <img src={'/images/placeholder.jpg'} alt="Mentor Photo" className="w-16 h-16 rounded-full mr-4" />
                            <div>
                                <h2 className="text-xl font-bold">{mentor.firstName} {mentor.lastName}</h2>
                                <p className="text-gray-500">{mentor.email}</p>
                                <p className="text-gray-500 italic">{mentor.category.join(", ")}</p>
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
                        <iframe src="https://www.youtube.com/embed/kBsgqpYajTk" title="Mentor Video" className="w-full h-96" allowFullScreen></iframe>                    
                    </div>
                </div>
            </div>
        </section>

        <section className="my-8 shadow-lg p-4">
            <h2 className="text-2xl font-bold mb-4">Book a Session</h2>
            
            <div className='flex flex-col gap-10 justify-center sm:flex-row sm:justify-start'>
                <Calendar
                value={selectedDate}
                onChange={handleDateChange}
                />

                {selectedDate && (<div className=" grid grid-cols-4 gap-4 max-h-32">
                        {timeFrames.map((time, index) => (
                        <div
                            onClick={() => setSelectedTime(time)}
                            key={index}
                            className={`${selectedTime === time ? 'bg-blue-700' : ''} bg-gray-400 text-white text-center p-4 hover:bg-blue-400 cursor-pointer`}
                        >
                            {time}
                        </div>
                        ))}
                </div>)}

                {(selectedDate && selectedTime) &&(<div className="">
                   <h2>Selected date: {selectedDate.toDateString()}</h2>
                   <h2>Selected time: {selectedTime}</h2>
                   <Button label={"Book now"} small onClick={() => createBooking(mentor, selectedDate, selectedTime)}  ></Button>
                </div>)}
            </div>
        </section>

        <section className="my-8 shadow-lg p-4">
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
   


        </Container> 
    )

}


export default MentorClient;