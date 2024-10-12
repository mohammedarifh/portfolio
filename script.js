// Initialize particles.js
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('particles.js loaded - callback');
});

// Typing Effect
const typedTextSpan = document.querySelector('.typed-text');
const cursorSpan = document.querySelector('.cursor');

const textArray = ['Security & Researching'];
const typingDelay = 100;
const erasingDelay = 50;
const newTextDelay = 2000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if(!cursorSpan.classList.contains('typing')) cursorSpan.classList.add('typing');
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } 
  else {
    cursorSpan.classList.remove('typing');
    setTimeout(erase, newTextDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    if(!cursorSpan.classList.contains('typing')) cursorSpan.classList.add('typing');
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } 
  else {
    cursorSpan.classList.remove('typing');
    textArrayIndex++;
    if(textArrayIndex >= textArray.length) textArrayIndex = 0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener('DOMContentLoaded', function() { // On DOM Load initiate the effect
  if(textArray.length) setTimeout(type, newTextDelay + 250);
});

// Smooth Scrolling for navigation links
document.querySelectorAll('a.scrollto').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Scroll to Top Button
const scrollTop = document.querySelector('.scroll-top');

window.addEventListener('scroll', () => {
  if (window.scrollY > 500) {
    scrollTop.style.display = 'block';
  } else {
    scrollTop.style.display = 'none';
  }
});

// Active Navigation Links
const sections = document.querySelectorAll('section');
const navLi = document.querySelectorAll('.nav-menu ul li');
const mobileNavLi = document.querySelectorAll('.mobile-nav ul li');

window.addEventListener('scroll', () => {
  let current = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 80;
    const sectionHeight = section.clientHeight;
    if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
      current = section.getAttribute('id');
    }
  });

  navLi.forEach(li => {
    li.classList.remove('active');
    if (li.querySelector('a').getAttribute('href').includes(current)) {
      li.classList.add('active');
    }
  });

  mobileNavLi.forEach(li => {
    li.classList.remove('active');
    if (li.querySelector('a').getAttribute('href').includes(current)) {
      li.classList.add('active');
    }
  });
});

// Mobile Navigation Toggle
const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
const mobileNav = document.querySelector('.mobile-nav');

mobileNavToggle.addEventListener('click', () => {
  mobileNav.classList.toggle('active');
  mobileNavToggle.classList.toggle('active');
  document.body.classList.toggle('no-scroll');
});

document.querySelectorAll('.mobile-nav a').forEach(anchor => {
  anchor.addEventListener('click', () => {
    mobileNav.classList.remove('active');
    mobileNavToggle.classList.remove('active');
    document.body.classList.remove('no-scroll');
  });
});

// Change header background on scroll
window.addEventListener('scroll', function() {
  const header = document.getElementById('header');
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// Modal functionality
document.querySelectorAll('.modal-btn').forEach(button => {
  button.addEventListener('click', () => {
    const modalId = button.getAttribute('data-modal');
    const modal = document.getElementById(modalId);
    modal.classList.add('active');
    document.body.classList.add('modal-open'); // Prevent background scrolling
  });
});

document.querySelectorAll('.close-btn').forEach(span => {
  span.addEventListener('click', () => {
    const modalId = span.getAttribute('data-modal');
    const modal = document.getElementById(modalId);
    modal.classList.remove('active');
    document.body.classList.remove('modal-open'); // Restore background scrolling
  });
});

// Close modal when clicking outside of it
document.querySelectorAll('.modal').forEach(modal => {
  modal.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.classList.remove('active');
      document.body.classList.remove('modal-open'); // Restore background scrolling
    }
  });
});
