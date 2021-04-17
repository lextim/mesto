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

const ESCAPE = `Escape`;
const popupProfile = document.querySelector('.popup-profile');
const popupCard = document.querySelector('.popup-card');
const popupImage = document.querySelector('.popup-image');

const profileForm = popupProfile.querySelector(".popup__form");
const formCard = popupCard.querySelector('.popup-card__form');


const profilePopupOpenButton = document.querySelector('.profile__button.profile__button_edit');

const profilePopupCloseButton = document.querySelector('.popup__image-close');
const buttonClosePopupImage = document.querySelector('.popup-image__image-close');

const buttonOpenPopupCard = document.querySelector('.profile__button.profile__button_add');
const buttonClosePopupCard = document.querySelector('.popup-card__image-close');

const nameInput = document.querySelector('#title');
const profileTitle = document.querySelector(".profile__title");
const jobInput = document.querySelector('#subtitle');
const profileSubtitle = document.querySelector(".profile__subtitle");
const placeInput = document.querySelector('#namecard');
const urlInput = document.querySelector('#urlcard');
const imagePopupTitle = popupImage.querySelector(`.popup-image__alt`);
const imagePopupImage = popupImage.querySelector(`.popup-image__pic`);

const elementCards = document.querySelector(".elements");
const elementCard = document.querySelector("#template").content;

function createCard(item, flag = true) {
    const cardElement = elementCard.cloneNode(true);
    const cardLike = cardElement.querySelector('.element__like');
    const card = cardElement.querySelector('.element');
    const deleteButton = cardElement.querySelector('.element__trash');
    const title = cardElement.querySelector('.element__text')
    const photo = cardElement.querySelector('.element__image');
    photo.src = item.link;
    photo.alt = item.name;
    title.textContent = item.name;

    cardLike.addEventListener('click', () => {
        cardLike.classList.toggle('element__like_active');
    });
    deleteButton.addEventListener('click', () => {
        card.remove();
    });
    photo.addEventListener('click', () => {
        fullPhoto(item);
        openPopupImage();
    });
    return cardElement
}


function addCard(item, flag = true) {
    const cardElement = createCard(item)
    flag ? elementCards.append(cardElement) : elementCards.prepend(cardElement);
}


formCard.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const oneNewPlace = { name: placeInput.value, link: urlInput.value };
    addCard(oneNewPlace, false);
    closePopupCard()
})


const fullPhoto = (item) => {
    imagePopupTitle.textContent = item.name;
    imagePopupImage.src = item.link;
};

function openPopup(popup) {
    popup.classList.add("popup_is-opened");
}

function closePopup(popup) {
    popup.classList.remove("popup_is-opened");
}

function closeEscape (button) {
    if (button.key === "ESCAPE");

        closePopupProfile()
}

function openPopupProfile() {
    nameInput.value = profileTitle.textContent;
    jobInput.value = profileSubtitle.textContent;
    openPopup(popupProfile);
}

function closePopupProfile() {
    closePopup(popupProfile);
}

function openPopupCard() {
    openPopup(popupCard)
}

function openPopupImage() {
    openPopup(popupImage)
}

function closePopupCard() {
    closePopup(popupCard)
}

function closePopupImage() {
    closePopup(popupImage)
}



function formSubmitHandler(evt) {
    evt.preventDefault();
    profileTitle.textContent = nameInput.value;
    profileSubtitle.textContent = jobInput.value;
    closePopup(popupProfile);
}


initialCards.forEach(addCard);
buttonOpenPopupCard.addEventListener("click", openPopupCard);
profilePopupOpenButton.addEventListener("click", openPopupProfile);
profilePopupCloseButton.addEventListener("click", closePopupProfile);
buttonClosePopupCard.addEventListener("click", closePopupCard);
buttonClosePopupImage.addEventListener("click", closePopupImage);
profileForm.addEventListener('submit', formSubmitHandler);