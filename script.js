const slider = document.querySelector('.items');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
  isDown = true;
  slider.classList.add('active');
  // Use e.pageX for the mouse position and subtract offset
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', () => {
  isDown = false;
  slider.classList.remove('active');
});

slider.addEventListener('mouseup', () => {
  isDown = false;
  slider.classList.remove('active');
});

slider.addEventListener('mousemove', (e) => {
  if (!isDown) return; // stop the fn from running
  e.preventDefault();
  
  const x = e.pageX - slider.offsetLeft;
  // Determine how far we have deviated from the start
  const walk = (x - startX) * 3; // Multiplier for speed
  slider.scrollLeft = scrollLeft - walk;
});