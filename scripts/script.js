const root = document.querySelector('.root');
const content = root.querySelector('.content');
const profile = content.querySelector('.profile');
const editButton = profile.querySelector('.edit-button');
const editForm = root.querySelector('.popup__edit');
const popup = root.querySelector('.popup');
const closeButton = root.querySelector('.popup__button_close');


function formCloseOpen () {
  const titleProfile = profile.querySelector('.profile__title');
  const subtitleProfile = profile.querySelector('.profile__subtitle');

  let nameInput = editForm.querySelector('.popup__item_name');
  let jobInput = editForm.querySelector('.popup__item_about');

  nameInput.value = titleProfile.textContent;
  jobInput.value = subtitleProfile.textContent;

  if(popup.classList.contains('popup_opened') !== false) {
    popup.classList.toggle('popup_opened');
  }
  else {
    popup.classList.toggle('popup_opened');
  }
}

editButton.addEventListener('click', formCloseOpen);
closeButton.addEventListener('click', formCloseOpen);

function formSubmitHandler (evt) {
  evt.preventDefault();

  const nameInput = editForm.querySelector('.popup__item_name');
  const jobInput = editForm.querySelector('.popup__item_about');

  let titleProfile = profile.querySelector('.profile__title');
  let subtitleProfile = profile.querySelector('.profile__subtitle');

  titleProfile.textContent = nameInput.value;
  subtitleProfile.textContent = jobInput.value;

  formCloseOpen();
}

editForm.addEventListener('submit', formSubmitHandler);
