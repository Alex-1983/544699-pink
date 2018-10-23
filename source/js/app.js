var navMain = document.querySelector(".main-nav");
var navToggle = document.querySelector(".main-nav__toggle");

navMain.classList.remove("main-nav--nojs");

navToggle.addEventListener("click", function() {
  if (navMain.classList.contains("main-nav--closed")) {
    navMain.classList.remove("main-nav--closed");
    navMain.classList.add("main-nav--opened");
  } else {
    navMain.classList.add("main-nav--closed");
    navMain.classList.remove("main-nav--opened");
  }
});


/* Диалоговые окна */
var successDialog = document.querySelector(".modal-cart");
var failureDialog = document.querySelector(".modal-answer");

function closeBtnOnClick(evt) {

  if (evt.target.classList.contains("modal__button")) {
    evt.currentTarget.classList.remove("modal-show");
  }
}

if (successDialog) {
  successDialog.addEventListener("click", closeBtnOnClick);
}

if (failureDialog) {
  failureDialog.addEventListener("click", closeBtnOnClick);
}


/* Форма */
var contestForm = document.querySelector(".form");


if (contestForm) {

  var contestFormSubmitBtn = contestForm.querySelector(".form__button");

  contestFormSubmitBtn.addEventListener("click", function(evt) {
    evt.preventDefault();

    if (successDialog && contestForm.checkValidity()) {
      successDialog.classList.add("modal-show");
    }

    if (failureDialog && !contestForm.checkValidity()) {
      failureDialog.classList.add("modal-show");
    }
  });
}
