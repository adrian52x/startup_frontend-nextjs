'use client';

import { useRouter } from "next/navigation";

import Button from "./Button";
import Heading from "./Heading";


const EmptyState = ({
  title = "No exact matches",
  subtitle = "Try changing or removing some of your filters.",
  showReset,
  customHeight,
}) => {
  const router = useRouter();

  return ( 
    <div 
      className={`
        ${customHeight || 'h-[70vh]'}
        flex 
        flex-col 
        gap-2 
        justify-center 
        items-center 
      `}
    >
      <Heading
        center
        title={title}
        subtitle={subtitle}
      />
      <div className="w-48 mt-4">
        {showReset && (
          <Button
            outline
            label="Remove all filters"
            onClick={() => router.push('/mentors')}
          />
        )}
      </div>
    </div>
   );
}
 
export default EmptyState;