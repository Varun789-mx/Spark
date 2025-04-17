import './App.css';
import { Background } from './components/Backgroun';
import { Navbar } from './components/Navbar';

import { Spotlight } from './components/Spotlight-new';

function App() {
  console.log(<Spotlight />)
  return (
    <>
    <Navbar/>
    <Background/>
    </>
  )
}

export default App;