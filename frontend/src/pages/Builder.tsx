import { Background } from "../components/Background";
import { Chatbox } from "../components/Chatabox";
import CodeEditor from "../components/CodeEditor";
import { Navbar } from "../components/Navbar";
import { ResponseDisplay } from "../components/ResponseDisplay";



export function Builder() {
    return (
 <div className=" relative min-h-screen">
            <div className="fixed inset-0 -z-10">
                <Background />
            </div> 
            <div className="relative -z-10 flex flex-col ">
                <Navbar />
   
<div className="w-full h-screen pt-5">
                    <div className="absolute top-3/4  left-8 flex-1 items-center ">
                        <Chatbox />
                    </div>
             </div>
            </div>
        </div>
    )

}