// Mobile menu toggle
const menuIcon = document.getElementById('menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
  navbar.classList.toggle('active');
  menuIcon.classList.toggle('fa-bars');
  menuIcon.classList.toggle('fa-xmark');
});

// Text animation for roles
const roles = [
  "Frontend Designer",
  "Full Stack Developer",
  "UI / UX Designer",
  "Web Developer",
  "Backend Developer"
];

let roleIndex = 0;
const textElement = document.querySelector('.home-content h3');
const spanElement = document.createElement('span');
textElement.appendChild(spanElement);

let charIndex = 0;
let typing = true;

function typeRole() {
  if (typing) {
    if (charIndex < roles[roleIndex].length) {
      spanElement.textContent += roles[roleIndex].charAt(charIndex);
      charIndex++;
      setTimeout(typeRole, 100);
    } else {
      typing = false;
      setTimeout(typeRole, 2000);
    }
  } else {
    if (charIndex > 0) {
      spanElement.textContent = roles[roleIndex].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(typeRole, 50);
    } else {
      typing = true;
      roleIndex = (roleIndex + 1) % roles.length;
      setTimeout(typeRole, 500);
    }
  }
}

typeRole();

// Trigger fade-in animation on page load
window.addEventListener('load', () => {
  document.querySelectorAll('.fade-in').forEach(el => {
    el.style.opacity = 0;
    el.classList.add('fade-in');
  });
});
