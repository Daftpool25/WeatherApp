import React, { useState } from 'react'

function Menu({search}) {

  const [searchValue, setSearchValue] = useState("");
  

  return (
      <div className="menuItemsContainer1" id='menuContainer'>

        <div className='upContainer'>
              
                  <input type="text" value={searchValue} onChange={e => setSearchValue(e.target.value)} placeholder='Search a city'/>
                 <button className="btnSearch" onClick={() => search(searchValue)}>
                      <span class="material-symbols-outlined">search</span> 
                      Search
                  </button>
        </div>


      </div>
  )
}

export default Menu

// <button className="btnDark"><span class="material-symbols-outlined">dark_mode</span> DarkMode</button>
