import React from 'react'
import "../styles/Footer.css"
// import { Link as LinkRouter } from "react-router-dom"

const Footer = ({isScrolling}) => {
    // const toTheTop = () => {
    //     window.scrollTo({top: 0, left: 0, behavior: "smooth"});
    // }
    
    return (
        <footer className='footer'>
            <div className='footer-info'>
                <h1>Agustín Amuchástegui</h1>
                <div className='location-box'>
                <i className="fa-solid fa-location-dot location"></i>
                <p>Córdoba, Argentina</p>
                </div>   
            </div>

            <div className='footer-sns'>
                <div className='footer-contact'>
                    <h3>¿ Dudas, consultas, preguntas ? Espero su contacto!</h3>
                </div>
                <div className='sns-links'>
                    <a href="https://www.linkedin.com/in/agust%C3%ADn-amuch%C3%A1stegui-526ab9ba/" target="_blank" rel="noreferrer">
                        <i className='fab fa-linkedin linkedin'></i>
                    </a>
                    <a href="https://github.com/AguAmuok" target="_blank" rel="noreferrer">
                        <i className='fab fa-github github'></i>
                    </a>
                    <a href="https://www.instagram.com/aguamu.ok/" target="_blank" rel="noreferrer">
                    <i class="fa-brands fa-instagram instagram"></i>
                    </a>
                    <a href="https://twitter.com/AgussPiki" target="_blank" rel="noreferrer">
                    <i class="fa-brands fa-square-twitter instagram"></i>
                    </a>

                    {/* <LinkRouter to="/formulario" onClick={toTheTop}>
                    <i class="fa-brands fa-instagram instagram"></i>
                    </LinkRouter> */}
                </div>
            </div>
        </footer>
    )
}

export default Footer