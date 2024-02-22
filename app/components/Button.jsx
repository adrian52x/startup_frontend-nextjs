'use client';


const Button = ({ 
  label, 
  onClick, 
  disabled, 
  outline,
  small,
  acceptBtn,
  declineBtn,
  icon: Icon,
  customWidth,
}) => {
  return ( 
    <button
      disabled={disabled}
      onClick={onClick}
      className={`
        relative
        disabled:opacity-70
        disabled:cursor-not-allowed
        rounded-lg
        hover:opacity-80
        transition
        px-1
        ${customWidth || 'w-full'}
        ${outline ? 'bg-white' : 'bg-orange-400'}
        ${outline ? 'border-black' : 'border-orange-400'}
        ${outline ? 'text-black' : 'text-white'}
        ${small ? 'text-sm' : 'text-md'}
        ${small ? 'py-1' : 'py-3'}
        ${small ? 'font-light' : 'font-semibold'}
        ${small ? 'border-[1px]' : 'border-2'}
        ${acceptBtn ? 'hover:bg-green-100' : ''}
        ${declineBtn ? 'hover:bg-red-100' : ''}
      `}
    >
      {Icon && (
        <Icon
          size={24}
          className="
            absolute
            left-4
            top-3
          "
        />
      )}
      {label}
    </button>
   );
}
 
export default Button;