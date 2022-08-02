const timeEl = document.querySelector('#time');

function tick() {
  const now = new Date();
  const time = now.toLocaleTimeString('lt', { timeStyle: 'medium' });
  timeEl.textContent = time;
}
tick();

const int1 = setInterval(tick, 1000);

// setTimeout(clearInterval, 5000, int1);
// clearInterval(int1);
