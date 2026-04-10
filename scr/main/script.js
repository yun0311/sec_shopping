let current = 0;
const total = 3;
let autoPlay = true;
let timer;

function updateBanner() {
  document.getElementById("banner_content").style.transform =
    `translateX(-${current * 100}%)`;
  document.getElementById("banner_count").textContent =
    `${current + 1} / ${total}`;
}

function nextBanner() {
  current = (current + 1) % total;
  updateBanner();
}

function prevBanner() {
  current = (current - 1 + total) % total;
  updateBanner();
}

function toggleAuto() {
  const btn = document.getElementById("auto_btn");
  if (autoPlay) {
    clearInterval(timer);
    btn.innerHTML = "&#9654;";
    autoPlay = false;
  } else {
    startAuto();
    btn.innerHTML = "&#9646;&#9646;";
    autoPlay = true;
  }
}

function startAuto() {
  timer = setInterval(nextBanner, 3000);
}

startAuto();
