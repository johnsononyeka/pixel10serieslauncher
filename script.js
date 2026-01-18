const countdown = document.getElementById("countdown");

// Set launch date (example)
const launchDate = new Date("October 10, 2026 10:00:00").getTime();

const timer = setInterval(() => {
  const now = new Date().getTime();
  const distance = launchDate - now;

  if (distance < 0) {
    clearInterval(timer);
    countdown.innerHTML = "🚀 Pixel 10 Series is Live!";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((distance / (1000 * 60)) % 60);
  const seconds = Math.floor((distance / 1000) % 60);

  countdown.innerHTML = 
    `${days}d ${hours}h ${minutes}m ${seconds}s`;
}, 1000);