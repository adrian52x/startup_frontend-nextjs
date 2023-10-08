'use client';
//import categories from "@/app/data-services/categories";
import CategoryBox from "../CategoryBox";
import Container from "../Container";
import categories from "@/app/data-services/categories";

const Categories = () => {
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
            
            <CategoryBox key={item.label}  label={item.label} icon={item.icon} selected={false} />
            
            )}

        </div>
      </Container>
    </div>
  )
}

export default Categories;