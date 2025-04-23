import { Background } from "../components/Background";
import { Chatbox } from "../components/Chatabox";
import { InputBox } from "../components/Inputbox";
import { Navbar } from "../components/Navbar";
import { ResponseDisplay } from "../components/ResponseDisplay";
import { StepsDisplay } from "../components/Steps";

export function Builder() {
    return (
        <div className="w-full h-screen">
           <StepsDisplay/> 
           {/* <InputBox/> */}
        </div>
    )
       
}


//  <div className=" relative min-h-screen">
//             <div className="fixed inset-0 -z-10">
//                 <Background />
//             </div> 
//             <div className="relative -z-10 flex flex-col ">
//                 <Navbar />
//             </div>
//             <div className=" w-full flex justify-evenly">
//                 <div className="w-full flex justify-center" >
//                     <ResponseDisplay />
//                 </div>
//                 <div className="w-full flex justify-center ">
//                     <div className="absolute top-3/4  left-8 flex-1 items-center ">
//                         <Chatbox />
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )



