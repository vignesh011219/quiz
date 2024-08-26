let form = document.querySelector("form");
let userName = document.querySelectorAll("input")[0];
let password = document.querySelectorAll("input")[1];
let euser = document.querySelectorAll("span")[0];
let epass = document.querySelectorAll("span")[1];
let eform = document.querySelectorAll("span")[2];
let dataFromStorage = JSON.parse(localStorage.getItem("details"));

console.log(dataFromStorage);

console.log(form, userName, password, euser, epass, eform);

form.addEventListener("submit", (e) => {
  euser.innerHTML = "";
  epass.innerHTML = "";
  eform.innerHTML = "";

  //matching login details
  let matchedData = dataFromStorage.find((e) => {
    if (
      (e.phone == userName.value && e.pass == password.value) ||
      (e.mail == userName.value && e.pass == password.value)
    ) {
      return e;
    }
  });

  if (userName.value == "" && password.value == "") {
    euser.innerHTML = "*enter the email or mobile number";
    epass.innerHTML = "*Enter the password";
    e.preventDefault();
  } else if (userName.value == "") {
    euser.innerHTML = "*enter the email or mobile number";
    e.preventDefault();
  } else if (password.value == "") {
    epass.innerHTML = "*Enter the password";
    e.preventDefault();
  } else if (matchedData) {
    alert("welcome to the page");
    localStorage.setItem("quizuser", JSON.stringify(matchedData));
  } else {
    eform.innerHTML = "Match not found";
    e.preventDefault();
  }
});

let h3 = document.querySelector("h3");

h3.addEventListener("click", () => {
  if (h3.innerHTML == "show") {
    password.type = "text";
    h3.innerHTML = "hide";
  } else {
    h3.innerHTML = "show";
    password.type = "password";
  }
});
