import React from "react";
import Card from "./card";
import './Card.css'
import CardsArray from "../items";
import { useState } from "react";

function CardsContainer(){

    const [isFlipped , setFlipped] = useState(false)
    return(
        <div className="cards-fields" >

              {CardsArray.map((item)=> (
      <Card image = {isFlipped? item.image : item.back}/>
    ))}

        </div>
    )
}
export default CardsContainer