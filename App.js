import React from "react"
import About from "./About"
import Interests from "./Interests"
import Footer from "./Footer"
import Info from "./Info"

export default function App() {
    return (
        <div className="container">
            <Info />
            <About />
            <Interests/>
            <Footer/>
        </div>
    )
}