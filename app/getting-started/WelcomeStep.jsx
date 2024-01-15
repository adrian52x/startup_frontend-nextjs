'use client';

import Container from "../components/Container";
import Image from "next/image";
import { useState, useEffect } from 'react';
import Button from "../components/Button";
import { useRouter } from "next/navigation";

const WelcomeStep = ({  }) => {

    const router = useRouter();
    const [text, setText] = useState('Empower others');
    const [show, setShow] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setShow(false);
            setTimeout(() => {
                setText(prevText => prevText === 'Empower others' ? 'Earn Money' : 'Empower others');
                setShow(true);
            }, 500);
        }, 1500);

        return () => clearInterval(interval); // Clean up on component unmount
    }, []);

    return ( 
        <>
            <Container>
                <div className="flex justify-center items-center mx-20 " style={{ height: 'calc(100vh - 140px)' }}>
                    <div className="flex-1 flex flex-col justify-center space-y-4">
                        <h2 className='text-5xl text-gray-900'>Join us to:</h2>
                        <p className='text-5xl text-gray-900'>Share your experience and</p>
                        <p className={`text-5xl text-gray-900 transition-opacity duration-500 ${show ? 'opacity-100' : 'opacity-0'}`}><strong>{text}</strong></p>
                        <Button customWidth={"w-[200px]"} label="Get Started"  />
                    </div>
                    <div className="flex-1 flex justify-center items-center">
                        <Image width="600" height="600" className="shadow-2xfull rounded-3xl" src='/images/ask-share-getting-started.jpg' alt="welcomestep" />
                    </div>
                </div>
            </Container>
        </>
                    
    );
}
export default WelcomeStep;        