import Spark from "../public/SparkAI logo.png"
export const Navbar = () => {
    return <>
        <div className="bg-[#121728] w-full h-16 flex justify-between pt-2">
            <div className="text-white  flex justify-between items-center p-2">
                <div className="pl-9 flex items-center p-2">
                    <img className=" h-40 w-auto object-contain" src={Spark} alt="logo" />
                </div>
                <div className="flex justify-between text-base text-blue-400 cursor-pointer ">
                    <div >
                        <span className="p-4 hover:text-white ">Features</span>
                    </div>
                    <div >
                        <span className="p-4 hover:text-white">How it works</span>
                    </div>
                    <div >
                        <span className="p-4 hover:text-white">Testimonials</span>
                    </div >
                    <div >
                        <span className="p-4 hover:text-white">Pricing</span>
                    </div>
                </div>
            </div>

            <div className="text-white flex justify-between pr-9 cursor-pointer pt-2">
                <div className="text-base px-2 pt-2 ">
                    <span className="p-4">Login</span>
                </div>
                <div>
                    <div className="rounded-lg pt-2 bg-blue-500 pb-2 w-full hover:bg-blue-600">
                        <span className="p-4 text-sm font-bold">Get Started</span>
                    </div>
                </div>

            </div>


        </div>
    </>

}