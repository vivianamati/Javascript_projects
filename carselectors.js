const redColor = document.querySelector(".red");
const blackColor = document.querySelector(".black");
const imageCard = document.querySelector(".product-image");
const feedbackBtn = document.querySelector(".feedback");
const grayColor = document.getElementsByClassName("gray");
const cartButton = document.getElementById("button");
const itemTag = document.getElementsByTagName("h3")[0];
const navyColor = document.querySelector(".navy");
const newprice= document.querySelector(".new-price")

redColor.addEventListener("click", function () {
    cartButton.style.backgroundColor = "red";
    itemTag.style.backgroundColor = "red";
    imageCard.style.backgroundImage = 'url("./red benz.jpg")';
    newprice.textContent="$155000";
  });

  grayColor[0].addEventListener("click", function () {
    cartButton.style.backgroundColor = "gray";
    itemTag.style.backgroundColor = "gray";
    imageCard.style.backgroundImage = 'url("./grey benz.jpg")';
    newprice.textContent="$140000"
  });

  
  blackColor.addEventListener("click", function () {
    cartButton.style.backgroundColor = "black";
    itemTag.style.backgroundColor = "black";
    imageCard.style.backgroundImage = 'url("./black benz.jpg")';
    newprice.textContent="$138000"
  });

   
  navyColor.addEventListener("click", function () {
    cartButton.style.backgroundColor = "navy";
    itemTag.style.backgroundColor = "navy";
    imageCard.style.backgroundImage = 'url("./navy benz.jpg")';
    newprice.textContent="$145000";
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
  
  

 
   
