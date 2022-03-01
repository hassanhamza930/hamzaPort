import Typewriter from "typewriter-effect";
import FadeIn from "react-fade-in/lib/FadeIn";
const texts = ['Mobile Apps', 'Web Apps', "Flutter", "Firebase", "React Js"];



export default function Page2() {

    return (
        <div className="bg-services bg-center p-10 bg-cyan-900/30 bg-cover backdrop-blur-md bg-center w-full h-[500px] flex flex-col justify-center items-start">

            <div className="text-white p-4 font-bold rounded-sm text-6xl md:text-[80px] bg-[#084594] text-[#FFD32D]">
                We do,
            </div>



            <div className="flex justify-start items-center p-2 mt-4 text-4xl text-[#084594] font-normal bg-[#FFD32D]">
                <Typewriter
                    options={{
                        strings: texts,
                        autoStart: true,
                        loop: true,
                        delay:80,
                        deleteSpeed:50,
                    }}
                />
            </div>


        </div>
    )
}