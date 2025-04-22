import { Background } from "../components/Background"
import { HeroText } from "../components/HeroText"
import { Navbar } from "../components/Navbar"

export const Home = () => {
  return (
    <>
      <div className="">
        <div className="relative min-h-screen">
          <div className='fixed inset-0 -z-10'>
            <Background />
          </div>

          <div className='relative z-10 flex flex-col min-h-screen'>
            <Navbar />
        
        <div className="flex-1 flex flex-col  justify-center items-center px-4">
          <HeroText />
        </div>
      </div>
      </div>
      </div>

    </>
  )
} 