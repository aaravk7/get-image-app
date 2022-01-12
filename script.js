const imageUrlEl = document.getElementById("image-url");
const imageSrcEl = document.getElementById("image");
const initialC = document.getElementById("initial");
const imageC = document.getElementById("image-container");

const getImage = () => {
    const imageUrl = imageUrlEl.value;
    imageSrcEl.setAttribute("src", imageUrl);
    initialC.style.display = "none";
    imageC.style.display = "flex";
    imageUrlEl.value = "";
}

const closeImage = () => {
    const initialC = document.getElementById("initial");
    const imageC = document.getElementById("image-container");
    initialC.style.display = "flex";
    imageC.style.display = "none";
}

const toggleMode = () => {
    const bodyEl = document.getElementsByTagName("body")[0];
    bodyEl.classList.toggle("dark");
}