import { Link } from "react-router-dom";


export default function Page3(){



    return(
        <div className="bg-port bg-cover h-screen w-full flex flex-col gap-5 justify-center items-center">

            <div className="text-6xl p-3 bg-white rounded-sm italic text-gray-900">
                Portfolio
            </div>

            <Link to="/portfolio">
                <button className="border-2 border-black hover:scale-105 text-xl italic p-3 bg-white rounded-sm text-gray-900">
                    Get to Know Me.
                </button>
            </Link>

        </div>
    );
}