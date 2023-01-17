import React, { useEffect } from 'react';
 import { useNavigate, useParams } from 'react-router-dom';


function City({id,icon,cityName, country, altitude, latitude, weather, description, temperature, max, min,  humidity,  addCitytoFav, remove,directCityValues,changeState}) {
  
  //!BUTTONS 
  const navigateTO=useNavigate()
  function comeBack() {
    navigateTO("/")
  }

  function deleteCard(id){
    remove(id);
    navigateTO("/")
  }

  //!NAVIGATE TO A CITY BY PARAMS
  const routeParams=useParams();
  useEffect(() => {
    if(id===undefined){
      directCityValues(routeParams.name);
      changeState(false);
    }
  }, [])
  


  return (
    <div className="cityContainer">
      {
        id?
          <div className="cityDataContainer">
             <h1>{cityName}</h1>
            <div className="cityDetails">
              <div className="cityBlock"><p className="tittleBlock">COUNTRY</p><p>{country}</p></div>
              <div className="cityBlock"><p className="tittleBlock">LATITUDE</p><p>{altitude}</p></div>
              <div className="cityBlock"><p className="tittleBlock">LONGITUDE</p><p>{latitude}</p></div>
              <div className="cityBlock"><p className="tittleBlock">WEATHER</p><p>{weather}</p></div>
              <div className="cityBlock"><p className="tittleBlock">DESCRIPTION</p><p>{description}</p></div>
              <div className="cityBlock"><p className="tittleBlock">TEMPERATURE</p><p>{temperature}</p></div>
              <div className="cityBlock"><p className="tittleBlock">TEMP. MAX</p><p>{max}</p></div>
              <div className="cityBlock"><p className="tittleBlock">TEMP. MIN</p><p>{min}</p></div>
              <div className="cityBlock"><p className="tittleBlock">HUMIDITY</p><p>{humidity}</p></div>
            </div>
            <div className="btnCityContainer">
                <button  onClick={comeBack}><span class="material-symbols-outlined">arrow_back_ios_new </span> Back</button>
                <button onClick={addCitytoFav}><span class="material-symbols-outlined">add_circle</span>Add</button>
                <button className='deleteBtn' onClick={() => deleteCard(id)}><span class="material-symbols-outlined">delete</span>Delete</button>
            </div>
        </div>
        :
        <h1>Wait...</h1>
      }
    </div>
  )
}

export default City