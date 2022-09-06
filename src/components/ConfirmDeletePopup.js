import React from "react";
import PopupWithForm from "./PopupWithForm";

function ConfirmDeletePopup({
  isOpen,
  onClose,
  card,
  onDelete,
  renderLoading,
}) {
  function handleSubmit(evt) {
    evt.preventDefault();
    onDelete(card);
  }

  return (
    <PopupWithForm
      name="delete"
      title="Вы уверены"
      isOpen={isOpen}
      onClose={onClose}
      buttonText="Да"
      onSubmit={handleSubmit}
    />
  );
}

export default ConfirmDeletePopup;
