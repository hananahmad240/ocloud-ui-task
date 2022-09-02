import PixelPerfect from 'react-pixel-perfect'


import Navbar from './components/Navbar';
import Sections from './components/Sections';

import './App.css';


function App() {
  return (

    <PixelPerfect>
      <div className="App">



        <Navbar />

        <Sections />

      </div>
    </PixelPerfect>
  );
}

export default App;
