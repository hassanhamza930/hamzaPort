import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";
import FadeIn from 'react-fade-in';
import { Link } from "react-router-dom";
import { useSpring, animated, useTransition } from 'react-spring'
import {FaInstagramSquare,FaGithubSquare,FaTwitterSquare} from "react-icons/fa";
import {SiFiverr} from "react-icons/si";

var texts = [
    "Mobile",
    "Web",
    "Beautiful",
    "Winning",
    "Awesome"
];


const gradientSteps = [0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8];






export default function Page1() {

    const [index, setIndex] = useState(100);
    const [currentValue, setCurrentValue] = useState(0);
    const [hide, setHide] = useState(false);
    const props = useSpring({ to: { x: 0, y: 0 }, from: { x: 500, y: 200 }, });




    useEffect(async () => {
        console.log('running one time');
        await setTimeout(() => {
            if (hide === true) {
                setHide(false)
            }
            else {
                setHide(true)
            }

            if (currentValue < texts.length) {
                setCurrentValue(currentValue + 1);
            }
            else {
                setCurrentValue(0);
            }

        }, 2000);
    }, [hide]);



    return (
        <div className="h-full md:h-screen w-full bg-[#FFD32D] flex flex-col md:flex-row justify-between items-center p-12">

            <div className="flex flex-col justify-center items-start">

                <div className="flex flex-row">

                    <div className="flex flex-col bg-[#084594] p-4 rounded-sm">

                        <div className="text-6xl font-bold text-left text-white p-1 rounded">
                            <FadeIn transitionDuration={1000}>
                                Hello!
                            </FadeIn>
                        </div>

                        <div className="text-4xl font-normal text-left text-white p-1 rounded">
                            <FadeIn transitionDuration={1000}>
                                I'm Hamza
                            </FadeIn>
                        </div>

                        <div className="text-xl font-normal text-left text-white p-1 rounded">
                            <FadeIn transitionDuration={1500}>
                                I convert ideas into apps.
                            </FadeIn>
                        </div>

                        <animated.div style={props}>
                            <FadeIn transitionDuration={2000}>
                                <Link to="/contact">
                                    <button
                                        className=" text-xl ml-1 mt-4 p-2 rounded-sm bg-white text-red-900 hover:scale-105 ">
                                        Let's Talk ►
                                    </button>
                                </Link>
                            </FadeIn>
                        </animated.div>

                    </div>

                    <div className="bg-transparent flex flex-col">
                        {
                            gradientSteps.map((element) => {
                                return (
                                    <FadeIn delay={element * 1000} transitionDuration={element * 1000}>
                                        <div style={{ backgroundColor: "#008E89", opacity: element }} className="w-8 h-10 text-xl font-normal">
                                        </div>
                                    </FadeIn>
                                )
                            })
                        }
                    </div>

                </div>

                <div className="flex flex-col mt-10 ml-1 justify-end items-start">
                    <div className="text-5xl italic text-[#084594]">
                        I build
                    </div>

                    <AnimatePresence>
                        {
                            hide == true ?
                                <div
                                    className="text-3xl italic font-normal text-[#084594]">
                                    $^**()???
                                </div>
                                :
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 1 }}
                                    className="text-3xl italic font-normal text-[#084594]">
                                    {texts[currentValue]}
                                </motion.div>
                        }
                    </AnimatePresence>

                    <div className="text-2xl italic font-normal text-[#084594]">
                        Apps.
                    </div>
                </div>


            </div>

            <div className="h-full w-2/4 flex flex-col justify-center items-center">

                <div style={{backgroundImage: 'url("https://avatars.githubusercontent.com/u/45227042?v=4")' }} className="h-72 w-72 md:h-96 md:w-96 bg-center bg-contain md:mt-0 mt-12">
                </div>



                <div className="flex flex-row gap-4 md:gap-10 justify-evenly items-center">

                    <a href=
                    "https://twitter.com/Hamza44965848" 
                    className="hover:scale-105"><FaTwitterSquare color="black" size={70}/></a>
                    <a href=
                    "https://github.com/hassanhamza930" 
                    className="hover:scale-105"><FaGithubSquare color="black" size={70}/></a>
                    <a href=
                    "https://www.fiverr.com/hassanhamza930" 
                    className="hover:scale-105"><SiFiverr color="black" size={130}/></a>
                    
                

                </div>
            </div>

        </div>
    );


}