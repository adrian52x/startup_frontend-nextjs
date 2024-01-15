'use client';


const MenuItem = ({ onClick, label, disabled}) => {
  return ( 
    <div 
        onClick={onClick} 
        className={`px-4 py-3 hover:bg-neutral-100 transitionfont-semibold ${disabled ? "opacity-50" : ''} `}
    >
        {label}
    </div>
   );
}
 
export default MenuItem;