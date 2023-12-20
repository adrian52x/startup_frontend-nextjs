import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useState } from "react";
import Avatar from "@/app/components/Avatar";

import { GoQuestion } from "react-icons/go";
import { IoTimerOutline } from "react-icons/io5";
import { FaRegCalendarAlt } from "react-icons/fa";

const PendingMeetings = ({meetings}) => { 

    

    return (
        <>
            {meetings.map((meeting) => (
                
                <div key={meeting._id}
                    className={`w-full relative flex items-center space-x-3 p-3 mb-4 shadow-lg  rounded-lg transition cursor-pointer border `}
                >
                    <Avatar src={meeting.sender.img} />
                    <div className="min-w-0 flex-1">
                        <div className="focus:outline-none">
                            <span className="absolute inset-0" aria-hidden="true" />
                            <div className="flex justify-between items-center mb-1">
                                <strong className="text-sm  text-gray-900">
                                    {meeting.sender.firstName + ' ' + meeting.sender.lastName}
                                </strong>
                            </div>


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

                            {meeting.status === 'pending' && (
                                <div className="flex pt-4">
                                    <GoQuestion className="text-lg"/>
                                    <p className="text-sm text-orange-300 truncate ml-1">
                                        {meeting.status}
                                    </p>
                                </div>
                            )}
                            

                        </div>
                    </div>
                </div>
                
            ))}
        </>
    );


}


export default PendingMeetings;