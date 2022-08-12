import React from "react";
import "../styles/cover.css"

function Cover() {
    return (
        <div className="cover-container">
            <video className="video" src="https://imgur.com/dOR8BcH.mp4" autoPlay loop muted />
            <h1 className='yo'>Agustín Amuchástegui</h1>
            <p>FullStack Developer Web & Mobile</p>
            <div className="devices-container">
                <img src="https://imgur.com/Fe4sOr0.png" alt="web" />
                <p> + </p>
                <img className="celu" src="https://imgur.com/QnINMRj.png" alt="mobile" />
            </div>

        </div>

    )
}

export default Cover