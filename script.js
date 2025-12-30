function scrollToSection(id) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth'
    });
  }
}

// Mobile menu toggle functionality
document.addEventListener('DOMContentLoaded', function() {
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');
  const hamburgerIcon = mobileMenuButton.querySelector('svg:first-child');
  const closeIcon = mobileMenuButton.querySelector('svg:last-child');

  mobileMenuButton.addEventListener('click', function() {
    const isOpen = !mobileMenu.classList.contains('hidden');

    if (isOpen) {
      // Close menu
      mobileMenu.classList.add('hidden');
      hamburgerIcon.classList.remove('hidden');
      hamburgerIcon.classList.add('block');
      closeIcon.classList.remove('block');
      closeIcon.classList.add('hidden');
      mobileMenuButton.setAttribute('aria-expanded', 'false');
    } else {
      // Open menu
      mobileMenu.classList.remove('hidden');
      hamburgerIcon.classList.remove('block');
      hamburgerIcon.classList.add('hidden');
      closeIcon.classList.remove('hidden');
      closeIcon.classList.add('block');
      mobileMenuButton.setAttribute('aria-expanded', 'true');
    }
  });

  // Close menu when clicking on a link
  const mobileMenuLinks = mobileMenu.querySelectorAll('a');
  mobileMenuLinks.forEach(link => {
    link.addEventListener('click', function() {
      mobileMenu.classList.add('hidden');
      hamburgerIcon.classList.remove('hidden');
      hamburgerIcon.classList.add('block');
      closeIcon.classList.remove('block');
      closeIcon.classList.add('hidden');
      mobileMenuButton.setAttribute('aria-expanded', 'false');
    });
  });
});
