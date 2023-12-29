import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useState } from "react";
import qs from 'query-string';

import Avatar from "@/app/components/Avatar";
import { GoQuestion } from "react-icons/go";
import { IoTimerOutline } from "react-icons/io5";
import { FaRegCalendarAlt } from "react-icons/fa";

const MeetingCard = ({ meeting, onCardClick, onAccept, onReject, selectedMeeting }) => {
  
    const handleCardClick = () => {
      onCardClick(meeting._id);
    };
  
    return (
        <div className={`${meeting._id === selectedMeeting ? 'h-[350px] md:h-[200px] -translate-y-2 md:col-span-3  bg-slate-200 duration-500 ease-in-out' : 'bg-white'} md:flex w-full relative items-center p-3 shadow-lg  rounded-lg transition cursor-pointer border`}
            onClick={handleCardClick}> 

            <div className={`space-y-2 px-8 mb-2 ${meeting._id === selectedMeeting ? 'flex flex-col items-center justify-center md:w-1/4' : ''}`}>
                <Avatar src={meeting.sender.img} width={70} height={55} />

                <div>
                    <strong className="text-sm  text-gray-900">
                        {meeting.sender.firstName + ' ' + meeting.sender.lastName}
                    </strong>
                </div>
            </div>    

            <div className={`space-y-2 px-8 ${meeting._id === selectedMeeting ? 'md:w-1/4' : ''}`}>
                <div className="flex">
                    <FaRegCalendarAlt  className="text-lg" />
                        <p className="text-sm text-gray-500 truncate ml-1">
                            {new Date(meeting.date).toISOString().split('T')[0]} | {meeting.time}
                        </p>
                </div>

                <div className="flex">
                    <IoTimerOutline  className="text-lg" />
                        <p className="text-sm text-gray-500 truncate ml-1">
                            30 min
                        </p>
                </div>

                <div className="flex ">
                    <GoQuestion className="text-lg"/>
                        <p className="text-sm text-orange-300 truncate ml-1">
                            {meeting.status}
                        </p>
                </div>      
                          

            </div>    



            {meeting._id === selectedMeeting && (
            <div className={`flex-1 px-8 pt-4 md:pt-0 ${meeting._id === selectedMeeting ? 'md:w-1/2' : ''}`}>
                <button onClick={(e) => { e.stopPropagation(); onAccept(meeting._id); }}>Accept</button>
                <button onClick={(e) => { e.stopPropagation(); onReject(meeting._id); }}>Reject</button>

                <input onClick={(e) => { e.stopPropagation();  }} className="w-[200px] px-3 py-2  border rounded" type="text" placeholder="Add a note" />
                <input onClick={(e) => { e.stopPropagation();  }} className="w-[200px] px-3 py-2  border rounded" type="text" placeholder="Google Meet link" required />
            </div>
            )}
        </div>
    );
  };

const PendingMeetings = ({meetings}) => { 

    const [selectedMeeting, setSelectedMeeting] = useState(null);


    const handleCardClick = (id) => {
        setSelectedMeeting(id);
        console.log(`Meeting ${id} clicked`);
      };
    
      const handleAccept = (id) => {
        console.log(`Meeting ${id} accepted`);
      };
    
      const handleReject = (id) => {
        console.log(`Meeting ${id} rejected`);
      };
    
      return (
        <div className="grid md:grid-cols-3  grid-cols-1 gap-4">
          {meetings
          .sort((a, b) => (a._id === selectedMeeting ? -1 : b._id === selectedMeeting ? 1 : 0))
          .map((meeting) => (
            <MeetingCard
              key={meeting._id}
              meeting={meeting}
              selectedMeeting={selectedMeeting}
              onCardClick={handleCardClick}
              onAccept={handleAccept}
              onReject={handleReject}
            />
          ))}
        </div>
      );
    };


export default PendingMeetings;