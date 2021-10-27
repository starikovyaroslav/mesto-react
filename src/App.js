import React from 'react'

function App() {
  return (
    <div className="App page">
      <header className="header">
        <img src="<%=require('./images/header-logo.svg')%>" alt="Лого" className="header__logo"/>
      </header>

      <main className="content">
        <section className="profile">
          <div className="profile__avatar-wrapper">
            <img src="<%=require('./images/profile-avatar.jpg')%>" name="avatar" alt="Аватар" className="profile__avatar"/>
            <div className="profile__avatar-overlay"></div>
          </div>
          <div className="profile__info">
            <div className="profile__container">
              <h1 className="profile__name">Стариков Ярослав</h1>
              <button type="button" className="profile__edit-button"></button>
            </div>
            <p className="profile__subtitle">Изучаю Веб</p>
          </div>
          <button type="button" className="profile__add-button"></button>
        </section>

        <section className="gallery">
          <ul className="elements"></ul>
        </section>
      </main>

      <footer className="footer">
        <p className="footer__subtitle">© 2021 Mesto Russia</p>
      </footer>

      <div className="pop-up popup-edit">
        <div className="pop-up__container">
          <form className="pop-up__form form" name="form-edit" novalidate>
            <h2 className="pop-up__title">Редактировать профиль</h2>
            <input type="text" id="profile-name-input" className="pop-up__input pop-up__input_place_name form__input" placeholder="Имя" name="name" minlength="2" maxlength="40" required/>
            <span className="form__input-error profile-name-input-error"></span>
            <input type="text" id="about-input" className="pop-up__input pop-up__input_place_about form__input" placeholder="О себе" name="about" minlength="2" maxlength="200" required/>
            <span className="form__input-error about-input-error"></span>
            <button type="submit" className="pop-up__submit-button form__submit">Сохранить</button>
          </form>
          <button type="button" className="pop-up__close-button"></button>
        </div>
      </div>

      <div className="pop-up popup-add">
        <div className="pop-up__container">
          <form className="pop-up__form form" name="form-add" novalidate>
            <h2 className="pop-up__title">Новое место</h2>
            <input type="text" id="place-name-input" className="pop-up__input pop-up__input_place_name form__input" placeholder="Название" name="placeName" minlength="2" maxlength="30" required/>
            <span className="form__input-error place-name-input-error"></span>
            <input type="url" id="link-input" className="pop-up__input pop-up__input_place_link form__input" placeholder="Ссылка на картинку" name="link" required/>
            <span className="form__input-error link-input-error"></span>
            <button type="submit" className="pop-up__submit-button form__submit">Сохранить</button>
          </form>
          <button type="button" className="pop-up__close-button pop-up__close-button_add-card"></button>
        </div>
      </div>

      <div className="pop-up popup-image">
        <div className="pop-up__image-container">
          <div>
            <img src="#" alt="#" className="pop-up__img"/>
            <p className="pop-up__subtitle"></p>
          </div>
          <button type="button" className="pop-up__close-button pop-up__close-button_image"></button>
        </div>
      </div>

      <div className="pop-up popup-del">
        <div className="pop-up__container">
          <form className="pop-up__form form" novalidate>
            <h2 className="pop-up__title pop-up__title_del">Вы уверены?</h2>
            <button type="submit" className="pop-up__submit-button form__submit">Да</button>
          </form>
          <button type="button" className="pop-up__close-button pop-up__close-button_del"></button>
        </div>
      </div>

      <div className="pop-up popup-avatar" >
        <div className="pop-up__container">
          <form className="pop-up__form form" name="update-avatar" novalidate>
            <h2 className="pop-up__title pop-up__title_avatar">Обновить аватар</h2>
            <input type="url" id="avatar-input" className="pop-up__input pop-up__input_place_avatar form__input" name="avatar" placeholder="Ссылка на аватар" required/>
            <span className="form__input-error avatar-input-error"></span>
            <button type="submit" className="pop-up__submit-button form__submit">Сохранить</button>
          </form>
          <button type="button" className="pop-up__close-button pop-up__close-button_avatar"></button>
        </div>
      </div>

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
