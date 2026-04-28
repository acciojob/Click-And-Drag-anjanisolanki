// Your code here.
const slider = document.querySelector('.items');
let isDown = false;
let startX;
let scrollLeft;

// When the user clicks down
slider.addEventListener('mousedown', (e) => {
  isDown = true;
  slider.classList.add('active');
  
  // Calculate the initial click position relative to the slider
  // pageX is the click position, offsetLeft is the container's start point
  startX = e.pageX - slider.offsetLeft;
  
  // Capture the current scroll position of the container
  scrollLeft = slider.scrollLeft;
});

// When the user moves the mouse out of the area
slider.addEventListener('mouseleave', () => {
  isDown = false;
  slider.classList.remove('active');
});

// When the user releases the mouse button
slider.addEventListener('mouseup', () => {
  isDown = false;
  slider.classList.remove('active');
});

// The core movement logic
slider.addEventListener('mousemove', (e) => {
  if (!isDown) return; // Stop the function from running if not clicked
  
  e.preventDefault(); // Prevent text selection or other default behaviors
  
  // Calculate current mouse position
  const x = e.pageX - slider.offsetLeft;
  
  // Calculate the distance moved (walk) 
  // Multiplying by a number (like 3) makes the scrolling faster/smoother
  const walk = (x - startX) * 3;
  
  // Apply the movement to the container's scroll position
  slider.scrollLeft = scrollLeft - walk;
});