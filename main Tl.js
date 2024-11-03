const scrollContainer = document.querySelector('.product-container');

function continuousScroll() {
  // Check if we've reached the end
  if (scrollContainer.scrollLeft + scrollContainer.clientWidth >= scrollContainer.scrollWidth) {
    // Smoothly reset to the start
    scrollContainer.scrollTo({ left: 0, behavior: 'smooth' });
  } else {
    // Move slightly forward
    scrollContainer.scrollBy({ left: 1, behavior: 'smooth' });
  }
}

// Run the scroll function every 20 milliseconds to create smooth movement
setInterval(continuousScroll, 20);