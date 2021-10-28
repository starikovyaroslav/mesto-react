import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {

  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);

  function handleEditProfileClick() {
    setEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true);
  }

  function closeAllPopups() {
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setEditAvatarPopupOpen(false);
  }

  return (
    <div className="App page">

      <Header/>

      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
      />

      <Footer/>

      <PopupWithForm
        name="edit"
        title="Редактировать профиль"
        button="Сохранить"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      >
        <input type="text" id="profile-name-input" className="pop-up__input pop-up__input_place_name form__input" placeholder="Имя" name="name" minLength="2" maxLength="40" required/>
        <span className="form__input-error profile-name-input-error"></span>
        <input type="text" id="about-input" className="pop-up__input pop-up__input_place_about form__input" placeholder="О себе" name="about" minLength="2" maxLength="200" required/>
        <span className="form__input-error about-input-error"></span>
      </PopupWithForm>

      <PopupWithForm
        name="add"
        title="Новое место"
        button="Сохранить"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      >
        <input type="text" id="place-name-input" className="pop-up__input pop-up__input_place_name form__input" placeholder="Название" name="placeName" minLength="2" maxLength="30" required/>
        <span className="form__input-error place-name-input-error"></span>
        <input type="url" id="link-input" className="pop-up__input pop-up__input_place_link form__input" placeholder="Ссылка на картинку" name="link" required/>
        <span className="form__input-error link-input-error"></span>
      </PopupWithForm>

      <ImagePopup/>

      <PopupWithForm
        name="del"
        title="Вы уверены?"
        button="Да"
        onClose={closeAllPopups}
      />

      {/* <div className="pop-up popup-avatar">
        <div className="pop-up__container">
          <form className="pop-up__form form" name="update-avatar" noValidate>
            <h2 className="pop-up__title pop-up__title_avatar">Обновить аватар</h2>
            <input type="url" id="avatar-input" className="pop-up__input pop-up__input_place_avatar form__input" name="avatar" placeholder="Ссылка на аватар" required/>
            <span className="form__input-error avatar-input-error"></span>
            <button type="submit" className="pop-up__submit-button form__submit">Сохранить</button>
          </form>
          <button type="button" className="pop-up__close-button pop-up__close-button_avatar"></button>
        </div>
      </div> */}

      <PopupWithForm
        name="avatar"
        title="Обновить аватар"
        button="Сохранить"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      >
        <input type="url" id="avatar-input" className="pop-up__input pop-up__input_place_avatar form__input" name="avatar" placeholder="Ссылка на аватар" required/>
        <span className="form__input-error avatar-input-error"></span>
      </PopupWithForm>

      <template id="element-template">
        <li className="element">
          <button type="button" className="element__delete-button"></button>
          <img src="#" alt="#" className="element__image"/>
          <div className="element__container">
            <h2 className="element__title"></h2>
            <div className="element__like-wrapper">
              <button type="button" className="element__like-button"></button>
              <span className="element__like-count">0</span>
            </div>
          </div>
        </li>
      </template>

    </div>


  );
}

export default App;
