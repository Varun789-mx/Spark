import './App.css';
import { Background } from './components/Backgroun';
import { HeroText } from './components/HeroText';
import { Navbar } from './components/Navbar';

import { Spotlight } from './components/Spotlight-new';

function App() {
  console.log(<Spotlight />)
  return (
    <>
      <div className="fixed inset-0 md:w-screen h-screen -z-10 bg-cover">
        <Background />
      </div>
      <div className='relative z-10 md:visible'>
        <Navbar />
        <div className='flex justify-center  h-screen '>
          <HeroText /> 
          </div>


      </div>
    </>
  )
}

export default App;