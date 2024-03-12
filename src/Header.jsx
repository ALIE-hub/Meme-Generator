import React from "react";
import "./styles.css"

export default function Header(){
    return(
        
            <nav className="header">
                <img className="header-img" src={require("./images/meme.png")} width="60px" alt="meme"/>
                <h2 className="header-title">Meme Generator</h2>
                {/* <h4 className="header-text">React course - Project 3</h4> */}
            </nav>
       
    )
}