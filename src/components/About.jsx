import React from "react";
import "../styles/About.css"


function About() {
    return (
        <div className="about-container">
            <div className="about-desc">
                <h3>Sobre mí</h3>
                <p>Responsable, sociable, proactivo, y dedicado en lo que hago.</p>
                <p>Mi interés es perfeccionarme y dedicarme diariamente al desarrollo web.</p>
                <div className="buttons">
                <button className="cv-button">
                    <a href="./CVAGUSTINAMUCHASTEGUI.pdf" target="_blank" rel="noreferrer">MI CV</a>
                </button>

                <button className="cv-button">
                    <a href="./ENGLISHCVAGUSTINAMUCHASTEGUI.pdf" target="_blank" rel="noreferrer">MY ENGLISH CV</a>
                </button>
                
                </div>
            </div>
            <div className="about-img">
                <img src="https://imgur.com/cknw3nD.jpeg" alt="aboutme" />
            </div>               
        </div>
    )
}
export default About