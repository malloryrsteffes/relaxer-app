const body = document.getElementById("body");
const container = document.getElementById("container");
const theme_switcher = document.getElementById("theme-switcher");
const text = document.getElementById("text");

const total_time = 9500;
const breathe_time = (total_time / 5) * 2;
const hold_time = total_time / 5;

let background_images = [
    "andy-li-OcfSHwxaU4I-unsplash-min.jpg",
    "davies-designs-studio-G-6kwVnClsE-unsplash-min.jpg",
    "dustin-humes-l3HNetoCqFY-unsplash-min.jpg",
    "marita-kavelashvili-ugnrXk1129g-unsplash-min.jpg",
    "jason-abdilla-0eyTKhre-cQ-unsplash-min.jpg",
  ],
  i = 0;

// Theme Switcher
theme_switcher.onclick = function () {
  if (i === background_images.length) {
    i = 0;
  }
  body.style.backgroundImage = "url(./img/" + background_images[i] + ")";
  i++;
  return false;
};
// Breathing Animation

function breathAnimation() {
  text.innerText = "Breathe in.";
  container.classList.add("grow");
  container.classList.remove("shrink");

  setTimeout(() => {
    text.innerText = "Hold...";

    setTimeout(() => {
      text.innerText = "Breathe out.";
      container.classList.remove("grow");
      container.classList.add("shrink");
    }, hold_time);
  }, breathe_time);
}

breathAnimation();

setInterval(breathAnimation, total_time);
