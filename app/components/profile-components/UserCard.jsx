'use client'

import Avatar from "../Avatar";


const UserCard = ({user}) => { 
    return ( // use grid here
        <>
            <div className="w-full h-full shadow-2xfull rounded-3xl py-8 px-6 flex flex-row items-center justify-center"> 
                <div className="w-[200px] ">
                    <Avatar src={user.img} width={104} height={104}/>
                </div>
                
                <div className="text-sm font-semibold font-sans">Member since: xx.xx.xx </div>
            </div>
        </>

    )

}


export default UserCard;