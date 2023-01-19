import React from 'react';
import Card from "../pure/card"
import linkedin from "../../media/icons/linkedin.svg"
import github from "../../media/icons/github.svg"
import { useNavigate } from 'react-router-dom';



function CardsContainer({favCities,selected,sortName, sortWeather}) {

  //!HOOKS
  const navigateTo= useNavigate();

  //!INLINE STYLE
  const tittleStyle={
   fontFamily:"'Merriweather', serif",
    fontSize:"4.5em",    
  }

  return (
    <div className={favCities.length > 0? "cardsContainer":"cardsContainerEmpty"}>
    <div className='filter'>
        <label onClick={sortName}>Order by Name</label>
    <hr/>
        <label onClick={sortWeather}>Order by Weather</label>
    </div>
      {favCities.length ===0 && 
      <div className='emptyCard'>
          <div className="iconContainer">
            <a href='https://github.com/Daftpool25'><img width="50px" src={linkedin} alt="ico1" /></a>
            <a href='https:/www.linkedin.com/in/christopher-acosta-dev26'><img width="50px" src={github} alt="ico2" /></a>
          </div>
          <h1 style={tittleStyle}>Weathering...</h1>
          <p>App made by Christopher Acosta</p>

      </div>}

     {favCities.map( item => {return <Card selectCard={selected} id={item.id} tittle={item.cityName} weather={item.weather} key={item.id}/>})}
     <div onClick={()=>navigateTo("/about")} className="aboutUsContainer">
          <p>About Us</p>
      </div>
    </div>
  )
}

export default CardsContainer