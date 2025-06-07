import { Navbar } from "../components/Navbar";
import { Chatbox } from "../components/Chatabox";
import { Background } from "../components/Background";
import CodeEditor from "../components/CodeEditor";


export function Builder() {
    return (
        <div className=" relative min-h-screen">
            <div className="fixed inset-0 -z-10">
                <Background />
            </div>
            <div className="relative z-10  ">
                <Navbar />
            </div>
            <div className="flex w-full justify-items-center px-6 m-2">
                <div className="absolute  w-1/3 top-3/4 flex-1 items-center p-2 ">
                    <Chatbox />
                </div>
               <div className="absolute top-16 right-0 w-3/5 p-2">
    <CodeEditor />
</div>
            </div>
        </div>
    )
}