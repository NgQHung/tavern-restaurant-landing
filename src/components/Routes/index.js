import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "../Pages/Main";
import About from "../Pages/About";
import Menu from "../Pages/Menu";
import Testimonial from "../Pages/Testimonial";
import Cta from "../Pages/Cta";

function Routee() {
    return (
        <div>
            <Routes>
                <Route path="/home" element={<Main />}></Route>
                <Route path="/about" element={<About />}></Route>
                <Route path="/menu" element={<Menu />}></Route>
                <Route path="testimonial" element={<Testimonial />}></Route>
                <Route path="cta" element={<Cta />}></Route>
            </Routes>
        </div>
    );
}

export default Routee;
