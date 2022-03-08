import { useEffect } from "react";
import { Link } from "react-router-dom";
import PortfolioPage1 from "./components/portfolioPage1";
import DevelopersPage from "./developersPage";

export default function Portfolio(){

    useEffect(() => {
        
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0

    }, []);

    return(
        <div style={{ fontFamily: "Roboto Mono" }} className="h-full w-full bg-white flex flex-col">
            
            <DevelopersPage/>
            <PortfolioPage1/>

            <div className="h-2/4 w-full bg-black/70 text-white text-2xl p-10 pb-96">
                <div className="text-6xl font-bold mt-24 text-[#FFD32D] mb-5 ">And thats a wrap!</div>
                    Overall, we were able to provide our client with a very high quality product that was bug free, fast and ran on both IOS and Android Platforms. Within an 8 Month period, we were able to deliver a fully functional Mobile App alongwith an accompanying admin panel both of which helped the client immensly in launching their app and getting valuable insights by the data.

                    <br></br>
                    <br></br>
                    <br></br>
                    Ready to craft your story?
                    <br></br>

                    <Link to="/contact">
                    <button
                        className=" text-2xl mt-10 p-4 rounded-sm bg-white text-red-900 hover:scale-105 ">
                        Let's Talk ►
                    </button>
                    </Link>
            </div>
            
            

        </div>
    )
}