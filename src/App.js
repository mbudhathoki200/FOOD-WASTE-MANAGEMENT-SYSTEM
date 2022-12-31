import React from "react"; //We import the useState Hook from React. It lets us keep local state in a function component.
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { BrowserRouter, Link } from "react-router-dom";
import "./App.css";
import Home from "./components/pages/Home";
import OurMission from "./components/pages/OurMission";
import AboutUs from "./components/pages/AboutUs";
import SignUp from "./components/pages/SignUp";
import Contact from "./components/Contact";
import SignIn from "./components/pages/signIn";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
  
      <Router>
    
        <Navbar />
      
     
        <Routes>
       
          <Route exact path="/" element={<Home/>}/>
          <Route path="/ourmission" element={<OurMission/>} />
          <Route path="/aboutus" element={<AboutUs/>} />
          <Route path="/sign-up" element={<SignUp/>} />
          <Route path="/sign-in" element={<SignIn/>} />
     
        </Routes>
      
       
      </Router>
   
    </>
  );
}

export default App;
