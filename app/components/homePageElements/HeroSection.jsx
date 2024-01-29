'use client';
import Container from "../Container";
import Avatar from "../Avatar";
import TypingEffect from "./TypingEffect";
import { useRouter } from 'next/navigation';
import Marquee from "react-fast-marquee";

const MarqueeCard = ({ data }) => { 
    const router = useRouter();

    return (
        <div onClick={() => router.push(`/mentors/${data._id}`)} 
        className="w-[200px] h-[200px] bg-white shadow-lg rounded-lg p-4 flex flex-col items-center space-y-2 mb-4 mx-3 cursor-pointer">
            <Avatar  src={data.img} width={64} height={64} />
            <h2 className="text-xl font-bold">{data.firstName + ' ' + data.lastName}</h2>
            <p className="text-base text-gray-500 text-center">{data.profession}</p>
        </div>
    )
    
}

const HeroSection = ({mentors}) => {
    const phrases = ['specialists.', 'students.', 'professionals.'];
    const router = useRouter();
    console.log("mentors", mentors);
    return (
        <Container>
            <div className="mt-16 mb-16 flex flex-col items-center justify-center  space-y-2 py-2">
                <span className="mb-6 text-cyan-900">Learn a new skill, launch a project, land your dream career.</span>


                <span className="text-cyan-900 text-5xl font-bold">1-on-1 Meetings</span>
                <div className="text-cyan-900 text-5xl font-bold md:flex space-x-2">
                    <h1>With experienced</h1>   
                    <TypingEffect phrases={phrases}/>
                </div>

                <br />

                <button className="rounded-lg shadow-2xfull w-[350px] py-3 px-4 bg-gray-300 text-neutral-600 hover:bg-rose-300 hover:text-slate-700 transition  font-semibold"
                    onClick={() => router.push('/mentors')}
                > Browse all mentors </button>
                
            </div>
            <Marquee gradient="true" gradientColor="white">
                {mentors.map((mentor) => (
                    <MarqueeCard
                        key={mentor._id}
                        data={mentor}
                    />
                ))}
            </Marquee>
           
            
        </Container> 

    );
  };
  
export default HeroSection;

