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
  const hamburgerIcon = mobileMenuButton.querySelector('svg:first-of-type');
  const closeIcon = mobileMenuButton.querySelector('svg:last-of-type');

  function closeMobileMenu() {
    mobileMenu.classList.add('hidden');
    hamburgerIcon.classList.remove('hidden');
    closeIcon.classList.add('hidden');
    mobileMenuButton.setAttribute('aria-expanded', 'false');
  }

  function openMobileMenu() {
    mobileMenu.classList.remove('hidden');
    hamburgerIcon.classList.add('hidden');
    closeIcon.classList.remove('hidden');
    mobileMenuButton.setAttribute('aria-expanded', 'true');
  }

  mobileMenuButton.addEventListener('click', function() {
    const isOpen = !mobileMenu.classList.contains('hidden');
    if (isOpen) {
      closeMobileMenu();
    } else {
      openMobileMenu();
    }
  });

  // Close menu when clicking on a link
  const mobileMenuLinks = mobileMenu.querySelectorAll('a');
  mobileMenuLinks.forEach(link => {
    link.addEventListener('click', function() {
      closeMobileMenu(); // Re-use the function here
    });
  });

  // Add listeners for the hero buttons
  const viewWorkBtn = document.getElementById('view-work-btn');
  if(viewWorkBtn) {
    viewWorkBtn.addEventListener('click', () => scrollToSection('projects'));
  }

  const getInTouchBtn = document.getElementById('get-in-touch-btn');
  if(getInTouchBtn) {
    getInTouchBtn.addEventListener('click', () => scrollToSection('contact'));
  }
});
