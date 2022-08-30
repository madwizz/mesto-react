import React from "react";

function PopupWithForm({
  name,
  title,
  isOpen,
  onClose,
  children,
  buttonText,
  onSubmit,
}) {
  return (
    <section className={`popup popup_${name} ${isOpen ? "popup_opened" : ""}`}>
      <div className="popup__content">
        <button
          className={`popup__close-button popup__close-button_${name}`}
          type="button"
          onClick={onClose}
        ></button>
        <form
          name={`${name}`}
          className={`popup__form popup__form_${name}`}
          onSubmit={onSubmit}
          noValidate
        >
          <h3 className={`popup__title popup__title_${name}`}>{`${title}`}</h3>
          {children}
          <button className="popup__submit-button" type="submit">
            {buttonText}
          </button>
        </form>
      </div>
    </section>
  );
}

export default PopupWithForm;