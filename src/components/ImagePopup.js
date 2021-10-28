import React from "react";

function ImagePopup() {
  return (
    <div className="pop-up popup-image">
      <div className="pop-up__image-container">
        <div>
          <img src="#" alt="#" className="pop-up__img"/>
          <p className="pop-up__subtitle"></p>
        </div>
        <button type="button" className="pop-up__close-button pop-up__close-button_image"></button>
      </div>
    </div>
  )
}

export default ImagePopup;
