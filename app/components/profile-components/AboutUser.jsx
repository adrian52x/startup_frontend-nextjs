'use client'


const AboutUser = ({user}) => { 
    return (
        <>
            <div className="w-full h-full  rounded-3xl">
                <div className="text-3xl font-bold font-mono ">
                    About {user.firstName}
                </div>
                <div>  
                    <br />
                    <br />
                    [ Page still in development... ]
                </div>
            </div>
        </>

    )

}


export default AboutUser;