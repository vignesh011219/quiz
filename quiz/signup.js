let form = document.querySelector("form");
let firstName = document.querySelectorAll("input")[0];
let lastName = document.querySelectorAll("input")[1];
let email = document.querySelectorAll("input")[2];
let mobile = document.querySelectorAll("input")[3];
let createPassword = document.querySelectorAll("input")[4];
let confirmPassword = document.querySelectorAll("input")[5];

let efirst = document.querySelectorAll("span")[0];
let elast = document.querySelectorAll("span")[1];
let eemail = document.querySelectorAll("span")[2];
let emobile = document.querySelectorAll("span")[3];
let epass = document.querySelectorAll("span")[4];
let ecpass = document.querySelectorAll("span")[5];
let storage = [];
let dataFromStroage = JSON.parse(localStorage.getItem("details"));

if (dataFromStroage) {
  storage = dataFromStroage;
}

console.log(dataFromStroage, storage);

form.addEventListener("submit", (e) => {
  let flag = true;
  //first name validation
  let regx = /^[a-zA-Z]{1,17}$/;
  if (firstName.value == "") {
    efirst.innerHTML = `*Enter the first name`;
    flag = false;
    e.preventDefault();
  } else if (regx.test(firstName.value)) {
    efirst.innerHTML = "";
  } else {
    efirst.innerHTML = "*Invalid first name";
    e.preventDefault();
    flag = false;
  }

  //last name validation
  if (lastName.value == "") {
    elast.innerHTML = `*Enter the first name`;
    e.preventDefault();
    flag = false;
  } else if (regx.test(lastName.value)) {
    elast.innerHTML = "";
  } else {
    elast.innerHTML = "*Invalid first name";
    e.preventDefault();
    flag = false;
  }

  //email validation
  if (email.value == "") {
    eemail.innerHTML = "*Enter the email";
    e.preventDefault();
    flag = false;
  } else {
    eemail.innerHTML = "";
  }
  //mobile validation
  let mobileCheck = storage.find((e) => {
    if (e.phone == mobile.value) {
      return e;
    }
  });
  let regxmob = /^[6-9][0-9]{9}$/;
  if (mobileCheck) {
    emobile.innerHTML = "mobile number already registered ";
    e.preventDefault();
    flag = false;
  } else if (mobile.value == "") {
    emobile.innerHTML = "*Enter the mobile number ";
    e.preventDefault();
    flag = false;
  } else if (regxmob.test(mobile.value)) {
    emobile.innerHTML = "";
  } else {
    emobile.innerHTML = "*Invalid mobile number";
    e.preventDefault();
    flag = false;
  }

  //Create password validation
  let regpass = /^[a-zA-Z0-9!@]{6,15}$/;
  if (createPassword.value == "") {
    epass.innerHTML = "*Enter the password";
    e.preventDefault();
    flag = false;
  } else if (regpass.test(createPassword.value)) {
    epass.innerHTML = "";
  } else {
    epass.innerHTML = "*Invalid Password";
    e.preventDefault();
    flag = false;
  }

  //confirmPassword validation

  if (confirmPassword.value == "") {
    ecpass.innerHTML = "*Enter the password";
    e.preventDefault();
    flag = false;
  } else if (confirmPassword.value == createPassword.value) {
    ecpass.innerHTML = "";
  } else {
    ecpass.innerHTML = "*Password is not matching";
    e.preventDefault();
    flag = false;
  }

  //store data in local storage

  if (flag) {
    let details = {
      first: firstName.value,
      last: lastName.value,
      mail: email.value,
      phone: mobile.value,
      pass: createPassword.value,
      quiz: null,
    };

    storage.push(details);

    localStorage.setItem("details", JSON.stringify(storage));
    console.log(details);
  }
});
