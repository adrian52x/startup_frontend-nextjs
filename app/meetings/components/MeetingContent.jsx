'use client';

import Avatar from "@/app/components/Avatar";
import { FaRegMessage } from "react-icons/fa6";
import { FiPhoneCall } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { GoStar } from "react-icons/go";


const MeetingContent = ({ meeting }) => {
    return ( 
        <>
            <div className='flex items-start py-12 pl-24 gap-6 mt-8'>
                <Avatar src={meeting.receiver.img} width={60} height={60}/>
           
                <div className="flex flex-col gap-3">
                    
                    <h2 className='text-5xl text-gray-900'>{meeting.receiver.firstName}<strong className='ml-3'>{meeting.receiver.lastName}</strong></h2>
                    <div className="flex gap-3">
                        <GoStar /> <GoStar /> <GoStar /> <GoStar /> <GoStar />
                    </div>
                    {meeting.receiver.profession ? <i>{meeting.receiver.profession}</i> : <i>(Profession)</i>}
                    <code className='bg-slate-100 w-fit px-2 py-1  rounded-md'>{meeting.receiver.email}</code>

                    <div className="flex gap-2 mb-2">
                        <button>
                            <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-gray-200 hover:bg-green-300 sm:mx-0 sm:h-10 sm:w-10 hover:drop-shadow-md">
                                <CgProfile /> 
                            </div>
                        </button>
                        <button>
                            <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-gray-200 hover:bg-green-300 sm:mx-0 sm:h-10 sm:w-10 hover:drop-shadow-md">
                                <FaRegMessage />
                            </div>
                        </button>
                        <button>
                            <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-gray-200 hover:bg-green-300 sm:mx-0 sm:h-10 sm:w-10 hover:drop-shadow-md">
                                <FiPhoneCall />
                            </div>
                        </button>
                    </div>

                </div>
            </div>
        </>
        
    );
}
 
export default MeetingContent;