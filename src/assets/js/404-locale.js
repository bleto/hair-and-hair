// 404 Page - Locale Detection
(function() {
  // Sprawdź czy jesteśmy na stronie 404 (tytuł zawiera 404 lub specyficzna treść)
  const is404Page = document.title.includes('404') || 
                    document.querySelector('.get-free__title')?.textContent.includes('404');
  
  if (!is404Page) return;

  // Pobierz aktualny URL z paska przeglądarki (oryginalny URL nieistniejącej strony)
  const currentPath = window.location.pathname;
  
  // Wykryj język z oryginalnego URL
  const isEnglish = currentPath.startsWith('/en/') || currentPath === '/en';
  const targetLocale = isEnglish ? 'en' : 'pl';
  
  // Pobierz aktualną stronę która jest załadowana
  const currentPage = document.documentElement.lang || 'pl';
  
  // Jeśli język strony nie zgadza się z językiem URL, przekieruj
  if (targetLocale === 'en' && currentPage !== 'en') {
    // Oryginalny URL był /en/coś ale załadowano polską 404
    window.location.replace('/en/404.html');
  } else if (targetLocale === 'pl' && currentPage === 'en') {
    // Oryginalny URL był /coś ale załadowano angielską 404
    window.location.replace('/404.html');
  }
})();
