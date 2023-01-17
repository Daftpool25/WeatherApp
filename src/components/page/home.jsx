import React, { useEffect } from 'react';
import { useLocation,  useNavigate } from 'react-router-dom';
import CardContainer from "../container/cardsContainer"

function Home({favCitiesList,getCard,state,changeState,selectedCityName,sortName,sortWeather}) {

  //! state review to render de wheater details
  const navigateTo=useNavigate()
  useEffect(() => {
    if(state===true){
      navigateTo(`/city/${selectedCityName}`);
      changeState(false);
    }
  })
  
  
   
  

  return (
    <div className="homeContainer">

      <CardContainer sortName={sortName} sortWeather={sortWeather} selected={getCard} favCities={favCitiesList}></CardContainer>

    </div>
  )
}

export default Home