

export default function Person(props){

    return (
        <div className="flex flex-col hover:scale-[1.03]">
            
            <div style={{backgroundImage:`url('${props.img}')`}} className=" h-36 md:h-64 w-36 md:w-64 bg-red-600 flex justify-center items-end text-3xl font-bold text-white bg-center bg-contain  ">
                
                <div className="w-full p-1 flex justify-start items-start bg-black/40 backdrop-blur-xl rounded-sm">

                    <div className="w-full text-sm md:text-xl text-center p-1 rounded-sm text-white">{props.name}</div>
            
                </div>

            </div>

            <div className="md:w-64 w-36 flex justify-center items-center text-center p-1 w-full border-2 border-black/50 rounded-b-sm ">
                {props.info}
            </div>


        </div>
 
 )
}