'use client';
import Container from "../Container";
import Avatar from "../Avatar";
import TypingEffect from "./TypingEffect";
import { useRouter } from 'next/navigation';
import Marquee from "react-fast-marquee";

const MarqueeCard = ({ data }) => { 
    const router = useRouter();

    return ( 
        <a 
            href={`/mentors/${data._id}`}
            target="_blank" 
            rel="noopener noreferrer"
            className="w-[200px] h-[200px] bg-white hover:bg-neutral-100 shadow-lg rounded-lg p-4 flex flex-col items-center space-y-2 mb-4 mx-3 cursor-pointer border-b-2 border-t-2 border-orange-300">
                
            <Avatar  src={data.img} width={64} height={64} />
            <h2 className="text-xl font-bold">{data.firstName + ' ' + data.lastName}</h2>
            <p className="text-base text-gray-500 text-center">{data.profession}</p>
        
        </a>
    )
    //1-on-1 Meetings
    //With experienced
}

const HeroSection = ({mentors}) => {
    const phrases = ['1-on-1 Sessions.', 'Personalized Job Shadowing.'];
    const router = useRouter();
    //console.log("mentors", mentors);
    return (
        <Container>
            <div className="mt-16 mb-16 flex flex-col items-center md:justify-center  space-y-2 py-2">
                <span className="mb-6 text-cyan-900">Discover answers, share knowledge, and connect with a community eager to learn and grow.</span>


                <span className="text-cyan-900 text-5xl font-bold">Discover Careers through</span>
                <div className="text-cyan-900 text-5xl font-bold md:flex space-x-2">  
                    <TypingEffect phrases={phrases}/>
                </div>

                <br />

                <button className="rounded-lg shadow-2xfull w-[350px] py-3 px-4 bg-gray-300 text-neutral-600 hover:bg-orange-300 hover:text-slate-700 transition  font-semibold"
                    onClick={() => router.push('/mentors')}
                > Browse all mentors </button>
                
            </div>
            
            {mentors?.length > 0 ? (
                <Marquee gradient="true" gradientColor="white" gradientWidth={50}>
                {mentors.map((mentor) => (
                    <MarqueeCard
                    key={mentor._id}
                    data={mentor}
                    />
                ))}
                </Marquee>
            ) : (
                <p className="text-center text-xl text-rose-300">Failed to load data. Please try again later.</p>
            )}
           
            
        </Container> 

    );
  };
  
export default HeroSection;

