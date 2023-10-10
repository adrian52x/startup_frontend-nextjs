'use client'

import Container from "@/app/components/Container";

const MentorClient = ({mentor, reservations = [],currentUser}) => { 

    return (
        <Container>
            <div>Mentor Client-Side: <br /> Email: {mentor.email}</div>

        </Container>



        
    )

}


export default MentorClient;