import React from "react";
import Card from "./card";
import './Card.css'
import CardsArray from "../items";

function CardsContainer(){
    return(
        <div className="cards-fields">

              {CardsArray.map((item)=> (
      <Card image = {item.image}/>
    ))}

        </div>
    )
}
export default CardsContainer