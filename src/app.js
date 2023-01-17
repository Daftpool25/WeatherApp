import React, { useState, useEffect, useRef } from 'react';
import {Link, Route, Routes, BrowserRouter, useParams} from "react-router-dom";
import Menu from './components/container/menu';
import Home from "./components/page/home";
import About from "./components/page/about";
import City from "./components/page/city";
import axios from 'axios';
import "./styles/styles.scss"


function App() {


    //Const
    const key = "915ee00eb71d1d64d8339513f69a83c5"

    //Hooks
    const [currentCity, setCurrentCity] = useState("");
    const [favCities, setFavCities] = useState([]);
    const [catchState, setCatchState] = useState(false);



    //! GETDATA WITH AXIOS
        //?AXIOS SERVICES
        function getData(city) {

              //?AXIOS CONFIG (API REQUEST)
              const axiosCreate= axios.create({
                baseURL:`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`,
                responseType:"json",
                timeout:15000
              })

          return axiosCreate.get("",{
            validateStatus: function(status){
              return status < 500; 
            }
          })
        }

        //?GET REQUEST FROM THE API
        function getRequest(city) {
          getData(city).
            then((response) =>{

              const newCity={
                id:response.data.id,
                cityName:response.data.name,
                country:response.data.sys.country,
                altitude:response.data.coord.lat,
                latitude:response.data.coord.lon,
                weather:response.data.weather[0].main,
                description:response.data.weather[0].description,
                temperature:response.data.main.temp,
                max:response.data.main.temp_max,
                min:response.data.main.temp_min,
                humidity:response.data.main.humidity,
                icon: response.data.weather[0].icon
              }

              addCity(newCity);
              setCatchState(true);
            }).
            catch((error) => alert(error))
        }


    //!Search a City
    function addCity(cityObject) {
          setCurrentCity(cityObject)
    }

    



    //!Add city to favs
    function addToFav() {
      let ref= currentCity;
      let count=0;
      if (favCities.length >0){

        favCities.map( item => 
          {if(item.id===ref.id){count++}})

        if(count>0){alert("Already Exist")}else{
          setFavCities(prev => [...prev,ref])
        }
      }else{
        setFavCities(prev => [...prev,ref])
      }     

    }


    //!GET A CARD FROM YOUR FAVS
    function enterInACard(id) {
      const citySelected= favCities.find( item => item.id ===id)
      setCurrentCity(citySelected);
    }


    //! REMOVE -
    function remove (id){
      const newList= favCities.filter( item => item.id !== id);
      setFavCities(newList);
    }


    //!SORTS FUNCTIONS
    function sortByName() {
      function compare( a, b ){
        if ( a.cityName.toLowerCase() < b.cityName.toLowerCase()){
          return -1;
        }
        if ( a.cityName.toLowerCase() > b.cityName.toLowerCase()){
          return 1;
        }
        return 0;
      }
      let arrayRef=[...favCities];
      arrayRef.sort(compare);
      setFavCities(arrayRef);
    }


    function sortByWeather() {
      function compare( a, b ){
        if ( a.weather.toLowerCase() < b.weather.toLowerCase()){
          return -1;
        }
        if ( a.weather.toLowerCase() > b.weather.toLowerCase()){
          return 1;
        }
        return 0;
      }
      let arrayRef=[...favCities];
      arrayRef.sort(compare);
      setFavCities(arrayRef);
    }

    //!PARAMAS
    const routeParams=useParams();



  return (
    <BrowserRouter >
       <div className="all">
           {routeParams.name!== undefined? 
              <div></div>
              : 
              <main className="menu" id="Menu">
                    <Menu search={getRequest}></Menu>
              </main> 
            }
                <div className='generalContainer'>

                  
                    <Routes>
                        <Route exact path='/' element={<Home
                            favCitiesList={favCities}
                            getCard={enterInACard}
                            selectedCityName={currentCity.cityName}
                            state={catchState}
                            changeState={setCatchState}
                            sortName={sortByName}
                            sortWeather={sortByWeather}
                        />}></Route>
                        <Route path='/about' element={<About state={catchState} 
                                                              selectedCityName={currentCity.cityName}
                                                              changeState={setCatchState}

                        />}></Route>
                        <Route path="/city/:name" element={<City

                              //data
                              cityName={currentCity.cityName}
                              country={currentCity.country}
                              altitude={currentCity.altitude}
                              latitude={currentCity.latitude}
                              weather={currentCity.weather}
                              description={currentCity.description}
                              temperature={currentCity.temperature}
                              max={currentCity.max}
                              min={currentCity.min}
                              humidity={currentCity.humidity} 
                              id={currentCity.id}
                              icon={currentCity.icon}

                              //buttons
                              addCitytoFav={()=> addToFav()}
                              remove={remove}

                              //fetch
                              directCityValues={getRequest}
                              changeState={setCatchState}
                           />}
                        ></Route>
                        <Route exact path="/city/:name" element={<Home/>} />
                    </Routes>
                </div>
       </div>
    </BrowserRouter>
  )
}

export default App