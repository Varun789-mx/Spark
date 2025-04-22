import { Background } from "../components/Background";
import { Chatbox } from "../components/Chatabox";
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
            </div>
            <div className=" w-full flex justify-between">
                <div className="w-full">
                    <ResponseDisplay />
                </div>
                <div className="w-full flex justify-center ">
                    <div className="absolute top-3/4  left-8 flex-1 items-center ">
                        <Chatbox />
                    </div>
                </div>
            </div>
        </div>
    )
}


