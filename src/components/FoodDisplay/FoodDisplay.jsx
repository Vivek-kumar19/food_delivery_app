import React, { useContext } from 'react'
import './FoodDisplay.css'
import { StoreContext } from '../../context/StoreContext'


function FoodDisplay({category}) {

    const {food_list} = useContext(StoreContext)
    // console.log(food_list);

  return (
    <div className='food-display' id='food-display' >
    <h2>Top dishes near you</h2>
    <div className='food-display-list'>
    {
        food_list.map((item,index)=>{
          return  <p key={index}>{item.name}</p>
        })
    }
    </div>
    </div>
  )
}

export default FoodDisplay