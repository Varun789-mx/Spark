import { useState } from "react";
import Spark from "../public/SparkAI logo.png";
import Hamburger from "hamburger-react";
export const Navbar = () => {
    const [isopen, setisopen] = useState(false);
    return <>
        <header className=" fixed top-0 left-0 backdrop-blur-lg right-0 bg-background/80 border-b border-b-border z-50  w-full h-16 flex justify-between pt-2 ">
            <div className="text-white  flex justify-between items-center p-2">
                <div className="pl-9 flex items-center p-2">
                    <img className=" h-40 w-auto object-contain" src={Spark} alt="logo" />
                </div>
                <div className="hidden md:flex  items-center gap-6">
                    <a href="#Feature" className="p-4 hover:text-blue-500 ">Features</a>
                    <a href="#howitworks" className="p-4 hover:text-blue-500 ">How it works</a>
                    <a href="#Testimonial" className="p-4 hover:text-blue-500 ">Testimonials</a>
                    <a href="#pricing" className="p-4 hover:text-blue-500 ">Pricing</a>
                </div>
            </div>
            <div className="hidden md:flex text-white justify-between pr-9 cursor-pointer pt-2">
                <div className="text-base px-2 pt-2 ">
                    <span className="p-4">Login</span>
                </div>
                <div>
                    <div className="rounded-lg pt-2 bg-blue-500 pb-2 w-full hover:bg-blue-600">
                        <span className="p-4 text-sm font-bold">Get Started</span>
                    </div>
                </div>
            </div>
            <button className="md:hidden text-white" onClick={() => setisopen(!isopen)}>
                <Hamburger toggled={isopen} size={24} />
            </button>
            {isopen && (
                <div className="absolute top-16 left-0  w-full  bg-slate-900 backdrop-blur-xl right-0 bg-background/80 border-b  md:hidden" >
                    <div className="flex flex-col gap-4 py-4 px-6 text-white">
                        <a href="#Feature" className="p-4 hover:text-blue-500 " onClick={() => setisopen(false)}>Features</a>
                        <a href="#howitworks" className="p-4 hover:text-blue-500 " onClick={() => setisopen(false)}>How it works</a>
                        <a href="#Testimonial" className="p-4 hover:text-blue-500 " onClick={() => setisopen(false)}>Testimonials</a>
                        <a href="#pricing" className="p-4 hover:text-blue-500 " onClick={() => setisopen(false)}>Pricing</a>
                    </div>
                </div>
            )}
        </header>
    </>

}