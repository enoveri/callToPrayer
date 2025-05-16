// Utility function to handle scroll reveal animations
export const initScrollReveal = () => {
  const revealElements = document.querySelectorAll(".reveal");

  const reveal = () => {
    for (let i = 0; i < revealElements.length; i++) {
      const windowHeight = window.innerHeight;
      const elementTop = revealElements[i].getBoundingClientRect().top;
      const elementVisible = 150; // Adjust this value to change when elements become visible

      if (elementTop < windowHeight - elementVisible) {
        revealElements[i].classList.add("active");
      } else {
        revealElements[i].classList.remove("active");
      }
    }
  };

  // Add event listener
  window.addEventListener("scroll", reveal);

  // Initial check
  reveal();

  // Return cleanup function
  return () => {
    window.removeEventListener("scroll", reveal);
  };
};
