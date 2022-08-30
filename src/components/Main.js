import React from "react";

import pencilPath from "../images/pencil.svg";
import plusButtonPath from "../images/plus-button.svg";
import Card from "./Card";
import { api } from "../utils/Api";

function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) {
  const [userName, setUserName] = React.useState("");
  const [userDescription, setUserDescription] = React.useState("");
  const [userAvatar, setUserAvatar] = React.useState("");
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api
      .getUserInfo()
      .then((res) => {
        setUserName(res.name);
        setUserDescription(res.about);
        setUserAvatar(res.avatar);
      })
      .catch((error) => {
        console.log(error);
      });

    api
      .getInitialCards()
      .then((res) => setCards(...cards, res))
      .catch((error) => console.log(error));
  }, []);

  return (
    <main className="main">
      <section className="profile">
        <div className="profile__container">
          <div className="profile__avatar-container">
            <img className="profile__avatar" src={userAvatar} alt="аватар" />
            <button
              className="profile__avatar-button"
              onClick={onEditAvatar}
            ></button>
          </div>
          <div className="profile__info">
            <div className="profile__row">
              <h1 className="profile__name">{userName}</h1>
              <button
                className="profile__edit-button"
                type="button"
                onClick={onEditProfile}
              >
                <img src={pencilPath} alt="профиль-кнопка-редактировать" />
              </button>
            </div>
            <p className="profile__title">{userDescription}</p>
          </div>
        </div>
        <button className="profile__add-button" type="button">
          <img
            src={plusButtonPath}
            alt="профиль-кнопка-добавить"
            onClick={onAddPlace}
          />
        </button>
      </section>
      <section className="places">
        {cards.map((card) => (
          <Card
            name={card.name}
            key={card._id}
            link={card.link}
            likesCount={card.likes.length}
            onCardClick={onCardClick}
            card={card}
          />
        ))}
      </section>
    </main>
  );
}

export default Main;
