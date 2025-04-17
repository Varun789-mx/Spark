import './App.css';
import { HeroText } from './components/HeroText';

import { Spotlight } from './components/Spotlight-new';

function App() {
  console.log(<Spotlight />)
  return (
    <>
      <div className="relative min-h-screen bg-black min-w-screen overflow-hidden">
        <Spotlight />
        <div className="absolute flex justify-center">
          <HeroText />
        </div>
      </div>
    </>
  );
}

export default App;