'use client';

import CategoryBox from "../CategoryBox";
import Container from "../Container";
import categories from "@/app/data-services/categories";

import { usePathname, useSearchParams } from 'next/navigation';


// hide categories if not main page ! (video 3:00:00)
const Categories = () => {

    const params = useSearchParams();
    const category = params?.get('category');
    const pathname = usePathname();
    const isMentorsPage = pathname === '/mentors';

    if (!isMentorsPage) {
        return null;
    }


    return (
        <div className="shadow"> 
        <Container>
            <div
            className="
                pt-2
                flex 
                flex-row 
                items-center 
                justify-between
                overflow-x-auto
            "
            >
                {categories.map((item) => 
                
                <CategoryBox key={item.label}  label={item.label} icon={item.icon} selected={category === item.label} />
                
                )}

            </div>
        </Container>
        </div>
  )
}

export default Categories;