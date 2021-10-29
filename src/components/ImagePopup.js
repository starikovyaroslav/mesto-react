import React from "react";

function ImagePopup(props) {
  return (
    <div className={`pop-up popup-image ${props.card ? 'pop-up_opened' : ''}`}>
      <div className="pop-up__image-container">
        <div>
          <img src={props.card.link} alt={props.card.name} className="pop-up__img"/>
          <p className="pop-up__subtitle">{props.card.name}</p>
        </div>
        <button type="button" className="pop-up__close-button pop-up__close-button_image" onClick={props.onClose}></button>
      </div>
    </div>
  )
}

export default ImagePopup;
