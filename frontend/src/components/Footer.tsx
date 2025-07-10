import { Github } from "lucide-react";
import { createLucideIcon } from "lucide-react";
export const FooterArea = () => {
    const XIcon = createLucideIcon("X", [
        [
            "path",
            {
                d: "M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z",
                stroke: "none",
                fill: "currentColor",
            },
        ],
    ]);
    return <div>
        <footer>
            <div className="h-50">
                <div className=" bg-gray-800 p-10 grid grid-cols-5 gap-5">
                    <div className=" col-span-3 py-auto">
                        <p className="text-blue-300 text-2xl font-bold">Spark AI</p>
                    </div>
                    <div className="col-span-2 font-bold ">
                        <span className="text-white"> Quick links</span>
                    </div>
                    <div className="col-span-3">
                        <span className="text-white ">
                            Spark helps you build AI-powered MVPs faster with simple LLM integration and streamlined prototyping using TypeScript.
                            Perfect for quickly turning ideas into working products.
                        </span>
                    </div>
                    <div className="col-span-1">
                        <span className="text-white ">
                            <a className="pb-2 pr-8" href="https://x.com/Hash_module"><XIcon /></a>
                            <a className=" pr-8" href="https://github.com/varun789-mx">
                                <Github /></a></span>
                    </div>
                </div>
            </div>
        </footer>
    </div >
}