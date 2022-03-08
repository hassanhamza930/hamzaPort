import { Link } from "react-router-dom";

export default function PortfolioPage1() {
    return (
        <div className="h-full bg-white w-full flex flex-col-reverse md:flex-row">

            <div className="bg-black/70 w-full md:w-2/4 h-full flex flex-col justify-center items-start gap-10 p-10 pt-20">

                <div className="text-6xl font-bold text-[#FFD32D]">It all started last year,</div>
                <div className="text-xl font-normal text-white">
                    In june of 2021, our company was approached by a client from Ghana. The client Requested us to consult on a mobile application and an associated website.
                    The client required development for a mobile app that connects celebrities to their fans and allows for video communication between them.

                    The initial meetings went out pretty smooth and our team started brainstorming on the product.


                    <div className="text-3xl font-bold mt-12 text-[#FFD32D] ">Phase 1: Brainstorming and meetings</div>

                    <img className="mt-5 mb-5 w-full" src="/wireframe.png" />
                    Our team began by drawing out a basic template of how the eventual data would look like. This involved drawing <b className="text-[#FFD32D]">Entity Relation Diagrams</b> to figure out all possible interactions between different entities in the app product to make sure the rest of the development would go smoothly.
                    <img className="mt-5 mb-5 w-full" src="/trello.png" />
                    We setup a <b className="text-[#FFD32D]">Trello Board</b> and shared it with the client so clear goals could be setup. This way there is live accountability of the progress of the app while maintaining a sense of direction.



                    <div className="text-3xl font-bold mt-12 text-[#FFD32D] ">Phase 2: UI/UX</div>
                    <div className="w-full flex flex-col md:flex-row gap-2">
                        <img className="w-full md:w-2/4 h-full mt-5 mb-5" src="/ui2.png" />
                        <img className="w-full md:w-2/4 h-full mt-5 mb-5" src="/ui3.png" />
                    </div>
                    Our client was in direct communication with us on a daily basis. Luckily, he happened to know quite a bit about<b className="text-[#FFD32D]"> UI/UX design.</b> This essentially cut our development time by atleast a few weeks, as we were able to directly observe and experience what our client asked of us.


                    <div className="text-3xl font-bold mt-12 text-[#FFD32D] ">Phase 3: App Development</div>
                    <img className="mt-5 mb-5 w-full " src="/appDev1.png" />
                    App development started with us selecting the tech stack, Since our client required the app to run on all platforms and was heavy on animations and rapid developement. We decided on using <b className="text-[#FFD32D]">Flutter</b> as our front end framework for mobile development along with <b className="text-[#FFD32D]">React JS</b> for the development of the admin panel.
                    As for the backend, we decided to use google's <b className="text-[#FFD32D]">Firebase</b> as our database of choice.

                    The app had a lot of advanced features including:



                    <div className="flex flex-col gap-5 justify-center items-start text-2xl font-normal text-[#FFD32D]">
                        <div className="mt-10">
                            1.Push Notifications
                        </div>
                        <div >
                            2.Google Maps Integration
                        </div>
                        <div >
                            3.Payment Gateways
                        </div>
                        <div >
                            4.Video Recording / Uploading / Watermarking
                        </div>
                        <div >
                            5.Chat Feature
                        </div>
                        <div >
                            5.Promos / Discount Codes
                        </div>
                    </div>



                    <div className="text-6xl font-bold mt-24 text-[#FFD32D] mb-5 ">4 Months In:</div>
                    {/* <img className="mt-5 mb-5 " src="/appDev1.png" /> */}
                    By the time we were in the 6th month of developement, we had a Minimum Viable Product and a functional app ready to be tested and shown to potential users.
                    As the deadline for the project approached, We were at a point where we were overdelivering by adding features like <b className="text-[#FFD32D]">Animations</b> in the app.


                    <div className="text-6xl font-bold mt-24 text-[#FFD32D] mb-5 ">6 Months In:</div>
                    <img className="mt-5 mb-5 w-full " src="/adminPanel1.png" />
                    The client was reasonably satisfied with the status of the app and deployments to the app stores began simulateneously with the development of the <b className="text-[#FFD32D]">Web Admin Panel.</b>
                    <img className="mt-5 mb-5 w-full " src="/adminPanel3.png" />
                    The admin panel provided detailed statistics on the performance of the app along with usage data. All of this was achieved by complex calculations and algorithms of the admin panel. This not only provided business insights for the app owners but also provided actionable data which we used to reiterate on the features of the app.


                    



                </div>

            </div>

            <div className=" md:sticky top-0 bg-[url('https://cdn.dribbble.com/users/3756162/screenshots/11265951/media/f7f35b179255b8d9036f7045832f7de8.jpg?compress=1&resize=400x300&vertical=top')] bg-cover bg-center w-full md:w-2/4 h-[500px] md:h-screen flex justify-center items-center">
                <div className="bg-white/30 backdrop-blur-md h-full w-full flex justify-center items-center">
                    <div style={{ fontFamily: "Ubuntu" }} className=" text-6xl md:text-8xl text-black/70 bg-[#FFD32D] font-bold flex justify-center items-center shadow-2xl backdrop-invert p-4">
                        The<br />LetsVibe<br />Story<br />
                    </div>
                </div>
            </div>



        </div>
    )
}