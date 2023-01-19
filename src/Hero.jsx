import React from "react";

// Images
import logo from "../images/logo.svg";

export default function Hero() { 

    return (
        <div className="hero">
            
            <header className="bg-light-red">
                <nav>
                    <div className="nav-right">
                        <div className="nav-brand">
                            <img src={logo} alt="brand logo" className="" />
                        </div>

                        
                        <div className="nav-items">
                            
                        </div>
                    </div>
                </nav>
            </header>

        </div>
    )
}