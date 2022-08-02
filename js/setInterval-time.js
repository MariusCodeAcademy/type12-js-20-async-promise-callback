const timeEl = document.querySelector('#time');

function tick() {
  const now = new Date();
  const time = now.toLocaleTimeString('lt', { timeStyle: 'medium' });
  timeEl.textContent = time;
}
momentInTime();
