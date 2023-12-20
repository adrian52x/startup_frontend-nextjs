'use client'

import React, { useState } from 'react';


const UserProfile = ({user}) => { 


    return (
        <div className='w-full max-w-5xl mx-auto'>
            <div>
                {user.firstName} {user.lastName}
            </div>
            <div>       
                {user.email}
            </div>
   
        </div> 
    )

}


export default UserProfile;