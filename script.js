const slider = document.querySelector('.items');
let isDown = false;
let startX;
let scrollLeft;

// 1. Mouse Down - Start the drag
slider.addEventListener('mousedown', (e) => {
  isDown = true;
  slider.classList.add('active');
  // pageX is the click position, offsetLeft is the container's margin
  startX = e.pageX - slider.offsetLeft;
  // Capture initial scroll position
  scrollLeft = slider.scrollLeft;
});

// 2. Mouse Leave - Stop dragging if mouse leaves the container
slider.addEventListener('mouseleave', () => {
  isDown = false;
  slider.classList.remove('active');
});

// 3. Mouse Up - Stop dragging when mouse is released
slider.addEventListener('mouseup', () => {
  isDown = false;
  slider.classList.remove('active');
});

// 4. Mouse Move - Calculate the "walk" distance and scroll
slider.addEventListener('mousemove', (e) => {
  if (!isDown) return; // Only run if the mouse is pressed
  
  e.preventDefault(); // Stop text selection or browser scrolling
  
  // Current mouse position
  const x = e.pageX - slider.offsetLeft;
  
  // How far have we dragged from the start?
  // We multiply by 3 to make the scroll speed feel natural/fast
  const walk = (x - startX) * 3;
  
  // Apply the movement
  slider.scrollLeft = scrollLeft - walk;
});