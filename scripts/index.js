const popup = document.querySelector('.popup');
const buttonOpenPopup = document.querySelector('.profile__button.profile__button_edit');
const buttonClosePopup = document.querySelector('.popup__image-close');
let form = document.querySelector(".popup__form");
let nameInput = document.querySelector('#title');
let profileTitle = document.querySelector(".profile__title");
let jobInput = document.querySelector('#subtitle');
let profileSubtitle = document.querySelector(".profile__subtitle");
let saveButton = document.querySelector('.popup__button-safe');

function openClosePopup () {
    popup.classList.toggle("popup_is-opened");
}

function formSubmitHandler (evt) {
    evt.preventDefault(); 
    profileTitle.textContent = nameInput.value;
    profileSubtitle.textContent = jobInput.value;
    openClosePopup();
}

buttonOpenPopup.addEventListener("click", openClosePopup);
buttonClosePopup.addEventListener("click", openClosePopup);
saveButton.addEventListener('click', formSubmitHandler);
