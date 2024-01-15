
export default function LoadingMentorsScreen() {
    return (
        <>
            <span className="pt-30 flex justify-center items-center">
            Loading...
            </span>
            <div className="pt-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8">
                {[...Array(10).keys()].map((i) => (
                    <div key={i} className="col-span-1 cursor-pointer group shadow-full rounded-2xl overflow-hidden p-3"> 
                        <div className="flex flex-col gap-2 w-full">
                            <div 
                                className="inline-block animate-pulse bg-neutral-200 aspect-square w-full relative overflow-hidden rounded-xl flex items-center justify-center"
                                style={{ 
                                    animationDelay: `${i * 0.05}s`,
                                    animationDuration: '1s',
                                }}
                            > {i === 0 && 'Loading...'} 
                            
                            </div>
                            <div 
                                className="inline-block animate-pulse h-5 bg-neutral-200 aspect-square w-full relative overflow-hidden rounded-xl"
                                style={{ 
                                    animationDelay: `${i * 0.05}s`,
                                    animationDuration: '1s',
                                }}
                            />
                        </div>    
                    </div>
                ))}

            </div>
        </>    
    )
}