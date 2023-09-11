import React from "react";
import  ReactDOM  from "react";
import Image from './Components/Image'
import Name from './Components/Name'
import Button from './Components/Button'
import About from './Components/About'
import Intereset from './Components/Interest'
import Footer from './Components/Footer'


export default function App(){
    return(
        <div className="container">
           <Image/> 
           <Name/>
           <Button/>
           <About/>
           <Intereset/>
           <Footer/>
        </div>
    )
}