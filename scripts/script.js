const editButton = document.querySelector('.edit-button');
const editForm = document.querySelector('.popup__edit');
const popup = document.querySelector('.popup');
const editPopup = document.querySelector('#popup-edit');
const closeButton = document.querySelector('.popup__button_close');
const addButton = document.querySelector('.add-button');
const addPopup = document.querySelector('#add-popup');
const elementsContainer = document.querySelector('.elements');
const closedButton = document.querySelector('.popup__button_closed');
const savedButton = document.querySelector('.popup__button_saved');
const deleteButton = document.querySelector('.delete-button');
const imgPopup = document.querySelector('#popup__img');
const clsButton = document.querySelector('.popup__button_cls');
const bigImg = document.querySelector('.popup__imgUp');
const titleImg = document.querySelector('.popup__title');
const initialCards = [
  {
      name: 'Альбукерке, США',
      link: './image/gallery/ian-dooley-TevqnfbI0Zc-unsplash.jpg'
  },
  {
      name: 'Озеро Намак, Иран',
      link: './image/gallery/hasan-almasi-5ddKJB6fgTQ-unsplash.jpg'
  },
  {
      name: 'Цитадель, Будапешт, Венгрия',
      link: './image/gallery/daniel-olah-TbU9iOkSzcs-unsplash.jpg'
  },
  {
      name: 'Озеро Раттлснейк, США',
      link: './image/gallery/nate-rayfield-_WR6tUIAJe8-unsplash.jpg'
  },
  {
      name: 'Lago di Braies, Braies, Южный Тироль, Италия',
      link: './image/gallery/daniel-j-schwarz-7zgMXFfcf1Q-unsplash.jpg'
  },
  {
      name: 'Сады у залива, Сингапур',
      link: './image/gallery/hu-chen-5O6c_pLziXs-unsplash.jpg'
  }
];

// открытие/закрытие попапа для профиля
function popupCloseOpen (popup) {
  popup.classList.toggle('popup_opened');
}

// заполнение формы данными из профиля
function formEdit () {
  const titleProfile = document.querySelector('.profile__title');
  const subtitleProfile = document.querySelector('.profile__subtitle');
  const nameInput = document.querySelector('.popup__item_name');
  const jobInput = document.querySelector('.popup__item_about');
  nameInput.value = titleProfile.textContent;
  jobInput.value = subtitleProfile.textContent;
}

editButton.addEventListener('click', () => {
  popupCloseOpen(editPopup);
  formEdit();
});

// сохранение данных из формы в строки профиля
function formSubmitHandler (evt) {
  evt.preventDefault();
  const nameInput = document.querySelector('.popup__item_name');
  const jobInput = document.querySelector('.popup__item_about');
  const titleProfile = document.querySelector('.profile__title');
  const subtitleProfile = document.querySelector('.profile__subtitle');
  titleProfile.textContent = nameInput.value;
  subtitleProfile.textContent = jobInput.value;
  popupCloseOpen(editPopup);
}

editForm.addEventListener('submit', formSubmitHandler);

closeButton.addEventListener('click', function () {
  popupCloseOpen(editPopup);
});

// собираем карточку из temlate
function addCard(titleValue, imgValue) {
  const elementTemplate = document.querySelector('#element-temlate').content;
  const imageElement = elementTemplate.cloneNode(true);
  imageElement.querySelector('.element__img').src = imgValue;
  imageElement.querySelector('.element__title').textContent = titleValue;
  imageElement.querySelector('.delete-button').addEventListener('click', handleDeleteButtonClick); // нажатие на кнопку удаления картинки
  imageElement.querySelector('.like-button').addEventListener('click', handleLikeButtonClick); // нажатие на кнопку лайка
  imageElement.querySelector('.element__img').addEventListener('click', function handleImgClick(evt) { // нажатие на картинку для ее увеличения
    popupCloseOpen(imgPopup);
    bigImg.src = evt.target.src;
    titleImg.textContent = titleValue;
  })
  elementsContainer.prepend(imageElement);
}

// очистка формы
function resetForm () {
  editForm.reset();
}

addButton.addEventListener('click', function () {
  popupCloseOpen(addPopup);
});

// добавление картинок через форму
savedButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  const title = document.querySelector('.popup__item_name-place');
  const image = document.querySelector('.popup__item_link-place');
  addCard(title.value, image.value);
  resetForm();
  popupCloseOpen(addPopup);
});

closedButton.addEventListener('click', function () {
  popupCloseOpen(addPopup);
  resetForm();
});

// удаление карточек
function handleDeleteButtonClick(elements){
  elements.target.closest('.element').remove();
};

// нажатие на кнопку лайка
function handleLikeButtonClick (evt) {
  evt.target.classList.toggle('like-button_active');
}

clsButton.addEventListener('click', function () {
  popupCloseOpen(imgPopup);
});

function initializationCards () {
  initialCards.forEach(function (element) {
    addCard(element.name, element.link);
    });
}

initializationCards();
