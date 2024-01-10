'use client';

import getMentors from "@/app/actions/getMentors";
import EmptyState from "../EmptyState";
import MentorCard from "./MentorCard";
import Container from "../Container";

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation'
import LoadingMentorsScreen from "./LoadingMentorsScreen";

const MentorsDisplay = () => {

    const [mentors, setMentors] = useState([]);
    const [loading, setLoading] = useState(true);
    const searchParams = useSearchParams();
    const params = Object.fromEntries(searchParams);


    useEffect(() => {
        async function fetchMentors() {
            const data = await getMentors(params);
            setMentors(data);
            setLoading(false);
        }

        fetchMentors();
        
    }, [searchParams]);

    if (loading) {
        return ( 
            <Container>
                <LoadingMentorsScreen /> 
            </Container>
        );
    }

    if(mentors?.length === 0 || mentors === null){
        return <EmptyState showReset/>;
    }

    return (
    <Container>
        <div className="pt-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8">
            {mentors.map((mentor) => (
                <MentorCard
                    key={mentor._id}
                    data={mentor}
                />
            ))}
        </div>
    </Container>
  )
}

export default MentorsDisplay;