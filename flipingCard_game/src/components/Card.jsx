import React from "react";
import './Card.css'
function Card(props) {
    const { image , isFlipped} = props

    return (
        <>
            <div className="card-border">
                <img src={image}/>
            </div>
        </>
    )
}
export default Card