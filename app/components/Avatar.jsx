'use client';

import Image from "next/image";

const Avatar = ({ src , width = 30, height = 30 }) => {
  return ( 
    <Image 
      className="rounded-full" 
      height={height}
      width={width}
      alt="Avatar" 
      src={src || '/images/placeholder.jpg'}
    />
   );
}
 
export default Avatar;