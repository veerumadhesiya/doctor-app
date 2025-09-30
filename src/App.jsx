import React from 'react';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Service from './Service';
import News from './News';
import Contact from './Contact';
import Reviews from './Review';

function App() {
  return (
    <div>
      <Navbar />
<Home/>
<Service/>
{/* <About/> */}
<Reviews/>
<News />

    </div>
  );
}

export default App;
