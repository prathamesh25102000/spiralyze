function openPopup() {
  document.getElementById("popup").style.display = "block";
  let video = document.getElementById("video");
  video.src =
    "https://www.youtube.com/embed/bemUsPknumA?si=PA5AImfulWNYxO6x&autoplay=1&mute=1";
  video.display = "flex";
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
  let video = document.getElementById("video");
  video.display = "none";
  video.src = "";
}
