import React from 'react'
import './Card.css'

const Card = (props) => {
  return (
    <>
    <div className="cards">
                <div className="card">
                    <img src={props.imgsrc} alt="pic" className="cardImg"/>
                    <div className="cardInfo">
                        <span className="cardCategory">{props.title}</span>
                        <h3 className="cardTitle">{props.sname}</h3>
                        <a href={props.link} target="_blank" rel="noreferrer">
                            <button>Watch Now</button>
                        </a>
                    </div>
                </div>

    </div>
    </>
  )
}

export default Card