function previous(element) {
  let fatherDiv = element.parentNode.id;
  // console.log(fatherDiv);
  switch (fatherDiv) {
    case "addressDiv":
      element.parentNode.style.display = "none";
      document.getElementById("personalDiv").style.display = "block";
      document.getElementById("profileDiv").style.display = "none";
      document.getElementById("resultDiv").style.display = "none";

      break;
    case "profileDiv":
      element.parentNode.style.display = "none";
      document.getElementById("personalDiv").style.display = "none";
      document.getElementById("addressDiv").style.display = "block";
      document.getElementById("resultDiv").style.display = "none";

      break;
    case "resultDiv":
      element.parentNode.style.display = "none";
      document.getElementById("personalDiv").style.display = "none";
      document.getElementById("addressDiv").style.display = "none";
      document.getElementById("profileDiv").style.display = "block";

      break;

    default:
      break;
  }
}

function nextDiv(element) {
  // console.log(element.parentNode);
  // console.log(element.parentElement.nextElementSibling);
  let fatherDiv = element.parentElement.nextElementSibling.id;

  // element.parentNode.style.display = "none";
  // element.parentElement.nextElementSibling.style.display = "block";

  switch (fatherDiv) {
    case "personalDiv":
      element.parentNode.style.display = "none";
      element.parentElement.nextElementSibling.style.display = "block";

      document.getElementById("personalDiv").style.display = "none";
      document.getElementById("profileDiv").style.display = "none";
      document.getElementById("resultDiv").style.display = "none";
      break;
    case "addressDiv":
      element.parentNode.style.display = "none";
      element.parentElement.nextElementSibling.style.display = "block";
      document.getElementById("personalDiv").style.display = "none";
      document.getElementById("profileDiv").style.display = "none";
      document.getElementById("resultDiv").style.display = "none";
      break;
    case "profileDiv":
      element.parentNode.style.display = "none";
      element.parentElement.nextElementSibling.style.display = "block";
      document.getElementById("personalDiv").style.display = "none";
      document.getElementById("addressDiv").style.display = "none";
      document.getElementById("resultDiv").style.display = "none";

      break;
    case "resultDiv":
      displayInfo();
      element.parentNode.style.display = "none";
      element.parentElement.nextElementSibling.style.display = "block";
      document.getElementById("personalDiv").style.display = "none";
      document.getElementById("addressDiv").style.display = "none";
      document.getElementById("profileDiv").style.display = "none";

      break;

    default:
      break;
  }
}

const firstName = document.getElementsByName("firstName");
const lastName = document.getElementsByName("lastName");
const birthDate = document.getElementsByName("birthDate");
const nationality = document.getElementsByName("nationality");
const address = document.getElementsByName("address");
const houseNumber = document.getElementsByName("houseNumber");
const zipCode = document.getElementsByName("zipCode");
const username = document.getElementsByName("username");
const password = document.getElementsByName("password");
const passwordRepeat = document.getElementsByName("password-repeat");
const imageFile = document.getElementsByName("imageFile");

function displayInfo() {
  document.getElementById("nameLabel").textContent =
    firstName[0].value + " " + lastName[0].value;

  document.getElementById("birthDateLabel").textContent = birthDate[0].value;
  document.getElementById("nationalityLabel").textContent =
    nationality[0].value;
  document.getElementById("addressLabel").textContent = address[0].value;

  document.getElementById("usernameLabel").textContent = username[0].value;
  document.getElementById("passwordLabel").textContent = password[0].value;
  document.getElementById("photoLabel").src = imageFile[0].value.replace(
    "C:\\fakepath\\",
    "./images/"
  );
}

function submitForm() {
  console.log(`Form Submitted`);
  const data = {
    name: firstName[0].value + " " + lastName[0].value,
    birthDate: birthDate[0].value,
    nationality: nationality[0].value,
    address: address[0].value,
    userName: username[0].value,
    password: password[0].value,
    img: imageFile[0].value.replace("C:\\fakepath\\", "./images/"),
  };
  console.log(data);
}
