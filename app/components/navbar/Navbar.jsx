'use client';

import Container from "../Container";
import Logo from "./Logo";
import Search from "./Search";
import UserMenu from "./UserMenu";
import Categories from "./Categories";

import { useSession } from "next-auth/react";


const Navbar = () => {
    const { data: session, status } = useSession();

    console.log("session in navbar", session);

    return (
        <div className="fixed w-full bg-white z-10 shadow-sm">
            <div className="py-4 border-b-[1px]"> 
                <Container>
                    <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
                        <Logo />
                        <Search />
                        <UserMenu />
                    </div>
                    {session?.user.email}
                </Container>
            </div>
            <Categories />
        </div>    
    )
}


export default Navbar;