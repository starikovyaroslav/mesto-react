import React from 'react';

function PopupWithForm(props) {
  return (
    <div className={`pop-up popup-${props.name}`}>
      <div className="pop-up__container">
        <form className="pop-up__form form" name={props.name} noValidate>
          <h2 className={`pop-up__title pop-up__title_${props.name}`}>{props.title}</h2>
          {props.children}
          <button type="submit" className="pop-up__submit-button form__submit">{props.button}</button>
        </form>
        <button type="button" className={`pop-up__close-button pop-up__close-button_${props.name}`}></button>
      </div>
    </div>
  )
}

export default PopupWithForm;
