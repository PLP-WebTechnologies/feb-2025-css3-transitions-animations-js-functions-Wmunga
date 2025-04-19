const button = document.getElementById("animatedButton");
const selector = document.getElementById("animationSelector");

// Load saved preference on page load
window.addEventListener("DOMContentLoaded", () => {
  const savedAnimation = localStorage.getItem("preferredAnimation");
  if (savedAnimation) {
    selector.value = savedAnimation;
  }
});

// Save user selection to localStorage
selector.addEventListener("change", () => {
  const selected = selector.value;
  localStorage.setItem("preferredAnimation", selected);
});

// Trigger animation on button click
button.addEventListener("click", () => {
  const animationType = selector.value;

  // Remove previous animation class if any
  button.classList.remove("bounce", "shake", "spin");

  // Force reflow to restart animation
  void button.offsetWidth;

  // Add selected animation class
  button.classList.add(animationType);
});
