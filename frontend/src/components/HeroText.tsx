import { InputBox } from "./Inputbox"

export const HeroText = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
      
        <div className="w-2/3  flex flex-col items-center text-center">
            <span className="text-violet-500 font-bold text-6xl ">
              Build Better Apps <span className="text-white"> with AI-Powered Development</span>
            </span>
</div>
          <div className=" w-full max-w-xl text-xl text-center  text-blue-400 p-2">
            <span className="w-full">
              Transform your ideas into production-ready web applications with our AI-powered developer platform. No complex setup, just pure creativity.
            </span>
          </div>
         <div className="">
            <InputBox/>
          </div>
          </div>
    </>
  )

}