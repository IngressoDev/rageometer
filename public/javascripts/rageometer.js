const socket = io();
const rageometer = document.getElementById('rageometer');
const ragelevel = document.getElementById('ragelevel');

socket.on('heartrate', (rate) => {
  ragelevel.style.cssText = `background-color: #ff0000; width: 60px; height: ${rate}px`;
})

setInterval(() => {
  const rate = Math.floor(Math.random() * 150) + 80;
  socket.emit('new-heartrate', rate);
}, 1000)