const body = document.querySelector("body");

const IMG_NUMBER = 2;

function paintImage(imgNumber) {
    const image = new Image();
    image.src = `images/landscape${imgNumber}.jpg`;
    image.classList.add("bgImage");
    body.prepend(image);
}

function getRandom() {
    const number = Math.ceil(Math.random() * IMG_NUMBER);
    return number;
}

function init() {
    const randomNumber = getRandom();
    paintImage(randomNumber);
}
init();