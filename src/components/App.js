import React from "react";

import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false);
  const [IsAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});

  const handleCardClick = (card) => {
    setSelectedCard(card);
    setIsImagePopupOpen(true);
  };
  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true);
  };
  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true);
  };
  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true);
  };
  const closeAllPopups = () => {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsImagePopupOpen(false);
    setSelectedCard({});
  };

  return (
    <div className="root">
      <Header />
      <Main
        onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onCardClick={handleCardClick}
      />
      <Footer />

      <PopupWithForm
        name="avatar"
        title="Обновить аватар"
        buttonText="Сохранить"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      >
        <label className="popup__label" htmlFor="avatar">
          <input
            id="avatar"
            name="avatar"
            placeholder="Ссылка на картинку"
            type="url"
            required
            className="popup__info popup__info_input_avatar"
          />
          <div className="popup__error-message-container">
            <span id="avatar-error" className="popup__error-message"></span>
          </div>
        </label>
      </PopupWithForm>

      <PopupWithForm
        name="edit"
        title="Редактировать профиль"
        buttonText="Сохранить"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      >
        <label className="popup__label" htmlFor="profile-name">
          <input
            id="profile-name"
            name="name"
            placeholder="Имя"
            type="text"
            required
            minLength="2"
            maxLength="40"
            className="popup__info popup__info_input_profile-name"
          />
          <div className="popup__error-message-container">
            <span
              id="profile-name-error"
              className="popup__error-message"
            ></span>
          </div>
        </label>
        <label className="popup__label" htmlFor="profile-title">
          <input
            id="profile-title"
            name="about"
            placeholder="О себе"
            type="text"
            required
            minLength="2"
            maxLength="200"
            className="popup__info popup__info_input_profile-title"
          />
          <div className="popup__error-message-container">
            <span
              id="profile-title-error"
              className="popup__error-message"
            ></span>
          </div>
        </label>
      </PopupWithForm>

      <PopupWithForm
        name="add"
        title="Новое Место"
        buttonText="Сохранить"
        isOpen={IsAddPlacePopupOpen}
        onClose={closeAllPopups}
      >
        <label className="popup__label" htmlFor="place-name">
          <input
            id="place-name"
            name="name"
            placeholder="Название"
            type="text"
            required
            minLength="2"
            maxLength="30"
            className="popup__info popup__info_input_place-name"
          />
          <div className="popup__error-message-container">
            <span id="place-name-error" className="popup__error-message"></span>
          </div>
        </label>
        <label className="popup__label" htmlFor="place-link">
          <input
            id="place-link"
            name="link"
            placeholder="Ссылка на картинку"
            type="url"
            required
            className="popup__info popup__info_input_place-link"
          />
          <div className="popup__error-message-container">
            <span id="place-link-error" className="popup__error-message"></span>
          </div>
        </label>
      </PopupWithForm>

      {/* <PopupWithForm
        name='delete'
        title='Вы уверены?'
        buttonText='Да'
      >
      </PopupWithForm> */}

      <ImagePopup
        card={selectedCard}
        isOpen={isImagePopupOpen}
        onClose={closeAllPopups}
      />
    </div>
  );
}

export default App;
