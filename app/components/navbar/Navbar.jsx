'use client';

import Container from "../Container";
import Logo from "./Logo";
import Search from "./Search";
import UserMenu from "./UserMenu";
import UserMenuMentor from "./UserMenu-Mentor";
import Categories from "./Categories";

import { usePathname, useRouter  } from 'next/navigation';


//import { useSession } from "next-auth/react";


const Navbar = ({ currentUser }) => {
    const router = useRouter();
    const pathname = usePathname();

    const isMeetingsTab = pathname === '/mentor-dashboard';
    const isCalendarTab = pathname === '/mentor-dashboard/calendar';
    const isOtherTab = pathname === '/mentor-dashboard/other';


    //const { data: session, status } = useSession();
    console.log("currentUser", currentUser);


    return (
        <div className="fixed w-full bg-white z-10 shadow-sm">
            <div className="py-4 border-b-[1px]"> 
                <Container>
                    {!pathname.startsWith('/mentor-dashboard') ? (
                        <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
                            <Logo />
                            <Search />
                            <UserMenu currentUser = {currentUser}/>
                        </div>
                    ) : (
                        <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
                            <Logo />
                            <div className="flex space-x-4">
                                <div onClick={() => router.push('/mentor-dashboard')}
                                    className={`
                                    border-b-2 px-3 py-2 
                                    transition cursor-pointer hover:border-b-red-300 text-sm
                                    ${isMeetingsTab ? 'border-b-neutral-800' : 'border-transparent'}`}>
                                    Meetings
                                </div>
            
                                <div onClick={() => router.push('/mentor-dashboard/calendar')}
                                    className={`
                                    border-b-2 px-3 py-2 
                                    transition cursor-pointer hover:border-b-red-300 text-sm
                                    ${isCalendarTab ? 'border-b-neutral-800' : 'border-transparent'}`}>
                                    Calendar
                                </div>

                                <div 
                                    className={`
                                    border-b-2 px-3 py-2 
                                    transition cursor-pointer hover:border-b-red-300 text-sm
                                    ${isOtherTab ? 'border-b-neutral-800' : 'border-transparent'}`}>
                                    Other
                                </div>

                            </div>
                            <UserMenuMentor currentUser = {currentUser}/>
                        </div>
                    )}
                    
                </Container>
            </div>
            <Categories />
        </div>    
    )
}


export default Navbar;