import React from "react";

function Card(props) {


  return (
    <li className="element">
      <button type="button" className="element__delete-button"></button>
      <img src={props.card.link} alt={props.card.name} className="element__image"/>
      <div className="element__container">
        <h2 className="element__title">{props.card.name}</h2>
        <div className="element__like-wrapper">
          <button type="button" className="element__like-button"></button>
          <span className="element__like-count">{props.card.likes.length}</span>
        </div>
      </div>
    </li>
  )
}

export default Card
