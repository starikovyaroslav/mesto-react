import React from 'react';
import api from '../utils/api';
import Card from './Card';
function Main(props) {

const [userName, setUserName] = React.useState();
const [userDescription, setUserDescription] = React.useState();
const [userAvatar, setUserAvatar] = React.useState();
const [cards, setCards] = React.useState([]);

React.useEffect(() => {
  api.getUserInfo()
    .then((res) => {
      setUserAvatar(res.avatar);
      setUserName(res.name);
      setUserDescription(res.about)
    })
    .catch((err) => console.log(err));
}, [])

React.useEffect(() => {
  api.getInitialCards()
    .then((res) => setCards(res))
    .catch((err) => console.log(err));
}, [])

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar-wrapper">
          <img src={userAvatar} name="avatar" alt="Аватар" className="profile__avatar"/>
          <div className="profile__avatar-overlay" onClick={props.onEditAvatar}></div>
        </div>
        <div className="profile__info">
          <div className="profile__container">
            <h1 className="profile__name">{userName}</h1>
            <button type="button" className="profile__edit-button" onClick={props.onEditProfile}></button>
          </div>
          <p className="profile__subtitle">{userDescription}</p>
        </div>
        <button type="button" className="profile__add-button" onClick={props.onAddPlace}></button>
      </section>

      <section className="gallery">
        <ul className="elements">
          {
            cards.map((card) => <Card key={card._id} card={card} onCardClick={props.onCardClick}/>)
          }
        </ul>
      </section>
    </main>
  )
}

export default Main;
