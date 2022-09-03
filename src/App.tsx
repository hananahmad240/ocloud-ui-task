import PixelPerfect from 'react-pixel-perfect'


import Navbar from './components/Navbar';
import SectionFirst from './components/SectionFirst'
import SectionSecond from './components/SectionSecond'

import './App.css';
import CenterBtn from './components/CenterBtn';


function App() {
  return (

    <PixelPerfect>
      <div className="App">
        <Navbar />
        <div className="section" >
          <SectionFirst />
          <SectionSecond />
          <CenterBtn />
        </div>

      </div>
    </PixelPerfect >
  );
}

export default App;
