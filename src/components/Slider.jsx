import React from 'react'
import "../styles/Slider.css"

const Slider = () => {
  return (
    <div className='carousels-container'>
      <div className='carousel-container'>
        <div className='carousel-title'>
          <h2>Proyectos Web</h2>
          <img src="https://imgur.com/Fe4sOr0.png" alt="web" />
        </div>
        <div className='slides-box'>
          <div className='slide-container-web'>

            <video className="carousel-video" autoPlay loop muted>
              <source src="https://imgur.com/jcKZu9e.mp4" type='video/mp4' />
            </video>
            <div className='slide-desc'>
              <span>My Tinerary</span>
              <a href="https://my-tinerary-agustin-amu-front.herokuapp.com/" target="_blank" rel="noreferrer">
              <i class="fa-solid fa-earth-americas web"></i>
              </a>
              <a href="https://github.com/AguAmuok/mytinerary-amuchastegui-agustin" target="_blank" rel="noreferrer">
                <i className='fab fa-github github git-icon'></i>
              </a>
            </div>

          </div>

          <div className='slide-container-web'>
            <video className="carousel-video" autoPlay loop muted>
              <source src="https://imgur.com/E2BapGq.mp4" type='video/mp4' />
            </video>
            <div className='slide-desc'>
              <span>TecnoCel</span>
              <a href="https://tecnocelweb.herokuapp.com/" target="_blank" rel="noreferrer">
              <i class="fa-solid fa-earth-americas web"></i>
              </a>
              <a href="https://github.com/AguAmuok/TecnoCel---Front" target="_blank" rel="noreferrer">
                <i className='fab fa-github github git-icon'></i>
              </a>
            </div>

          </div>

        </div>
      </div>

      <div className='carousel-container'>
        <div className='carousel-title'>
          <h2>Proyectos Mobile</h2>
          <img className='celu' src="https://imgur.com/QnINMRj.png" alt="mobile" />
        </div>
        <div className='slides-box'>
          <div className='slide-container-mobile'>
            <a href="https://github.com/AguAmuok/Tinerary_App" target="_blank" rel="noreferrer">
              <video className="carousel-video" autoPlay loop muted>
                <source src="https://imgur.com/XrxBPrA.mp4" type='video/mp4' />
              </video>
              <div className='slide-desc'>
                <span>My Tinerary Mobile App</span>
                <i className='fab fa-github github git-icon'></i>
              </div>
            </a>
          </div>

          <div className='slide-container-mobile'>
            <a href="https://github.com/AguAmuok/TecnoCel-MobileApp" target="_blank" rel="noreferrer">
              <video className="carousel-video" autoPlay loop muted>
                <source src="https://imgur.com/Zo5MMcL.mp4" type='video/mp4' />
              </video>
              <div className='slide-desc'>
                <span>TecnoCel Mobile App</span>
                <i className='fab fa-github github git-icon'></i>
              </div>
            </a>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Slider