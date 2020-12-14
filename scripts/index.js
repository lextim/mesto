const popup = document.querySelector('.popup');
const buttonOpenPopup = document.querySelector('.profile__button.profile__button_edit');
const buttonClosePopup = document.querySelector('.popup__image-close');
let form = document.querySelector(".popup__form");
let nameInput = document.querySelector('#title');
let profileTitle = document.querySelector(".profile__title");
let jobInput = document.querySelector('#subtitle');
let profileSubtitle = document.querySelector(".profile__subtitle");
const popupCard = document.querySelector('.popup-card');
const buttonOpenPopupCard = document.querySelector('.profile__button.profile__button_add');
const buttonClosePopupCard = document.querySelector('.popup-card__image-close');
let formCard = document.querySelector('.popup-card__form');
let placeInput = document.querySelector('#namecard');
let urlInput = document.querySelector('#urlcard');
const popupImage = document.querySelector('.popup-image');
const popupImagePic = document.querySelector('.popup-image__pic');
const popupImageAlt = document.querySelector('.popup-image__alt');
const initialCards = [{
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

const elementCards = document.querySelector(".elements");
const elementCard = document.querySelector("#element__templade").content;

function newCard(item, flag = true) {
    const cardElement = elementCard.cloneNode(true);
    cardElement.querySelector('.element__image').src = item.link;
    cardElement.querySelector('.element__text').textContent = item.name;
    const cardLikes = cardElement.querySelector('.element__like');
    const card = cardElement.querySelector('.element');
    const deleteButton = cardElement.querySelector('.element__trash');
    const photo = cardElement.querySelector('.element__image');
    cardLikes.addEventListener('click', () => {
        cardLikes.classList.toggle('element__like_active');
    });
    deleteButton.addEventListener('click', () => {
        card.remove();
    });
    photo.addEventListener('click', () => {
        fullPhoto(item);
        openPopupImage();
    });
    flag ? elementCards.append(cardElement) : elementCards.prepend(cardElement);
}


formCard.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const oneNewPlace = { name: placeInput.value, link: urlInput.value };
    newCard(oneNewPlace, false);
    closePopupCard()
})


const fullPhoto = (item) => {
    const text = popup - image.querySelector(`.popup-image__pic`);
    const img = popup - image.querySelector(`.popup-image__alt`);
    text.textContent = item.name;
    img.src = item.link;
};

function openPopup() {
    nameInput.value = profileTitle.textContent;
    jobInput.value = profileSubtitle.textContent;
    popup.classList.toggle("popup_is-opened");
}

function openPopupCard() {
    popupCard.classList.toggle("popup-card_is-opened");
}

function openPopupImage() {
    popupImage.classList.toggle("element__image");
}

function closePopupCard() {
    popupCard.classList.toggle("popup-card_is-opened");
}

function closePopup() {
    popup.classList.toggle("popup_is-opened");
}

function closePopupImage() {
    popupImage.classList.toggle("element__image");
}



function formSubmitHandler(evt) {
    evt.preventDefault();
    profileTitle.textContent = nameInput.value;
    profileSubtitle.textContent = jobInput.value;
    closePopup();
}


initialCards.forEach(newCard);
buttonOpenPopupCard.addEventListener("click", openPopupCard);
buttonOpenPopup.addEventListener("click", openPopup);
buttonClosePopup.addEventListener("click", closePopup);
buttonClosePopupCard.addEventListener("click", closePopupCard);
form.addEventListener('submit', formSubmitHandler);