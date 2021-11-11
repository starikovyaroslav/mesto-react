import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';
import api from '../utils/api';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function App() {

  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);
  const [currentUser, setCurrentUser] = React.useState({});
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api.getUserInfo()
      .then((res) => setCurrentUser(res))
      .catch((err) => console.log(err));
  }, [])

  React.useEffect(() => {
    api.getInitialCards()
      .then((res) => setCards(res))
      .catch((err) => console.log(err));
  }, [])

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
    setSelectedCard(null);
  }

  function onCardClick(card) {
    setSelectedCard(card)
  }

  function handleUpdateUser(data) {
    api.setUserInfo(data)
      .then((res) => {
        setCurrentUser(res);
        closeAllPopups();
      })
      .catch((err) => console.log(err));
  }

  function handleUpdateAvatar(data) {
    api.editAvatar(data)
      .then((res) => {
        setCurrentUser(res);
        closeAllPopups();
      })
      .catch((err) => console.log(err))
  }

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

  function handleAddPlaceSubmit(data) {
    api.addCard(data)
      .then((res) => {
        setCards([res, ...cards]);
        closeAllPopups();
      })
      .catch((err) => console.log(err))
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>

      <div className="App page">

        <Header/>

        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={onCardClick}
          handleCardLike={handleCardLike}
          handleCardDelete={handleCardDelete}
          cards={cards}
        />

        <Footer/>

        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
        />

        <AddPlacePopup
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          onAddPlace={handleAddPlaceSubmit}
        />

        <ImagePopup
          card={selectedCard}
          onClose={closeAllPopups}
        />

        <PopupWithForm
          name="del"
          title="Вы уверены?"
          button="Да"
          onClose={closeAllPopups}
        />

        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          onUpdateAvatar={handleUpdateAvatar}
        />

      </div>

    </CurrentUserContext.Provider>
  );
}

export default App;
