import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/frontend_assets/assets'

const ExploreMenu = ({category,setCategory}) => {
  return (
    <div className='exploreMenu' id='exploreMenu' >
     <h1>Explore our menu</h1>
     <p className='exploreMenuText'>
     Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
     </p>
     <div className='exploreMenuList'>
    {
      menu_list.map((item,index)=>{
        return (
          <div key={index} className='exploreMenuListItem'>
            <img src={item.menu_image} alt={item.menu_image}  />
            <p>{item.menu_name}</p>
          </div>
        )
      })
    }
     </div>
     <hr/>
    </div>
  )
}

export default ExploreMenu