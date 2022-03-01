import Typewriter from "typewriter-effect";
import FadeIn from "react-fade-in/lib/FadeIn";
const texts = ['Mobile Apps', 'Web Apps', "UI / UX", "Flutter", "Firebase", "React Js"];



export default function Page2() {

    return (
        <div className="flex flex-row w-full h-screen bg-services bg-center bg-cover">

            <div className="bg-gradient-to-br from-[#084594] to-[#084594]/70 p-10 w-full md:w-2/4 h-screen flex flex-col justify-center items-start">

                <div className="text-white p-4 font-bold rounded-sm text-6xl md:text-[80px] text-[#FFD32D]">
                    We do,
                </div>



                <div className="flex justify-start items-center p-2 mt-4 text-4xl text-[#084594] font-normal bg-[#FFD32D]">
                    <Typewriter
                        options={{
                            strings: texts,
                            autoStart: true,
                            loop: true,
                            delay: 80,
                            deleteSpeed: 50,
                        }}
                    />
                </div>


            </div>

            <div className="w-0 md:w-2/4 h-screen backdrop-blur-md backdrop-invert">

            </div>


        </div>
    )
}