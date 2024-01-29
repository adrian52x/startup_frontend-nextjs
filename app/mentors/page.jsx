import { Suspense, lazy } from 'react'
import Loading from "@/app/loading.jsx"

const MentorsDisplay = lazy(() => import('@/app/components/mentors/MentorsDisplay'))

const AllMentors = async () => {
 
  
    return (
        <div className='pt-28'>

        
            <Suspense fallback={<Loading/>}>
                <MentorsDisplay/>
            </Suspense>
        </div>
     );
  }
   
  export default AllMentors;