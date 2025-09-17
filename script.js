
const homeLink = document.getElementById('home-link');
const menuLink = document.getElementById('menu-link');
const reviewsLink = document.getElementById('reviews-link');
const aboutLink = document.getElementById('about-link');
const contactLink = document.getElementById('contact-link');
const reserveBtn = document.getElementById('reserve-btn');
const heroMenuBtn = document.getElementById('hero-menu-btn');

const heroSection = document.querySelector('.hero');
const menuSection = document.querySelector('.menu-section');
const reviewsSection = document.querySelector('.reviews-section');
const aboutSection = document.querySelector('.about-section');
const contactSection = document.querySelector('.contact-section');

function hideAllSections() {
  heroSection.style.display = 'none';
  menuSection.style.display = 'none';
  reviewsSection.style.display = 'none';
  aboutSection.style.display = 'none';
  contactSection.style.display = 'none';
}

function clearActiveLinks() {
  document.querySelectorAll('nav a').forEach(link => link.classList.remove('active'));
}

homeLink.addEventListener('click', e => {
  e.preventDefault();
  hideAllSections();
  heroSection.style.display = 'flex';
  clearActiveLinks();
  homeLink.classList.add('active');
});

menuLink.addEventListener('click', e => {
  e.preventDefault();
  hideAllSections();
  menuSection.style.display = 'block';
  clearActiveLinks();
  menuLink.classList.add('active');
});

reviewsLink.addEventListener('click', e => {
  e.preventDefault();
  hideAllSections();
  reviewsSection.style.display = 'block';
  clearActiveLinks();
  reviewsLink.classList.add('active');
});

aboutLink.addEventListener('click', e => {
  e.preventDefault();
  hideAllSections();
  aboutSection.style.display = 'block';
  clearActiveLinks();
  aboutLink.classList.add('active');
});

contactLink.addEventListener('click', e => {
  e.preventDefault();
  hideAllSections();
  contactSection.style.display = 'block';
  clearActiveLinks();
  contactLink.classList.add('active');
});

heroMenuBtn.addEventListener('click', e => {
  e.preventDefault();
  hideAllSections();
  menuSection.style.display = 'block';
  clearActiveLinks();
  menuLink.classList.add('active');
});

reserveBtn.addEventListener('click', e => {
  e.preventDefault();
  hideAllSections();
  contactSection.style.display = 'block';
  clearActiveLinks();
  contactLink.classList.add('active');
});
