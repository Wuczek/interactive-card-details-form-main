"use strict";

const inputName = document.querySelector("#name");
const nameToPut = document.querySelector("#nameToPut");
const nameError = document.querySelector(".name-error");

const inputCard = document.querySelector("#cardNumber");
const cardToPut = document.querySelector("#cardToPut");
const cardError = document.querySelector(".cardNumber-error");

const inputMonth = document.querySelector("#month");
const monthToPut = document.querySelector("#monthToPut");

const inputYear = document.querySelector("#year");
const yearToPut = document.querySelector("#yearToPut");

const dateError = document.querySelector(".date-error");

const inputCVC = document.querySelector("#cvc");
const cvcToPut = document.querySelector("#cvcToPut");
const cvcError = document.querySelector(".cvc-error");

const submitted = document.querySelector(".submitted-form");
const form = document.querySelector("form");

function validateName() {
  let name = inputName.value;
  nameToPut.textContent = name;
  let regName = /^[a-zA-Z]+ [a-zA-Z]+$/;
  if (name.length != 0) {
    if (!regName.test(name)) {
      nameError.textContent = "Please enter a valid name";
      inputName.style.border = "2px solid red";
      return false;
    } else {
      nameError.textContent = "";
      inputName.style.border = "2px solid black";
      return true;
    }
  } else {
    nameError.textContent = "Cannot be blank";
    inputName.style.border = "2px solid red";
    return false;
  }
}

function validateCard() {
  let name = inputCard.value;
  cardToPut.textContent = name;
  let regName = /^\d+$/;
  if (name.length != 0) {
    if (!regName.test(name)) {
      cardError.textContent = "Wrong format, numbers only";
      inputCard.style.border = "2px solid red";
      return false;
    } else {
      cardError.textContent = "";
      inputCard.style.border = "2px solid black";
      return true;
    }
  } else {
    cardError.textContent = "Cannot be blank";
    inputCard.style.border = "2px solid red";
    return false;
  }
}

function validateDate() {
  let nameMonth = inputMonth.value;
  let nameYear = inputYear.value;
  monthToPut.textContent = nameMonth;
  yearToPut.textContent = nameYear;
  let regName = /^\d+$/;
  if (nameMonth.length != 0 || nameYear.length != 0) {
    if (!regName.test(nameMonth) || !regName.test(nameYear)) {
      dateError.textContent = "Wrong format, numbers only";
      inputMonth.style.border = "2px solid red";
      inputYear.style.border = "2px solid red";
      return false;
    } else {
      dateError.textContent = "";
      inputMonth.style.border = "2px solid black";
      inputYear.style.border = "2px solid black";
      return true;
    }
  } else {
    dateError.textContent = "Cannot be blank";
    inputMonth.style.border = "2px solid red";
    inputYear.style.border = "2px solid red";
    return false;
  }
}

function validateCVC() {
  let name = inputCVC.value;
  cvcToPut.textContent = name;
  let regName = /^\d+$/;
  if (name.length != 0) {
    if (!regName.test(name)) {
      cvcError.textContent = "Wrong format, numbers only";
      inputCVC.style.border = "2px solid red";
      return false;
    } else {
      cvcError.textContent = "";
      inputCVC.style.border = "2px solid black";
      return true;
    }
  } else {
    cvcError.textContent = "Cannot be blank";
    inputCVC.style.border = "2px solid red";
    return false;
  }
}

function validateForm() {
  if (!validateCVC() || !validateCard() || !validateDate() || !validateName()) {
    return false;
  } else {
    submitted.style = "display:block";
    form.style = "display:none";
  }
}
