const containtext = document.querySelector(".containtext");
const imghoverr = document.getElementById("img-hoverr");

imghoverr.addEventListener("mouseover", () => {
  containtext.classList.add("d-none");
});
imghoverr.addEventListener("mouseleave", () => {
  containtext.classList.remove("d-none");
});

// login popup

const loginbtn = document.getElementById("login");
const loginForm = document.getElementById("loginForm");
const loginWindow = document.querySelector(".popup-overlay-login");
const closeWindow = document.querySelector(".close-overlay-login");
loginbtn.addEventListener("click", () => {
  loginWindow.classList.add("show");
});
closeWindow.addEventListener("click", () => {
  loginWindow.classList.remove("show");
});

loginForm.addEventListener("submit", () => {
  let UserName = document.getElementById("userName").value.trim();
  let userPassword = document.getElementById("userPassword").value.trim();

  let loginedUsrs = JSON.parse(localStorage.getItem("loginedUsrs")) || [];
  let newLoginedobj = {
    UserName: UserName,
    userPassword: userPassword,
  };
  loginedUsrs.push(newLoginedobj);
  localStorage.setItem(JSON.stringify(loginedUsrs));
  loginForm.reset();
});

// register pop up

const registerButton = document.getElementById("registerButton");
const registerForm = document.getElementById("registerForm");
const popupReg = document.querySelector(".register-popup");
const closePopup = document.querySelector(".close-reg");

registerButton.addEventListener("click", () => {
  popupReg.classList.add("show");
});

closePopup.addEventListener("click", () => {
  popupReg.classList.remove("show");
});

registerForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const email = document.getElementById("email").value;
  const address = document.getElementById("address").value;
  const Age = document.getElementById("Age").value;

  let arrOfUsers = JSON.parse(localStorage.getItem("gamingoUsers")) || [];
  let newUser = {
    username: username,
    password: password,
    email: email,
    address: address,
    Age: Age,
  };

  arrOfUsers.push(newUser);
  localStorage.setItem("gamingoUsers", JSON.stringify(arrOfUsers));

  popupReg.classList.remove("show");
  registerForm.reset();
});

// add new game

// function addGame() {
//   // const formGame = document.querySelector(".popup-overlay-game");
//   // formGame.classList.add("show");

//   const gamname = document.getElementById("Gamename");
//   const desc = document.getElementById("desc");
//   const Type = document.getElementById("Type");
//   const price = document.getElementById("price");
//   const gameValu = gamname.value.trim();
//   const descValu = desc.value.trim();
//   const typeValu = Type.value.trim();
//   const priceValu = price.value.trim();
//   let newGames = JSON.parse(localStorage.getItem("newGames")) || [];

//   let newgameObj = {
//     gameValu: gameValu,
//     descValu: descValu,
//     typeValu: typeValu,
//     priceValu: priceValu,
//   };

//   newGames.push(newgameObj);
//   localStorage.setItem("newGames", JSON.stringify(newGames));
//   gameValu = "";
//   descValu = "";
//   typeValu = "";
//   priceValu = "";
//   // window.history.back();

//   // window.location.assign("../html/adminhome.html");
//   // window.location.href="../html/adminhome.html";
//   redirectToPage()

// }
// function redirectToPage() {
//   window.location.href="../html/adminhome.html";
// }

// update
function updateByID(element) {}

// delete by id

function delgame(element) {
  var row = element.parentNode.parentNode;
  var rowIndex = row.rowIndex;
  row.parentNode.removeChild(row);
  var gamesData = JSON.parse(localStorage.getItem("newGames")) || [];
  gamesData.splice(rowIndex - 1, 1);
  localStorage.setItem("newGames", JSON.stringify(gamesData));
  getGames();
}

// deleteAll
function deleteAll() {
  var gameDataTxt = document.getElementById("contain-gamesdata");
  gameDataTxt.innerHTML = "";
  localStorage.removeItem("newGames");
  getGames();
}

// get games from local storage
getAllGames();
function getAllGames() {
  let gameDataTxt = document.getElementById("contain-gamesdata");
  let gamesData = JSON.parse(localStorage.getItem("newGames")) || [];

  gamesData.forEach((element) => {
    let tr = document.createElement("tr"); // Create a new <tr> element
    tr.innerHTML = `
      <td>
        <img src="../images/1.jpeg" alt="" />
      </td>
      <td>
        ${element.gameValu} <!-- Fix: Use the correct property name -->
      </td>
      <td>
        ${element.descValu} <!-- Fix: Use the correct property name -->
      </td>
      <td>
        ${element.typeValu} <!-- Fix: Use the correct property name -->
      </td>
      <td>
        ${element.priceValu} <!-- Fix: Use the correct property name -->
      </td>
      <td>
        <a onclick="delgame()"><i class="fa-solid fa-trash-can" style="color: #ffffff;">Delete</i></a>
      </td>
      <td>
        <a onclick="editgame()"><i class="fa-solid fa-wrench" style="color: #eff1f6;">Update</i></a>
      </td>
    `;

    gameDataTxt.appendChild(tr); // Append the new <tr> to the container element
  });
}

// search
// function searchByName() {
//   let textsearch = document.getElementById("search").value.trim().toLowerCase();
//   console.log(textsearch);
//   let tableData = document.getElementsByTagName("td");
//   for (let u = 0; u < tableData.length; u++) {
//     let cellValue = tableData[u].textContent.toLowerCase();
//     if (cellValue.includes(textsearch)) {
//       console.log("founnnnd");
//     }
//   }
// }

// sort Asc
function SearchByPrice() {}

// get users number

// window.addEventListener("load", function () {
//   getUsers();
// });

// function getUsers() {
//   const text = document.getElementById("usercount");
//   let userCount = JSON.parse(localStorage.getItem("gamingoUsers")) || [];

//   console.log(userCount.length);
//   text.innerHTML = userCount.length;
// }

// function getUsers() {
//   const text = document.getElementById("usercount");

//   let userCount = JSON.parse(localStorage.getItem("gamingoUsers")) || [];
//   let count = userCount.length || 0;

//   text.innerHTML = count;
// }

// get gamescount
function getGames() {
  const text = document.getElementById("gamescount");
  let gamesCount = JSON.parse(localStorage.getItem("newGames")) || [];
  console.log(gamesCount.length);
  text.innerHTML = gamesCount.length;
}
