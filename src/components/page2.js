import Typewriter from "typewriter-effect";
import FadeIn from "react-fade-in/lib/FadeIn";
import Iframe from 'react-iframe'
import {motion} from "framer-motion";


const texts = ['Mobile Apps', 'Web Apps', "UI / UX", "Flutter", "Firebase", "React Js"];


export default function Page2() {


    const iframe = '<iframe className="w-full h-screen"  title="Live review" url="https://hassanhamza930.github.io/"/>';


    return (
        <div className="flex flex-col md:flex-row w-full h-full md:h-screen bg-services bg-center bg-cover">

            <div className="bg-gradient-to-br from-[#084594] to-[#084594]/90 p-10 w-full md:w-2/4 h-screen flex flex-col justify-center items-start">

                <div className="text-white p-4 font-bold rounded-sm text-6xl md:text-[80px] text-[#FFD32D]">
                    I do,
                </div>



                <div className="flex justify-start items-center p-2 mt-4 ml-4 text-4xl text-[#084594] font-normal bg-[#FFD32D]">
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
                

                <div className="mt-36 text-2xl ml-2">
                    See My Code in Action →	
                </div>

            </div>

            <motion.div className="flex flex-row w-full md:w-2/4 bg-transparent h-screen backdrop-blur-xl backdrop-invert">
                
                <Iframe url="https://hassanhamza930.github.io/"
                    // position="absolute"
                    className="w-full h-full md:w-2/4 bg-transparent "
                    />

                    <div className="hidden md:flex w-0 md:w-2/4 bg-transparent flex justify-center items-center p-10">
                        <div>
                            The app you see on the screen is a live preview of our app written in futter and compiled for the web.
                        </div>
                    </div>

                
            </motion.div>
        


        </div>
    )
}