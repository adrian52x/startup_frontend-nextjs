'use client';

import { BiSearch } from 'react-icons/bi';

const Search = ({  }) => {
    return ( 
        <div className="border-[1px] w-full  md:w-auto lg:w-auto xl:w-80 py-2 rounded-full shadow-sm hover:shadow-md transition cursor-pointer">
            <div className="flex flex-row items-center justify-between">
                <div className="text-sm font-semibold px-6">
                    Search
                </div>

                <div className="pl-24 pr-2">
                    <div className="p-2 bg-rose-500 rounded-full text-white"> 
                        <BiSearch size={18} />
                    </div>
                </div>

            </div>
        </div>
    );
  }
   
  export default Search;