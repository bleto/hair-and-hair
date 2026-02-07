/**
 * Menu Locale Handler
 * Dynamically updates menu links based on current locale
 */
(function () {
  'use strict';

  // Routing configuration
  const routes = {
    home: '',
    services: 'services',
    pricing: 'pricing',
    booking: 'booking',
    consultations: 'consultations',
    'consultations-online': 'consultations-online',
    treatments: 'treatments',
    'head-spa': 'head-spa',
    training: 'training',
    contact: 'contact',
  };

  /**
   * Initialize menu locale handling
   */
  function initMenuLocale() {
    const menu = document.querySelector('.main-menu__list');
    if (!menu) return;

    const locale = menu.getAttribute('data-locale');
    const isEnglish = locale === 'en';

    // Get all links with data-route attribute
    const routeLinks = menu.querySelectorAll('a[data-route]');

    routeLinks.forEach((link) => {
      const route = link.getAttribute('data-route');
      const basePath = routes[route];

      if (basePath !== undefined) {
        // Build URL based on locale
        if (route === 'home') {
          link.href = isEnglish ? '/en/' : '/';
        } else {
          link.href = isEnglish ? `/en/${basePath}/` : `/${basePath}/`;
        }
      }
    });
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initMenuLocale);
  } else {
    initMenuLocale();
  }
})();
