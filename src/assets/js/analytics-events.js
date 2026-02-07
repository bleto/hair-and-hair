(() => {
  const sendEvent = (name, params = {}) => {
    if (typeof window.gtag !== 'function') {
      return;
    }

    const language = document.documentElement.getAttribute('lang') || 'pl';
    window.gtag('event', name, {
      language,
      page_path: window.location.pathname,
      ...params,
    });
  };

  const isBookingLink = (href) => /\/booking(s)?\b/.test(href);

  document.addEventListener('click', (event) => {
    const link = event.target.closest('a');
    if (!link) {
      return;
    }

    const href = link.getAttribute('href') || '';

    if (href.startsWith('mailto:')) {
      sendEvent('contact_email_click', { href });
      return;
    }

    if (href.startsWith('tel:')) {
      sendEvent('contact_phone_click', { href });
      return;
    }

    if (isBookingLink(href)) {
      sendEvent('booking_click', { href });
    }
  });
})();
