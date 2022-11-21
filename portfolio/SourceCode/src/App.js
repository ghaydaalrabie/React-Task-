import './App.css';

import React from "react";
import Header from './components/header' 
import Home from "./components/Home";
import Projects from "./components/projects";
import Contact from "./components/contact";
import "bootstrap/dist/css/bootstrap.css";
import Footer from './components/footer';
import "./fonts/SquarePeg-Regular.ttf";
import "./fonts/BerkshireSwash-Regular.ttf";
import "./fonts/IndieFlower-Regular.ttf";
import { BrowserRouter, Route, Routes } from "react-router-dom";



class App extends React.Component {
  state = {
    title: "Ghayda's portfolio",
  };

  render() {
    return (
     
        <div>
          <Header />
           <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route  path="/projects" element={<Projects />} />
            <Route  path="/contact" element={<Contact />} />
          </Routes>
          </BrowserRouter>
          <Footer />
        </div>
    );
  }
}



export default App;
