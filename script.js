const container = document.getElementById("container");
const text = document.getElementById("text");

const total_time = 9500;
const breathe_time = (total_time / 5) * 2;
const hold_time = total_time / 5;

function breathAnimation() {
  text.innerText = "Breathe in.";
  container.classList.add("grow");
  container.classList.remove("shrink");

  setTimeout(() => {
    text.innerText = "Hold.";

    setTimeout(() => {
      text.innerText = "Breathe out.";
      container.classList.remove("grow");
      container.classList.add("shrink");
    }, hold_time);
  }, breathe_time);
}

breathAnimation();

setInterval(breathAnimation, total_time);
