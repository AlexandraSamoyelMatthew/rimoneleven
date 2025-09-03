document.addEventListener("DOMContentLoaded", function () {
  const roles = ["Script Writer", "Translator", "Web Developer", "Graphic Designer", "Video Editor"];
  const typingSpan = document.querySelector(".typing-test span");

  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let speed = 500;

  function typeEffect() {
    const currentRole = roles[roleIndex];
    if (isDeleting) {
      typingSpan.textContent = currentRole.substring(0, charIndex--);
      speed = 50;
    } else {
      typingSpan.textContent = currentRole.substring(0, charIndex++);
      speed = 100;
    }

    if (!isDeleting && charIndex === currentRole.length) {
      isDeleting = true;
      speed = 1500; // pause before deleting
    } else if (isDeleting && charIndex < 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length; // next word
      speed = 300;
    }

    setTimeout(typeEffect, speed);
  }

  typeEffect();
});