import React from "react";

const Card = ({ card, name, link, likesCount, onCardClick }) => {
  return (
    <article className="place">
      <img
        className="place__photo"
        src={link}
        alt={name}
        onClick={() => onCardClick(card)}
      />
      <div className="place__info">
        <h2 className="place__name">{name}</h2>
        <div className="place__like-container">
          <button className="place__like-button" type="button"></button>
          <p className="place__likes-count">{likesCount}</p>
        </div>
      </div>
      <button className="place__delete-button" type="button"></button>
    </article>
  );
};

export default Card;
