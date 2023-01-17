import React from 'react'
import { useNavigate } from 'react-router-dom'

function Card({weather,tittle,selectCard,id}) {
  
  const Thunderstorm={
    background:"url('https://wallpapercave.com/dwp1x/wp5335726.jpg')",
    backgroundSize: "cover"

  }
  const Drizzle={
    background:"url('https://data.whicdn.com/images/353886689/original.jpg')",
    backgroundSize: "cover"

  }
  const Rain={
    background:"url('https://pbs.twimg.com/media/Ef9WWnvWsAA8Gzs.jpg')",
    backgroundSize: "cover"

  }
  const Snow={
    background:"url('https://i.pinimg.com/736x/68/1d/d5/681dd561f49a7ef1b2da7a69ed63a103.jpg')",
    backgroundSize: "cover"

  }
  const Atmosphere={
    background:"url('https://c1.wallpaperflare.com/preview/64/136/1006/mountain-landscape-peak-summit.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center"


  }
    const Clear={
    background:"url('https://e0.pxfuel.com/wallpapers/9/43/desktop-wallpaper-art-hipster-vintage-indie-soft-grunge-sunflower-blue-sky-white-clouds-inspiration-sunflower-graphy-sunflower-sunflower.jpg')",
    backgroundSize: "cover"
  }
  const Clouds={
    background:"url('https://images.unsplash.com/photo-1596869628264-2344d70a73ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2xvdWQlMjBhZXN0aGV0aWN8ZW58MHx8MHx8&w=1000&q=80')",
    backgroundSize: "cover"

  }

  let  image;

  if(weather==="Clouds"){image =Clouds}
  else if (weather==="Clouds"){image =Clouds}
  else if (weather==="Mist"){image =Atmosphere}
  else if (weather==="Snow"){image =Snow}
  else if (weather==="Rain"){image =Rain}
  else if (weather==="Drizzle"){image =Drizzle}
  else if (weather==="Thunderstorm"){image =Thunderstorm}
  else{image =Clear}

  //!Nagigate to city page when select a card
  const navigateTo=useNavigate();
  function enterInACard(){
    selectCard(id);
    navigateTo(`/city/${tittle}`)
  }

  return (
        <div className="cardContainer" onClick={enterInACard}>
          <div style={image} className="weatherPhoto"></div>
          <div className="data">
              <h1>{weather}</h1>
              <p>{tittle}</p>
          </div>
        </div>
  )
}

export default Card