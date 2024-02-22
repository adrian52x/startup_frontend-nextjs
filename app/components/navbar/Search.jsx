'use client';

import { useState } from 'react';
import { useCallback } from "react";
import qs from 'query-string';
import { useRouter, useSearchParams } from 'next/navigation';
import { BiSearch } from 'react-icons/bi';

import { AiOutlineClose } from 'react-icons/ai';

const Search = () => {

    const [searchValue, setSearchValue] = useState('');
    const router = useRouter();
    const params = useSearchParams();


    const handleInputChange = (event) => {
        setSearchValue(event.target.value);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const handleSearch = useCallback(() => {

        let currentQuery = {};
        if (params) {
            currentQuery = qs.parse(params.toString());
        }
        
        const updatedQuery = {
            ...currentQuery,
            search: searchValue.trim()
        };

        if (searchValue.trim() === '') {
            if (params?.get('search')) {
                delete updatedQuery.search;

                const url = qs.stringifyUrl({ url: '/mentors', query: updatedQuery }, { skipNull: true });
                router.push(url);
            }
        } else {
            
            const url = qs.stringifyUrl({ url: '/mentors', query: updatedQuery }, { skipNull: true });
            router.push(url);
        }

    }, [searchValue, router, params]); 


    const handleClearText = useCallback(() => {

        setSearchValue('');

        let currentQuery = {};
        if (params) {
            currentQuery = qs.parse(params.toString());
        }
        
    
        if (params?.get('search')) {
            delete currentQuery.search;
            const url = qs.stringifyUrl({ url: '/mentors' , query: currentQuery}, { skipNull: true });
            router.push(url);
        }
        

    }, [searchValue, router, params]);


    return ( 
        <div className="border-[1px] w-full h-[50px] sm:w-[350px] md:w-[400px] lg:w-[500px] xl:w-[600px] py-2 rounded-full shadow-sm hover:shadow-md transition cursor-pointer">
            <div className="flex flex-row items-center justify-between">
                <div className="flex-grow font-semibold px-6 ">
                    <input
                        type="text"
                        placeholder="Search for a specialist"
                        className="w-full h-full py-1 pr-8 pl-3 rounded-full bg-white focus:outline-none  focus:border-transparent"
                        value={searchValue}
                        onChange={handleInputChange}
                    />
                </div>

                <div className="flex flex-row pr-2">
                    {searchValue && (
                        <div className="p-2 rounded-full" onClick={handleClearText}>
                            <AiOutlineClose size={18} />
                        </div>
                    )}
                        
                    <div className="p-2 bg-orange-400 rounded-full text-white" onClick={handleSearch}> 
                        <BiSearch size={18} />
                    </div>
                </div>

            </div>
        </div>
    );
}
   
  export default Search;