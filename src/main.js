import './style.css'
import { createIcons, Megaphone, Smartphone, MapPin, MessageCircleHeart, Monitor, SearchCheck, Menu, X, ArrowRight } from 'lucide';

// Initialize Lucide Icons
createIcons({
  icons: {
    Megaphone, // Google Ads
    Smartphone, // Meta Ads
    MapPin, // GMB
    MessageCircleHeart, // Social Media
    Monitor, // Website designing
    SearchCheck, // SEO
    Menu,
    X,
    ArrowRight
  }
});

// Mobile menu toggle logic
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const menuIcon = document.getElementById('menu-icon');
const closeIcon = document.getElementById('close-icon');

mobileMenuBtn.addEventListener('click', () => {
  const isHidden = mobileMenu.classList.contains('hidden');
  if (isHidden) {
    mobileMenu.classList.remove('hidden');
    menuIcon.classList.add('hidden');
    closeIcon.classList.remove('hidden');
  } else {
    mobileMenu.classList.add('hidden');
    menuIcon.classList.remove('hidden');
    closeIcon.classList.add('hidden');
  }
});

const mobileLinks = mobileMenu.querySelectorAll('a');
mobileLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
    menuIcon.classList.remove('hidden');
    closeIcon.classList.add('hidden');
  });
});

// Modal Logic
window.openModal = function(id) {
  document.getElementById(id).classList.remove('hidden');
  document.body.style.overflow = 'hidden';
};

window.closeModal = function(id) {
  document.getElementById(id).classList.add('hidden');
  document.body.style.overflow = 'auto';
};
