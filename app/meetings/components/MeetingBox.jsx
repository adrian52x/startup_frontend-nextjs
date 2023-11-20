import { useRouter } from "next/navigation";
import Avatar from "@/app/components/Avatar";
import { useCallback, useState } from "react";

const MeetingBox = ({ data }) => {

        return (
            <>
                <div 
                    //onClick={handleClick} 
                    className="w-full relative flex items-center space-x-3 bg-white p-3 hover:bg-neutral-100 rounded-lg transition cursor-pointer border"
                >
                    <Avatar src={data.receiver.img} />
                    <div className="min-w-0 flex-1">
                        <div className="focus:outline-none">
                            <span className="absolute inset-0" aria-hidden="true" />
                            <div className="flex justify-between items-center mb-1">
                                <p className="text-sm font-medium text-gray-900">
                                    {data.receiver.firstName + ' ' + data.receiver.lastName}
                                </p>
                            </div>
                            <p className="text-sm text-gray-500 truncate">
                                {data.receiver.email}
                            </p>
                            <p className="text-sm text-gray-500 truncate pt-4">
                                {data.status}
                            </p>
                        </div>
                    </div>
                </div>
            </>
        );
    }
   
  export default MeetingBox;