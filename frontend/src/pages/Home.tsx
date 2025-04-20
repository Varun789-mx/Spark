import { Background } from "../components/Backgroun"
import { HeroText } from "../components/HeroText"
import { Navbar } from "../components/Navbar"

export const Home = () => {
  return (
    <>
    <div>
      <div className="min-h-screen  relative -z-10 bg-cover">
        <div className='fixed inset-0 -z-10 '>
          <Background />
          </div>
          <div className='relative'>
            <Navbar />
          </div>
          </div>
        <div className="flex flex-col justify-center items-center">
          <HeroText/>
        </div>
        </div>
        
    </>
  )
} 