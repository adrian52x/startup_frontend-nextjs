import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useState } from "react";
import qs from 'query-string';

import Avatar from "@/app/components/Avatar";
import Button from "@/app/components/Button";

import { TbProgressCheck } from "react-icons/tb";
import { IoTimerOutline } from "react-icons/io5";
import { FaRegCalendarAlt } from "react-icons/fa";
import { PiNotePencil } from "react-icons/pi";
import { SiGooglemeet } from "react-icons/si";

import useAcceptMeetingModal from "@/app/hooks/useAcceptMeetingModal";

const MeetingCard = ({ meeting, onCardClick, selectedMeeting }) => {

    const acceptMeetingModal = useAcceptMeetingModal();
  
    const handleCardClick = () => {
      onCardClick(meeting._id);
    };
  
    return (
        
        <div className={`${meeting._id === selectedMeeting ? 'h-[275px] md:h-[200px] -translate-y-2 md:col-span-3  bg-slate-200 duration-500 ease-in-out' : 'bg-white md:h-[150px]'} md:flex items-center p-3 shadow-lg  rounded-lg transition cursor-pointer border`}
            onClick={handleCardClick}> 

            <div className={`space-y-2 px-8 mb-2 flex flex-col items-center justify-center ${meeting._id === selectedMeeting ? ' md:w-1/3' : ''}`}>
                <Avatar  src={meeting.sender.img} width={70} height={70} />

                <div>
                    <strong className="text-sm  text-gray-900">
                        {meeting.sender.firstName + ' ' + meeting.sender.lastName}
                    </strong>
                </div>
            </div>    

            <div className={`space-y-2 px-8 ${meeting._id === selectedMeeting ? 'md:w-1/3' : ''}`}>
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

                <div title="status" className="flex ">
                    <TbProgressCheck  className="text-lg"/>
                        <p className="text-sm text-green-400 truncate ml-1">
                            {meeting.status}
                        </p>
                </div>      
                          

            </div>    



            {meeting._id === selectedMeeting && (
            <div className={`flex-1  px-8 pt-2 md:pt-0 space-y-2`}>
                <div className="flex space-x-2">
                    <SiGooglemeet className="text-xl flex-shrink-0"/>
                    <a href={meeting.meetingLink} className="text-sm text-blue-500 underline hover:text-blue-800" target="_blank">{meeting.meetingLink}</a>
                </div>
                {meeting.note && (
                    <div className="flex space-x-2">
                        <PiNotePencil className="text-xl flex-shrink-0"/>
                        <p className="text-sm " >{meeting.note}</p>
                    </div>
                )}

            
            </div>
            )}
        </div>
    );
  };

const UpcomingMeetings = ({meetings}) => { 
    const [selectedMeeting, setSelectedMeeting] = useState(null);

    const handleCardClick = (id) => {
        setSelectedMeeting(id);
    };
    
      return (
        <>
            <div className="grid md:grid-cols-3  grid-cols-1 gap-4">
            {meetings
            .sort((a, b) => (a._id === selectedMeeting ? -1 : b._id === selectedMeeting ? 1 : 0))
            .map((meeting) => (
                <MeetingCard
                key={meeting._id}
                meeting={meeting}
                selectedMeeting={selectedMeeting}
                onCardClick={handleCardClick}

                />
            ))}
            </div>
        </>
      );
    };


export default UpcomingMeetings;