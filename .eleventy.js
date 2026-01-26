// Load environment variables from .env file
import dotenv from 'dotenv';
dotenv.config();

export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ 'src/assets': 'assets' });
  eleventyConfig.addPassthroughCopy({ static: '/' });

  // Filter do tłumaczeń
  eleventyConfig.addFilter('t', function (key, locale = 'pl') {
    const translations = this.ctx.translations || {};
    const lang = translations[locale] || translations.pl;

    // Obsługa zagnieżdżonych kluczy, np. "nav.home"
    const keys = key.split('.');
    let value = lang;

    for (const k of keys) {
      if (value && typeof value === 'object') {
        value = value[k];
      } else {
        return key; // Zwróć klucz jeśli nie znaleziono tłumaczenia
      }
    }

    return value || key;
  });

  // Filter do pobierania obecnego języka
  eleventyConfig.addFilter('currentLocale', function () {
    return this.ctx.locale || this.ctx.site?.siteLanguage || 'pl';
  });

  // Filter do generowania alternatywnego URL dla przełącznika języków
  eleventyConfig.addFilter('alternateUrl', function (currentUrl, targetLocale) {
    if (!currentUrl) return '/';

    // Jeśli aktualnie jesteśmy po polsku i chcemy EN
    if (targetLocale === 'en' && !currentUrl.startsWith('/en')) {
      // Dodaj /en/ na początku
      if (currentUrl === '/') return '/en/';
      return '/en' + currentUrl;
    }

    // Jeśli aktualnie jesteśmy po angielsku i chcemy PL
    if (targetLocale === 'pl' && currentUrl.startsWith('/en')) {
      // Usuń /en z początku
      const withoutEn = currentUrl.replace(/^\/en/, '');
      return withoutEn || '/';
    }

    return currentUrl;
  });

  // Global data - locale
  eleventyConfig.addGlobalData('locale', 'pl');

  return {
    dir: {
      input: 'src',
      output: 'dist',
      includes: '_includes',
    },
  };
}
