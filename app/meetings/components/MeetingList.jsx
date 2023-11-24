'use client';

import MeetingBox from "./MeetingBox";



const MeetingList = ({  meetings }) => {
    console.log(meetings);
  return ( 
    
    <aside className="

        inset-y-0 
        lg:pb-0
        lg:left-20 
        lg:w-80 
        lg:block
        border-r 
        border-gray-200
        block 
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