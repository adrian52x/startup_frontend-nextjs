'use client';

import { useCallback, useState } from "react";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from 'react';

import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "../Avatar";
import MenuItem from "./MenuItem";
import useRegisterModal from "@/app/hooks/useRegisterModal";
import useLoginModal from "@/app/hooks/useLoginModal";

import { signOut } from "next-auth/react";
//import { useSession } from "next-auth/react";

const UserMenuMentor = ({ currentUser }) => {
    const router = useRouter();
    //const { data: session, status } = useSession();

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
        <div className="relative ">
            

                <div onClick={toggleOpen} ref={menuRef} className="p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition">
                    <AiOutlineMenu />
                    <div className="hidden md:block">
                        <Avatar src={currentUser?.image || currentUser?.img} />
                    </div>
                    
                </div>

            

            {isOpen && (
                <div className="absolute rounded-xl shadow-md w-[200px] bg-white overflow-hidden right-0 top-12 text-sm">
                    <div ref={menuItemsRef} className="flex flex-col cursor-pointer">
                        {currentUser ? (
                        <>
                            <MenuItem label="Mentor profile" disabled/>
                            <MenuItem label="Account" disabled/>
                            <MenuItem label="Messages" disabled/>
                            <hr />
                            <MenuItem label="Help Center" disabled/>
                            <MenuItem label="Switch to Main Page" onClick={() => router.push('/')}/>
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
   
  export default UserMenuMentor;