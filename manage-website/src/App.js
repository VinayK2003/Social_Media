import React from "react";
import "./App.css";
import Login from "./Components/Login";
import About from "./Components/About";
import Footer from "./Components/Footer";
import Intro from "./Components/Intro";
import Navbar from "./Components/Navbar";
import Testimonials from "./Components/Testimonials";
import BgImage from "./Components/BgImage";
import BgImageII from "./Components/BgImageII";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./Components/SignUp";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* Route for the root URL */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route
            path="/manage-website"
            element={
              <>
                <BgImage>
                  <Navbar />
                  <Intro />
                </BgImage>
                <BgImageII>
                  <About />
                  <Testimonials />
                </BgImageII>
                <Footer />
              </>
            }
          />
          {/* Route for the login page */}

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
