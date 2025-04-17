import { InputBox } from "./Inputbox"


export const HeroText = () => {


  return (
    <>
      <div className='min-w-screen min-h-screen bg-transparent  flex flex-col justify-center items-center'>
        <div className='text-white font-serif '>
          <span className='text-6xl'>Prompt , build ,Ship in minutes</span>
          <div className="">
            <span className='text-xl text-red-400'>   Build you favourite Apps for
            </span>
            <span className='text-xl text-white'> Mobile</span>
            <span className='text-xl text-red-400'> and</span>
            <span className='text-xl text-white'> Desktop</span>
          </div>
          <InputBox />
        </div>

      </div>


    </>
  )
}