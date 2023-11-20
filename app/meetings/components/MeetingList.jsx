'use client';

import Container from "@/app/components/Container";
import MeetingBox from "./MeetingBox";


const MeetingList = ({  meetings }) => {
    console.log(meetings);
  return ( 
    
    <aside className="
         
        inset-y-0 
        pb-20
        lg:pb-0
        lg:left-20 
        lg:w-80 
        lg:block
        overflow-y-auto 
        border-r 
        border-gray-200
        block w-full left-0
      "
    >
      <div className="px-5">
        <div className="flex-col">
          <div 
            className="
              text-2xl 
              font-bold 
              text-neutral-800 
              py-4
            "
          >
            Sessions
          </div>
        </div>
        {meetings.map((meeting) => (
          <MeetingBox
            key={meeting._id}
            data={meeting}
          />
        ))}
      </div>
    </aside>
  );
}
 
export default MeetingList;