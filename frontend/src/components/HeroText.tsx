
  import { InputBox } from "./Inputbox"

  export const HeroText = () => {
    return (
      <>
        <div className="flex w-1/2 flex-col pt-4 justify-center items-center">
        
          <div className=" flex flex-col items-center text-center">
              <span className=" w-full text-violet-500 font-bold text-6xl ">
                Build Better Apps <span className="text-white"> with AI-Powered Development</span>
              </span>
  </div>
            <div className=" w-full max-w-xl text-xl text-center  text-blue-400 p-2">
              <span className="w-full">
                Transform your ideas into production-ready web applications with our AI-powered developer platform. No complex setup, just pure creativity.
              </span>
            </div>
          <div className="pt-4">
              <InputBox/>
            </div>
            </div>
      </>
    )

  }
