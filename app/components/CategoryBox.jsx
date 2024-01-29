'use client';

import qs from 'query-string';
import { useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

const CategoryBox = ({ icon:Icon, label, selected,}) => {


    // for query
    const router = useRouter();
    const params = useSearchParams();

    const handleClick = useCallback(() => {
        let currentQuery = {};
    
        if (params) {
            currentQuery = qs.parse(params.toString())
        }

        const updatedQuery = {
        ...currentQuery,
        category: label
        }

        if (params?.get('category') === label) {
            delete updatedQuery.category;
        }

        const url = qs.stringifyUrl({
        url: '/mentors',
        query: updatedQuery
        }, { skipNull: true });

        router.push(url);
    }, [label, router, params]);
    // for query

    return ( 
        <div onClick={handleClick} className={`
            flex 
            flex-col 
            items-center 
            justify-center 
            gap-2
            p-3
            border-b-2
            hover:text-neutral-800
            transition
            cursor-pointer
            hover:border-b-red-300
            ${selected ? 'border-b-neutral-800' : 'border-transparent'}
            ${selected ? 'text-black-900' : 'text-neutral-500'}
        `}>


            <Icon size={24} />
            <div className="font-medium text-sm">
                {label}
            </div>

        </div>
    );
}
 
export default CategoryBox;