import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import image1 from "../../media/rainning.jpg"
import image2 from "../../media/drizze.jpg"


function About({state,selectedCityName,changeState}) {

  const style1={
    background:`url('${image1}')`,
    backgroundSize: "cover",
    backgroundPosition:"center"
  }
  const style2={
    background:`url('${image2}')`,
    backgroundSize: "cover",
    backgroundPosition:"center"
  }

    const style3={
    background:`url('${image2}')`,
    backgroundSize: "cover",
        backgroundPosition:"botton"

  }

    const style4={
    background:`url('${image1}')`,
    backgroundSize: "cover",
  }

  const navigateTo=useNavigate()
  useEffect(() => {
    if(state===true){
      navigateTo(`/city/${selectedCityName}`);
      changeState(false);
    }
  })
  
  return (
    <div className="about">
        <a href="https://www.linkedin.com/in/christopher-acosta-dev26/">
            <div className="cardContainer" >
              <div style={style1} className="weatherPhoto"></div>
              <div className="data">
                  <h1>Linkedin</h1>
                  <p>christopher-acosta-dev26</p>
              </div>
            </div>
        </a>
        <a href="https://github.com/Daftpool25">
            <div className="cardContainer" >
              <div style={style2} className="weatherPhoto"></div>
              <div className="data">
                  <h1>GitHub</h1>
                  <p>github.com/Daftpool25</p>
              </div>
            </div>
        </a>
        <div className="cardContainer" >
              <div style={style4} className="weatherPhoto"></div>
              <div className="data">
                  <h1>Made by:</h1>
                  <p>Christopher Acosta</p>
              </div>
        </div>
        <div className="cardContainer" >
              <div style={style3} className="weatherPhoto"></div>
              <div className="data">
                  <h1>Api</h1>
                  <p>openweathermap.org</p>
              </div>
        </div>
    </div>
  )
}

export default About