const editButton = document.querySelector('.edit-button');
const editForm = document.querySelector('.popup__edit');
const popup = document.querySelector('.popup');
const closeButton = document.querySelector('.popup__button_close');
const addButton = document.querySelector('.add-button');
const addPopup = document.querySelector('.add-popup');
const elementsContainer = document.querySelector('.elements');
const closedButton = document.querySelector('.popup__button_closed');
const savedButton = document.querySelector('.popup__button_saved');
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
function formCloseOpen () {
  const titleProfile = document.querySelector('.profile__title');
  const subtitleProfile = document.querySelector('.profile__subtitle');
  let nameInput = document.querySelector('.popup__item_name');
  let jobInput = document.querySelector('.popup__item_about');
  nameInput.value = titleProfile.textContent;
  jobInput.value = subtitleProfile.textContent;
  popup.classList.toggle('popup_opened');
}

editButton.addEventListener('click', formCloseOpen);
closeButton.addEventListener('click', formCloseOpen);

// сохранение данных из формы в строки профиля
function formSubmitHandler (evt) {
  evt.preventDefault();
  const nameInput = document.querySelector('.popup__item_name');
  const jobInput = document.querySelector('.popup__item_about');
  let titleProfile = document.querySelector('.profile__title');
  let subtitleProfile = document.querySelector('.profile__subtitle');
  titleProfile.textContent = nameInput.value;
  subtitleProfile.textContent = jobInput.value;
  formCloseOpen();
}

editForm.addEventListener('submit', formSubmitHandler);

// открытие/закрытие попапа для добавления картинки
function formAdd () {
  let namePlace = document.querySelector('.popup__item_name-place');
  let linkPlace = document.querySelector('.popup__item_link-place');
  addPopup.classList.toggle('popup_opened');
}


// собираем карточку из temlate
function addImg(titleValue, imgValue) {
  const elementTemplate = document.querySelector('#element-temlate').content;
  const imageElement = elementTemplate.cloneNode(true);
  imageElement.querySelector('.element__img').src = imgValue;
  imageElement.querySelector('.element__title').textContent = titleValue;
  elementsContainer.prepend(imageElement);
}

// добавление картинок через форму
savedButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  const title = document.querySelector('.popup__item_name-place');
  const image = document.querySelector('.popup__item_link-place');
  addImg(title.value, image.value);
  image.value = '';
  title.value = '';
  formAdd();
});

addButton.addEventListener('click', formAdd);
closedButton.addEventListener('click', formAdd);

initialCards.forEach(function (element) {
  elementsContainer.prepend(addImg(element.name, element.link));
});
