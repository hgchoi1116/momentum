const images = [
    "img1.jpg",
    "img2.jpg",
    "img4.jpg",
    "img5.jpg",
    "img6.jpg",];

const chosenImage = images[[Math.floor(Math.random() * images.length)]];

const bgImage = document.createElement("img");
const style = document.createElement("style");
style.textContent = "background-size: cover";
bgImage.src = `images/${chosenImage}`;

document.body.appendChild(bgImage);