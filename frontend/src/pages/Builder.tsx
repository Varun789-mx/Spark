import { Background } from "../components/Background";
import { Chatbox } from "../components/Chatabox";
import { Navbar } from "../components/Navbar";

export function Builder() {
    return (<>
        <div className=" relativemin-h-screen">
            <div className="fixed inset-0 -z-10">
                <Background />
            </div> 
         <div className="realive -z-10 flex flex-col ">
                <Navbar />
            </div>
            <div className="flex flex-1 flex-col justify-center items-center">
                <Chatbox/>
            </div>
        </div>
    </>)
}