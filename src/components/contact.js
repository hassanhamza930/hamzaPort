import { useState } from "react"
import { Link } from "react-router-dom";

export default function Contact(){

    var [name,setName]=useState("");
    var [email,setEmail]=useState("");
    var [message,setMessage]=useState("");
    var [show,setShow]=useState(false);

    var popup="";


    if(show===true){
        popup=<div className="bg-black/30 backdrop-blur-md h-screen w-full z-10 absolute flex justify-center items-center">
        <div className="p-10 text-center bg-white rounded-md h-3/4 w-3/4 flex justify-center items-center text-4xl font-bold flex-col">
            
            <div className="text-cyan-900">
                I have recieved your message.
            </div>
            
            <div className="text-2xl font-normal text-cyan-900 italic mt-5 ">
                I will be in touch with you shortly.
            </div>

            <Link to="/">
            <button onClick={()=>{
                setShow(!show);
                }} className="bg-rose-900 text-white p-3 w-24 shadow-xl text-3xl rounded mt-10">
                Ok
            </button>
            </Link>
            


        </div>
    </div>;
    }
    else{
        popup="";
    }



    return(
        <div style={{ fontFamily: "Roboto Mono" }} className="h-screen w-screen static">
            
            <div className="absolute z-0 h-screen w-full flex justify-center items-center bg-contact bg-center bg-cover">
    

            <div className=" h-screen md:h-screen w-full flex flex-col md:flex-row justify-center items-center">
                
                <div className="backdrop-invert p-10 flex flex-col justify-start items-start w-full md:w-2/5  h-full bg-blue-100/30 backdrop-blur-md rounded-l">
                    <div className="text-6xl font-bold text-cyan-900 ">
                        Let's Build
                    </div>
                    <div className=" text-5xl font-normal text-cyan-900">
                        Something
                    </div>
                    <div className="text-4xl font-normal text-cyan-900">
                    Together.
                    </div>

                    <div className="mt-10 text-sm md:text-xl font-normal italic text-cyan-900">I will get back to you,<br></br> within hours.</div>

                </div>







                <div className="overflow-scroll md:w-full w-full md:w-2/5 h-full bg-white rounded-r flex flex-col justify-center items-start p-10">
                    <div className="w-3/4 text-start">Enter your Name</div>
                    <input value={name} onChange={(e)=>{setName(e.target.value)}} placeholder="John Doe" type="text" className="w-4/5 border-2 border-black p-1 rounded"></input>
                    <div className="w-3/4 text-start mt-5">Enter your Email</div>
                    <input value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder="random123@gmail.com" type="text" className="w-4/5 border-2 border-black p-1 rounded"></input>
                    <div className="w-3/4 text-start mt-5">Enter your Message.</div>
                    <textarea value={message} onChange={(e)=>{setMessage(e.target.value)}} rows="3" style={{resize:"none"}} placeholder="Hi There!" type="text" className="h-1/2 md:h-1/4 w-4/5 border-2 border-black p-1 rounded"></textarea>
                    <button onClick={async ()=>{
                        fetch(`http://localhost:3000/api/hello?name=${name}&email=${email}`);
                        
                        setName("");
                        setEmail("");
                        setMessage("");
                        setShow(true);
                        

                    }} className="mt-5 rounded bg-rose-900 p-3 w-24 text-white hover:scale-110" >Submit</button>
                </div>




            </div>

    

            </div>


            {popup}
           

        </div>
    )
}