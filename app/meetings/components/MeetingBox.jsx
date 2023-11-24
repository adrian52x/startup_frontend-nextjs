import { useRouter, useSearchParams } from "next/navigation";
import Avatar from "@/app/components/Avatar";
import { useCallback, useState } from "react";
import qs from 'query-string';

import { TbProgressCheck } from "react-icons/tb";
import { GoQuestion } from "react-icons/go";
import { TbProgressX } from "react-icons/tb";

import { IoTimerOutline } from "react-icons/io5";
import { FaRegCalendarAlt } from "react-icons/fa";

const MeetingBox = ({ data }) => {
    const router = useRouter();
    const params = useSearchParams();

    const handleClick = useCallback(() => {
        let currentQuery = {};
    
        if (params) {
            currentQuery = qs.parse(params.toString())
        }

        const updatedQuery = {
        ...currentQuery,
        meeting: data._id
        }

        if (params?.get('meeting') === data._id) {
            delete updatedQuery.meeting;
        }

        const url = qs.stringifyUrl({
        url: '/meetings',
        query: updatedQuery
        }, { skipNull: true });

        router.push(url);
    }, [data._id, router, params]);


        return (
            <>
                <div 
                    onClick={handleClick}
                    className={`w-full relative flex items-center space-x-3 p-3 mb-4 shadow-lg  rounded-lg transition cursor-pointer border ${data._id === params.get('meeting') ? 'bg-green-100' : 'bg-white'}`}
                >
                    <Avatar src={data.receiver.img} />
                    <div className="min-w-0 flex-1">
                        <div className="focus:outline-none">
                            <span className="absolute inset-0" aria-hidden="true" />
                            <div className="flex justify-between items-center mb-1">
                                <strong className="text-sm  text-gray-900">
                                    {data.receiver.firstName + ' ' + data.receiver.lastName}
                                </strong>
                            </div>


                            <div className="flex">
                                <FaRegCalendarAlt  className="text-lg" />
                                <p className="text-sm text-gray-500 truncate ml-1">
                                    {new Date(data.date).toISOString().split('T')[0]} | {data.time}
                                </p>
                            </div>

                            <div className="flex">
                                <IoTimerOutline  className="text-lg" />
                                <p className="text-sm text-gray-500 truncate ml-1">
                                    30 min
                                </p>
                            </div>

                            {data.status === 'pending' && (
                                <div className="flex pt-4">
                                    <GoQuestion className="text-lg"/>
                                    <p className="text-sm text-orange-300 truncate ml-1">
                                        {data.status}
                                    </p>
                                </div>
                            )}
                            {data.status === 'accepted' && (
                                <div className="flex pt-4">
                                    <TbProgressCheck className="text-lg"/>
                                    <p className="text-sm text-green-500 truncate ml-1">
                                        {data.status}
                                    </p>
                                </div>
                            )}
                            {data.status === 'declined' && (
                                <div className="flex pt-4">
                                    <TbProgressX className="text-lg"/>
                                    <p className="text-sm text-red-500 truncate ml-1">
                                        {data.status}
                                    </p>
                                </div>
                            )}

                        </div>
                    </div>
                </div>
            </>
        );
    }
   
  export default MeetingBox;