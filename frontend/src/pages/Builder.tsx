import { Background } from "../components/Background";
import { Chatbox } from "../components/Chatabox";
import { Navbar } from "../components/Navbar";

export function Builder() {
    return (<>
        <div className=" relative min-h-screen">
            <div className="fixed inset-0 -z-10">
                <Background />
            </div>
            <div className="relative -z-10 flex flex-col ">
                <Navbar />
            </div>
            <div className="absolute top-1/2  left-8 flex-1 items-center ">
                <div className="ml-8">
                    <Chatbox />
                </div>
            </div>
        </div>
    </>)
}