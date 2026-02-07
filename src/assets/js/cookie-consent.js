(() => {
  const STORAGE_KEY = 'hah_cookie_consent';

  const init = () => {
    const banner = document.querySelector('[data-cookie-banner]');

    if (!banner) {
      return;
    }

    const acceptButton = banner.querySelector('[data-cookie-accept]');
    const rejectButton = banner.querySelector('[data-cookie-reject]');

    const getConsent = () => {
      try {
        return localStorage.getItem(STORAGE_KEY);
      } catch (error) {
        return null;
      }
    };

    const setConsent = (value) => {
      try {
        localStorage.setItem(STORAGE_KEY, value);
      } catch (error) {
        // Ignore storage errors (private mode, blocked storage, etc.).
      }

      banner.classList.remove('is-visible');
      banner.setAttribute('hidden', '');
      document.documentElement.dataset.cookieConsent = value;

      window.dispatchEvent(
        new CustomEvent('cookie-consent-change', {
          detail: { value },
        })
      );
    };

    const showBanner = () => {
      banner.removeAttribute('hidden');
      requestAnimationFrame(() => {
        banner.classList.add('is-visible');
      });
    };

    const currentConsent = getConsent();

    if (!currentConsent) {
      showBanner();
    } else {
      document.documentElement.dataset.cookieConsent = currentConsent;
    }

    if (acceptButton) {
      acceptButton.addEventListener('click', () => setConsent('accepted'));
    }

    if (rejectButton) {
      rejectButton.addEventListener('click', () => setConsent('rejected'));
    }
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
