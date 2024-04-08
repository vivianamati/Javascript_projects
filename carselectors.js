const redColor = document.querySelector(".red");
const blackColor = document.querySelector(".black");
const imageCard = document.querySelector(".product-image");
const feedbackBtn = document.querySelector(".feedback");
const grayColor = document.getElementsByClassName("gray");
const cartButton = document.getElementById("button");
const itemTag = document.getElementsByTagName("h3")[0];

redColor.addEventListener("click", function () {
    cartButton.style.backgroundColor = "red";
    itemTag.style.backgroundColor = "red";
    imageCard.style.backgroundImage = 'url("./rr benz.jpg")';
  });

  grayColor[0].addEventListener("click", function () {
    cartButton.style.backgroundColor = "gray";
    itemTag.style.backgroundColor = "gray";
    imageCard.style.backgroundImage = 'url("./gray benz.jpg")';
  });

  blackColor.addEventListener("click", function () {
    cartButton.style.backgroundColor = "black";
    itemTag.style.backgroundColor = "black";
    imageCard.style.backgroundImage = 'url("./black benz.jpg")';
  });

  const cart = () => {
    cartButton.style.display = "none";
    feedbackBtn.style.display = "block";
  };
  cartButton.addEventListener("click", cart);

  const feedback = () => {
    cartButton.style.display = "block";
    feedbackBtn.style.display = "none";
  };
  feedbackBtn.addEventListener("click", feedback);

const redColor2 = document.querySelector(".red");
const blackColor2 = document.querySelector(".black");
const imageCard2 = document.querySelector(".product-image");
const feedbackBtn2 = document.querySelector(".feedback");
const grayColor2 = document.getElementsByClassName("gray");
const cartButton2 = document.getElementById("button");
const itemTag2 = document.getElementsByTagName("h3")[0];

redColor2.addEventListener("click", function () {
    cartButton.style.backgroundColor = "red";
    itemTag.style.backgroundColor = "red";
    imageCard.style.backgroundImage = 'url("./rff.jpg")';
  });

  grayColor2[0].addEventListener("click", function () {
    cartButton.style.backgroundColor = "gray";
    itemTag.style.backgroundColor = "gray";
    imageCard.style.backgroundImage = 'url("./gray ferrari.jpg")';
  });

   blackColor2.addEventListener("click", function () {
     cartButton.style.backgroundColor = "black";
     itemTag.style.backgroundColor = "black";
     imageCard.style.backgroundImage = 'url("./black ferrari.jpg")';
  });

//   const cart2 = () => {
//     cartButton.style.display = "none";
//     feedbackBtn.style.display = "block";
//   };
//   cartButton.addEventListener("click", cart);

//   const feedback2 = () => {
//     cartButton.style.display = "block";
//     feedbackBtn.style.display = "none";
//   };
//   feedbackBtn.addEventListener("click", feedback);

//   const redColor3 = document.querySelector(".red");
//   const blackColor3 = document.querySelector(".black");
//   const imageCard3 = document.querySelector(".product-image");
//   const feedbackBtn3 = document.querySelector(".feedback");
//   const grayColor3 = document.getElementsByClassName("gray");
//   const cartButton3 = document.getElementById("button");
//   const itemTag3 = document.getElementsByTagName("h3")[0];
  
//   redColor3.addEventListener("click", function () {
//       cartButton.style.backgroundColor = "red";
//       itemTag.style.backgroundColor = "red";
//       imageCard.style.backgroundImage = 'url("./img/redam.jpg")';
//     });
  
//     grayColor3[0].addEventListener("click", function () {
//       cartButton.style.backgroundColor = "gray";
//       itemTag.style.backgroundColor = "gray";
//       imageCard.style.backgroundImage = 'url("./img/gray-benz.jpg")';
//     });
  
//     blackColor3.addEventListener("click", function () {
//       cartButton.style.backgroundColor = "black";
//       itemTag.style.backgroundColor = "black";
//       imageCard.style.backgroundImage = 'url("./img/black-benz.jpg")';
//     });
  
//     const cart3 = () => {
//       cartButton.style.display = "none";
//       feedbackBtn.style.display = "block";
//     };
//     cartButton.addEventListener("click", cart);
  
//     const feedback3 = () => {
//       cartButton.style.display = "block";
//       feedbackBtn.style.display = "none";
//     };
//   feedbackBtn.addEventListener("click", feedback);
  
  
  
  

