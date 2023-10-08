'use client';

const CategoryBox = ({ icon:Icon, label, selected,}) => {
    return ( 
        <div className={`
            flex 
            flex-col 
            items-center 
            justify-center 
            gap-2
            p-3
            border-b-2
            hover:text-neutral-800
            transition
            cursor-pointer
            ${selected ? 'border-b-neutral-800' : 'border-transparent'}
            ${selected ? 'text-neutral-800' : 'text-neutral-400'}
        `}>


            <Icon size={24} />
            <div className="font-medium text-sm">
                {label}
            </div>

        </div>
    );
}
 
export default CategoryBox;