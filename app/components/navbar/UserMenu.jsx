'use client';

import { useCallback, useState } from "react";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from 'react';

import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "../Avatar";
import MenuItem from "./MenuItem";
import useRegisterModal from "@/app/hooks/useRegisterModal";
import useLoginModal from "@/app/hooks/useLoginModal";
import { usePathname } from 'next/navigation';

import { signOut } from "next-auth/react";
//import { useSession } from "next-auth/react";

const UserMenu = ({ currentUser }) => {
    const router = useRouter();
    
    const pathname = usePathname();
    const isMainPage = pathname === '/';

    const registerModal = useRegisterModal();
    const loginModal = useLoginModal();

    const [isOpen, setIsOpen] = useState(false);

    const menuItemsRef = useRef();
    const menuRef = useRef();

    const toggleOpen = useCallback(() => {
        setIsOpen((value) => !value);
      }, []);

    useEffect(() => {
        const handleClickOutside = (event) => {
          if (menuItemsRef.current && !menuItemsRef.current.contains(event.target) &&
            (!menuRef.current || !menuRef.current.contains(event.target))) {
            setIsOpen(false);
          }
        };
    
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
          document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);  

    return ( 
        <div className="relative">
            <div className="flex flex-row items-center gap-3">
            <div 
                onClick={() => {
                    if (currentUser && currentUser.isMentor) {
                        router.push('/mentor-dashboard');
                    } else {
                        router.push('/getting-started');
                    }
                }} 
                className="hidden md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer"
                >
                {currentUser?.isMentor ? 'Mentor Dashboard' : 'Share your experience'}
            </div>

                <div onClick={toggleOpen} ref={menuRef} className="p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition">
                    <AiOutlineMenu />
                    <div className="hidden md:block">
                        <Avatar src={currentUser?.image || currentUser?.img} />
                    </div>
                    
                </div>

            </div>

            {isOpen && (
                <div className="absolute rounded-xl shadow-md w-[40vw] md:w-3/4 bg-white overflow-hidden right-0 top-12 text-sm">
                    <div ref={menuItemsRef} className="flex flex-col cursor-pointer">
                        {currentUser ? (
                        <>
                            {!isMainPage && (<MenuItem label="Main Page" onClick={() => router.push('/')}/>)}
                            <MenuItem label="Profile" onClick={() => router.push(`/users/${currentUser._id}`)}/>
                            <MenuItem label="My sessions" onClick={() => router.push('/meetings')}/>
                            <MenuItem label="Messages" disabled/>
                            
                            <hr />
                            <MenuItem label="Help Center" disabled/>
                            {currentUser?.isMentor ? (<MenuItem label="Mentor Dashboard" onClick={() => router.push('/mentor-dashboard')}/>) : (<MenuItem label="Share your experience" onClick={() => router.push('/getting-started')}/>)}
                            <hr />
                            <MenuItem label="Logout" onClick={() => signOut({ callbackUrl: '/' })}/>
                        </>
                        ) : (
                        <>
                            <MenuItem 
                            label="Login" 
                            onClick={loginModal.onOpen}
                            />
                            <MenuItem 
                            label="Sign up" 
                            onClick={registerModal.onOpen}
                            />
                            
                        </>
                        )}
                    </div>
                </div>
            )}

        </div>
    );
  }
   
  export default UserMenu;