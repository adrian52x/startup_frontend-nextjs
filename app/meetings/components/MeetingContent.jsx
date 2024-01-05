'use client';

import Avatar from "@/app/components/Avatar";
import { FaRegMessage } from "react-icons/fa6";
import { FiPhoneCall } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { GoStar } from "react-icons/go";
import useGuidelinesModal from "@/app/hooks/useGuidelinesModal";
import { useRouter } from "next/navigation";



const MeetingContent = ({ meeting }) => {
    const guidelinesModal = useGuidelinesModal();
    const router = useRouter();

    console.log(meeting);
    return ( 
        <>
            <div className='flex items-start py-10 px-10 gap-6 mt-6 ml-4 shadow-md rounded-lg '>
                <Avatar src={meeting.receiver.img} width={60} height={60}/>
           
                <div className="flex flex-col gap-3">
                    
                    <h2 className='text-5xl text-gray-900'>{meeting.receiver.firstName}<strong className='ml-3'>{meeting.receiver.lastName}</strong></h2>
                    <div className="flex gap-3">
                        <GoStar /> <GoStar /> <GoStar /> <GoStar /> <GoStar />
                    </div>
                    <code>{meeting.receiver.profession ? <i>{meeting.receiver.profession}</i> : <i>(Profession)</i>}</code>
                    <code className='bg-slate-100 w-fit px-2 py-1  rounded-md'>{meeting.receiver.email}</code>

                    <div className="flex gap-2 mb-2">
                        <button title="Profile" onClick={() => window.open(`/users/${meeting.receiver._id}`)}>
                            <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-gray-200 hover:bg-green-300 sm:mx-0 sm:h-10 sm:w-10 hover:drop-shadow-md">
                                <CgProfile /> 
                            </div>
                        </button>
                        <button title="Message">
                            <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-gray-200 hover:bg-green-300 sm:mx-0 sm:h-10 sm:w-10 hover:drop-shadow-md">
                                <FaRegMessage />
                            </div>
                        </button>
                        <button title="Call">
                            <div className={`flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-gray-200 ${meeting.status === 'accepted' ? 'hover:bg-green-300' : 'hover:bg-red-300' }  sm:mx-0 sm:h-10 sm:w-10 hover:drop-shadow-md`}>
                                <FiPhoneCall />
                            </div>
                        </button>
                    </div>

                </div>
            </div>


            <div className="flex flex-col gap-4 py-5 px-10 shadow-lg ml-4 rounded-lg">
                {meeting.status === 'pending' && (
                    <div className="flex pt-4">
                        <p className="text-sm text-orange-300 truncate ml-1">
                            ({meeting.status})
                        </p>
                        <p className="text-sm text-gray-500 ml-2">
                            Waiting for <strong>{meeting.receiver.firstName} {meeting.receiver.lastName} </strong> to approve your meeting.
                        </p>
                    </div>    
                )}

                {meeting.status === 'accepted' && (
                    <div className="flex pt-4">
                        <p className="text-sm text-green-400 truncate ml-1">
                            ({meeting.status})
                        </p>
                        <p className="text-sm text-gray-500 ml-2">
                            <strong>{meeting.receiver.firstName} {meeting.receiver.lastName} </strong> accepted your meeting.
                        </p>
                    </div>    
                )}

                {meeting.status === 'declined' && (
                    <div className="flex pt-4">
                        <p className="text-sm text-red-400 truncate ml-1">
                            ({meeting.status})
                        </p>
                        <p className="text-sm text-gray-500 ml-2">
                            <strong>{meeting.receiver.firstName} {meeting.receiver.lastName} </strong> declined your meeting.
                        </p>
                    </div>    
                )}

                <hr />
                <div className="flex flex-col gap-2">
                    
                    <div className="flex flex-row gap-2">
                        <h2 className="font-semibold">Date:</h2> 
                        <p className="text-gray-500">{new Date(meeting.date).toISOString().split('T')[0]}</p>
                        <p className="text-xs italic">(yyyy-mm-dd)</p>
                    </div>
                    <div className="flex flex-row gap-2">
                        <h2 className="font-semibold">Time:</h2>
                        <p className="text-gray-500">{meeting.time}</p>
                    </div>
                    <div className="flex flex-row gap-2">
                        <h2 className="font-semibold">Duration:</h2>
                        <p className="text-gray-500">30 min</p>
                    </div>
                    {meeting.status === 'accepted' ? 
                        (
                            <div className="flex flex-row gap-2">
                                <h2 className="font-semibold">Meeting link:</h2>
                                <a href={meeting.meetingLink} className="text-blue-500 underline hover:text-blue-800" target="_blank">{meeting.meetingLink}</a>
                            </div>
                        ) : null
                    } 
                             
                </div>
                <hr />

                <div className="text-neutral-400 text-sm mt-4">
                    <u className="cursor-pointer" onClick={guidelinesModal.onOpen}>Read more</u> about our guidelines or contact us if you have questions.
                </div>
            </div>    
            
                       
                
        </>
                    
                );
            }
             
            export default MeetingContent;
