import React from 'react';

function Main() {

  return (
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
  )
}

export default Main;
