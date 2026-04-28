const slider = document.querySelector('.items');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
  isDown = true;
  slider.classList.add('active');
  // Use e.pageX to get the cursor position
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
  if (!isDown) return; 
  
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  
  // The logic: (Current Mouse X - Starting Mouse X)
  // We subtract this from the initial scrollLeft to move items 
  // in the direction of the mouse.
  const walk = (x - startX) * 3; 
  slider.scrollLeft = scrollLeft - walk;
});