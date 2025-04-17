import { InputBox } from "./Inputbox"


export const HeroText = () => {


  return (
    <>
      <div className='min-w-screen min-h-screen bg-transparent  flex flex-col items-center'>
        <div className="flex-col justify-center items-center">
          <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
            Spark It up, <br /> Build your MVP in minutes
          </h2>
          <p className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center">
            Get the best advices from our experts, including expert artists,
            painters, marathon enthusiasts and RDX, totally free.
          </p>
        
          </div>
            <InputBox />
      </div>
    </>
  )
}