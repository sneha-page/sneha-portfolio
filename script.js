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

  // Add smooth scrolling to desktop navigation links
  const desktopNavLinks = document.querySelectorAll('header nav a');
  desktopNavLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      // Prevent default anchor behavior
      e.preventDefault();

      // Get the target section ID from href
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        // Smooth scroll to the target section
        targetElement.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });

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
    // Remove focus from button after click to prevent outline persistence
    this.blur();
  });

  // Close menu when clicking on a link and add smooth scrolling
  const mobileMenuLinks = mobileMenu.querySelectorAll('a');
  mobileMenuLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      // Prevent default anchor behavior
      e.preventDefault();

      // Get the target section ID from href
      const targetId = this.getAttribute('href');

      if (targetId === '#home') {
        // Special handling for Home link - scroll to top
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });

        // Close the menu after a short delay to allow scroll to complete
        setTimeout(() => {
          closeMobileMenu();
        }, 500);
      } else {
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
          // Smooth scroll to the target section
          targetElement.scrollIntoView({
            behavior: 'smooth'
          });

          // Close the menu after a short delay to allow scroll to complete
          setTimeout(() => {
            closeMobileMenu();
          }, 500);
        } else {
          // If no target element found, just close the menu
          closeMobileMenu();
        }
      }
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
