import Person from "./person";
import FadeIn from "react-fade-in/lib/FadeIn";

export default function developersPage(){
    return(
        <div style={{ fontFamily: "Roboto Mono" }} className="bg-blue-900 h-full w-full flex flex-col justify-center items-center md:flex-row">

            <div className="bg-white w-full md:w-3/5 h-screen  md:h-screen gap-5 flex justify-evenly items-center flex-col">
                
                <div className="text-cyan-900 text-6xl font-bold">Our Team</div>
                <div className="w-full pl-14 pr-14 text-cyan-900 text-xl italic">
                    Our Team consists of members with several years of experience in mobile and web technologies. We are always experimenting with cutting edge technology to provide the best quality code output to our clients.
                </div>

                <div className="flex flex-row justify-evenly w-full"> 

                    <FadeIn transitionDuration={1200}>
                        <Person name="Zaid Saeed" img="/zaid.png" info1="Mobile App Developer," info2="Blockchain Expert" />
                    </FadeIn>

                    <FadeIn transitionDuration={1700}>
                        <Person name="Hamza Hassan" img="/hamza.jpg" info1="Mobile App Developer," info2="Web Designer" />
                    </FadeIn>


                </div>

            </div>

            <div className="flex flex-col justify-evenly items-center bg-gradient-to-br from-gray-800 to-cyan-900 invert w-full md:w-2/5 h-screen p-10">

                <div className="text-white text-center text-xl font-normal italic">
                    "Working with these guys was the best experience i've had as a client in all my years of outsourcing." <br></br> - Daniels (LetsVibe) 
                </div>

                <div className="flex flex-col justify-center items-center">
                    <div className="text-xl font-normal text-white">See the LetsVibe Story.</div>
                    <div className="animate-bounce flex justfiy-center items-center text-3xl mt-12 text-white">↓</div>
                </div>

            </div>

        </div>
    )
}