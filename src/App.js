import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Info from './components/Info';
import Contact from './components/Contact';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Home />
     <About />
     <Info />
     <Contact />
     <Footer/>
    </div>
  );
}

export default App;
