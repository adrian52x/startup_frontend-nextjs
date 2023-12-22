'use client'

import { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive'

import UserCard from '@/app/components/profile-components/UserCard';
import ConfirmedInfo from '@/app/components/profile-components/ConfirmedInfo';
import AboutUser from '@/app/components/profile-components/AboutUser';


const UserProfile = ({user}) => { 
    //const isSmallScreen = useMediaQuery({ query: '(max-width: 768px)' })

    const [isSmallScreen, setIsSmallScreen] = useState(false);
    useEffect(() => {
        // This code will run only on the client, after the component has mounted
        setIsSmallScreen(window.innerWidth <= 640);
    }, []);

    return (
        // <div className='w-full max-w-[1440px] md:mx-auto lg:px-20 md:px-10 sm:px-6'>
        //     <div>
        //         {user.firstName} {user.lastName}
        //     </div>
        //     <div>       
        //         {user.email}
        //     </div>
   
        // </div> 


        isSmallScreen ? (
            <section className='mt-10'>
                <div className='max-w-[400px] md:max-w-[1440px] mx-auto grid grid-cols-1'>
                <div className='max-w-[400px] h-[250px]'>
                    <UserCard user={user}/>
                </div>
                <div className='max-w-[400px] mt-8'>
                    <AboutUser user={user}/>
                </div>
                <div className='max-w-[400px] mt-8'>
                    <ConfirmedInfo user={user}/>
                </div>
                </div>
            </section>
          ) : (
            <section className='mt-10 mx-6'>
                <div className='max-w-[1280px] mx-auto grid grid-cols-[350px,1fr] gap-x-[70px]'>
                    <div className='grid grid-flow-row gap-y-[32px]'>
                        <div className='w-[350px] h-[235px]'>
                            <UserCard user={user}/>
                        </div>
                        <div className='w-[350px]'>
                            <ConfirmedInfo user={user}/>
                        </div>
                    </div>
                    <div className=' md:min-w-[450px] md:max-w-[740px]'>
                        <AboutUser user={user}/>
                    </div>
                </div>
            </section>
          )

        

        // <div className='max-w-[400px] md:max-w-[1440px] mx-auto lg:px-20 md:px-10 sm:px-6 grid grid-cols-1 md:grid-cols-[350px,1fr] md:gap-x-[70px]'>
        //     <div className='max-w-[400px] h-[265px]  md:h-[235px]  bg-gray-200'>A</div>
        //     <div className=' max-w-[400px]  md:min-w-[440px] md:max-w-[740px] mt-8 md:mt-0 bg-gray-200 md:order-2'>C<br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> sfdsf</div>
        //     <div className='w-full max-w-[400px] mt-8 md:mt-[32px] bg-gray-200 md:order-3'>B<br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> sfdsf</div>
        // </div>

       
    )

}


export default UserProfile;