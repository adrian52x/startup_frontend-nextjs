
import getMentors from "./actions/getMentors";
import Container from "./components/Container";
import MentorCard from "./components/mentors/MentorCard";
import EmptyState from "./components/EmptyState";

import { Suspense, lazy } from 'react'
import Loading from "./loading";

const MentorsDisplay = lazy(() => import('./components/mentors/MentorsDisplay'))

// export default async function Home({ searchParams }) {

//     const mentors = await getMentors(searchParams);
//     console.log("searchParams", searchParams);

//     if(mentors?.length === 0 || mentors === null){
//         return (

//             <EmptyState showReset/>
            
//         )
//     }

//     return (
//     <Container>
//         <div className="pt-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8">
//             {mentors.map((mentor) => (
//                 <MentorCard
//                     key={mentor._id}
//                     data={mentor}
//                 />
//             ))}
//         </div>
//     </Container>
//   )
// }


export default async function Home() {

    return (
        //<Loading/>
    
    <Suspense fallback={<Loading/>}>
          <MentorsDisplay/>
    </Suspense>
    )
}
