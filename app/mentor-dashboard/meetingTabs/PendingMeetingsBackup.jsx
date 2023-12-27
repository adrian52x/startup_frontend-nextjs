import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useState } from "react";
import qs from 'query-string';

import Avatar from "@/app/components/Avatar";
import { GoQuestion } from "react-icons/go";
import { IoTimerOutline } from "react-icons/io5";
import { FaRegCalendarAlt } from "react-icons/fa";

const PendingMeetings = ({meetings}) => { 
    const router = useRouter();
    const params = useSearchParams();

    const [selectedMeeting, setSelectedMeeting] = useState(null);

    const handleClick = useCallback((meetingId) => {
        setSelectedMeeting(meetingId);
        let currentQuery = {};
    
        if (params) {
            currentQuery = qs.parse(params.toString())
        }

        const updatedQuery = {
        ...currentQuery,
        pending: meetingId
        }

        // params?.get('pending') === meetingId // alternative
        if (currentQuery.pending === meetingId) {
            delete updatedQuery.pending;
            setSelectedMeeting(null);
        }

        const url = qs.stringifyUrl({
        url: '/mentor-dashboard',
        query: updatedQuery
        }, { skipNull: true });

        router.push(url);
    }, [router, params]);

    return (
        <>
        {/* {selectedMeeting && (
            <div className="space-x-2">
                <button className="bg-green-500 text-white px-3 py-1 rounded-3xl">Accept</button>
                <button className="bg-red-500 text-white px-3 py-1 rounded-3xl">Decline</button>

                <input className="w-[200px] px-3 py-2 mt-4 border rounded" type="text" placeholder="Add a note" />

                <input className="w-[200px] px-3 py-2 mt-4 border rounded" type="text" placeholder="Google Meet link" required />
                        
            </div>
            
        )} */}
        
            <div className="grid md:grid-cols-3  grid-cols-1 gap-4">
            {meetings
                .sort((a, b) => (a._id === params.get('pending') ? -1 : b._id === params.get('pending') ? 1 : 0))
                .map((meeting) => (

                <div key={meeting._id}
                    onClick={() => { handleClick(meeting._id) }}
                    className={`${meeting._id === params.get('pending') ? 'h-[200px] -translate-y-2 md:col-span-3 md:flex bg-slate-200 duration-500 ease-in-out' : 'bg-white'} w-full relative items-center p-3 shadow-lg  rounded-lg transition cursor-pointer border `}
                >
                    <div className="flex-1 flex items-center space-x-8">
                        <Avatar src={meeting.sender.img} width={70} height={55} />
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
                            
                    {meeting._id === params.get('pending') && (
                    <div className="flex-1 pt-5 md:pt-0">
                        <div className="space-x-2">
                            <button className="bg-green-500 text-white px-3 py-1 rounded-3xl">Accept</button>
                            <button className="bg-red-500 text-white px-3 py-1 rounded-3xl">Decline</button>

                            <input className="w-[200px] px-3 py-2 mt-4 border rounded" type="text" placeholder="Add a note" />

                            <input className="w-[200px] px-3 py-2 mt-4 border rounded" type="text" placeholder="Google Meet link" required />
                                    
                        </div>
                        
                    </div>
                    )}

                </div> 
            ))}
            </div>
        </>
    );


}


export default PendingMeetings;