'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useCallback, useMemo } from "react";
//import { format } from 'date-fns';


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
      onClick={() => router.push(`/listings/${data._id}`)} 
      className="col-span-1 cursor-pointer group"
    >
        <div className="flex flex-col gap-2 w-full">
            <div className="aspect-square w-full relative overflow-hidden rounded-xl">
                <Image fill className="object-cover h-full w-full group-hover:scale-110 transition" src={'/images/placeholder.jpg'} alt="Listing" />
                    <div className="absolute top-3 right-3">
                        add fav
                    </div>
                </div>

                <div className="font-semibold text-lg">
                {data.firstName}
                </div>

                <div className="font-light text-neutral-500">
                text
                </div>

                <div className="flex flex-row items-center gap-1">
                <div className="font-semibold">
                    $ price
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