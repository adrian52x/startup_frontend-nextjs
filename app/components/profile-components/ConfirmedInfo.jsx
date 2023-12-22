'use client'

import { MdDone } from "react-icons/md";


const ConfirmedInfo = ({user}) => { 
    return (
        <>
            <div className="w-full h-full border rounded-3xl py-8 px-6">
                <div className="text-lg font-semibold font-mono">
                    {user.firstName}`s confirmed information
                </div> 

                <br />

                <div className="space-y-2">
                    <div className="flex space-x-2">
                        <MdDone size={25}/>
                        <div>Verified Professional</div>
                    </div>
                    <div className="flex space-x-2">
                        <MdDone size={25}/>
                        <div>Email address </div>
                    </div>
                    
                    <hr />
                </div>
            
            </div>
        </>

    )

}


export default ConfirmedInfo;