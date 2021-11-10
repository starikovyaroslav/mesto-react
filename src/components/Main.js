import React from 'react';
import api from '../utils/api';
import Card from './Card';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Main(props) {

const [cards, setCards] = React.useState([]);
const currentUser = React.useContext(CurrentUserContext)

React.useEffect(() => {
  api.getInitialCards()
    .then((res) => setCards(res))
    .catch((err) => console.log(err));
}, [])

function handleCardLike(card) {
  const isLiked = card.likes.some(i => i._id === currentUser._id);
  api.changeLikeCardStatus(card._id, !isLiked)
    .then((newCard) => {
      setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
    })
    .catch((err) => console.log(err));
}

function handleCardDelete(card) {
  api.deleteCard(card._id)
    .then(() => {
      setCards(cards.filter((state) => state !== card))
    })
    .catch((err) => console.log(err))
}

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar-wrapper">
          <img src={currentUser.avatar} name="avatar" alt="Аватар" className="profile__avatar"/>
          <div className="profile__avatar-overlay" onClick={props.onEditAvatar}></div>
        </div>
        <div className="profile__info">
          <div className="profile__container">
            <h1 className="profile__name">{currentUser.name}</h1>
            <button type="button" className="profile__edit-button" onClick={props.onEditProfile}></button>
          </div>
          <p className="profile__subtitle">{currentUser.about}</p>
        </div>
        <button type="button" className="profile__add-button" onClick={props.onAddPlace}></button>
      </section>

      <section className="gallery">
        <ul className="elements">
          {
            cards.map((card) => <Card
            key={card._id}
            card={card}
            onCardClick={props.onCardClick}
            onCardLike={handleCardLike}
            onCardDelete={handleCardDelete}
            />)
          }
        </ul>
      </section>
    </main>
  )
}

export default Main;
