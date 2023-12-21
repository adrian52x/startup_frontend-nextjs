'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useCallback, useMemo } from "react";
//import { format } from 'date-fns';

import { IoTimerOutline } from "react-icons/io5";

import Button from "../Button";



const MentorCard = ({
  data,
  reservation,
  onAction,
  disabled,
  actionLabel,
  actionId = '',
  currentUser,
}) => {
  const router = useRouter();

  //const { getByValue } = useCountries();

  //const location = getByValue(data.locationValue);

  const handleCancel = useCallback(
    (e) => {
    e.stopPropagation();

    if (disabled) {
      return;
    }

    onAction?.(actionId)
  }, [disabled, onAction, actionId]);


//   const price = useMemo(() => {
//     if (reservation) {
//       return reservation.totalPrice;
//     }

//     return data.price;
//   }, [reservation, data.price]);

//   const reservationDate = useMemo(() => {
//     if (!reservation) {
//       return null;
//     }
  
//     const start = new Date(reservation.startDate);
//     const end = new Date(reservation.endDate);

//     return `${format(start, 'PP')} - ${format(end, 'PP')}`;
//   }, [reservation]);


  return (
    <div 
      onClick={() => router.push(`/mentors/${data._id}`)} 
      className="col-span-1 cursor-pointer group shadow-full rounded-2xl overflow-hidden p-3"
    >
        <div className="flex flex-col gap-2 w-full">
                <div className="aspect-square w-full relative overflow-hidden rounded-xl">
                    <Image fill className="object-cover h-full w-full group-hover:scale-110 transition" src={data.img ? data.img : '/images/placeholder.jpg'} alt="Mentor" />
                      <div className="absolute top-3 right-3">
                          {/* add fav */}
                      </div>
                </div>

                <div className="font-semibold text-lg">
                  {data.firstName} {data.lastName}
                </div>

                <code className="font-light text-neutral-500">
                  {data.profession}
                </code>

                <div className="font-light text-neutral-500 text-xs">
                  {data.category.join(", ")}
                </div>

                <div className="flex flex-row items-center gap-1">
                  <IoTimerOutline  className="text-lg" />
                  <p className="text-sm text-gray-500 truncate ml-1">
                    30 min -
                  </p> 
                  <div className="font-semibold">
                      {data.price ? data.price : "N/A"} €
                  </div>
                </div>
            
            {onAction && actionLabel && (
                
                <Button
                    disabled={disabled}
                    small
                    label={actionLabel} 
                    onClick={handleCancel}
                />
            )} 
        </div>
    </div>
   );
}
 
export default MentorCard;