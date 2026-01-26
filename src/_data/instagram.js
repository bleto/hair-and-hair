// Instagram Feed Data Fetcher for 11ty
// Pobiera najnowsze posty z Instagram Basic Display API

/**
 * Odświeża Instagram Access Token
 * Long-lived tokeny są ważne przez 60 dni i mogą być odświeżone przed wygaśnięciem
 */
async function refreshInstagramToken(currentToken) {
  try {
    const response = await fetch(
      `https://graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token&access_token=${currentToken}`
    );

    if (!response.ok) {
      const error = await response.json();
      throw new Error(
        `Token refresh failed: ${error.error?.message || response.status}`
      );
    }

    const data = await response.json();

    if (data.access_token) {
      console.log('🔄 Instagram token odświeżony pomyślnie!');
      console.log('📝 NOWY TOKEN (ważny przez ~60 dni):');
      console.log('─'.repeat(80));
      console.log(data.access_token);
      console.log('─'.repeat(80));
      console.log('💡 Skopiuj powyższy token i zaktualizuj go w pliku .env');
      console.log(
        `   Wygasa za: ${data.expires_in ? Math.floor(data.expires_in / 86400) : '~60'} dni`
      );

      return data.access_token;
    }

    return currentToken;
  } catch (error) {
    console.warn('⚠️  Nie udało się odświeżyć tokena:', error.message);
    console.warn('   Używam istniejącego tokena...');
    return currentToken;
  }
}

/**
 * Sprawdza czy warto odświeżyć token (co ~30-45 dni)
 * Instagram pozwala odświeżać token wielokrotnie przed wygaśnięciem
 */
function shouldRefreshToken() {
  const lastRefreshDate = process.env.INSTAGRAM_TOKEN_LAST_REFRESH;

  if (!lastRefreshDate) {
    // Pierwszy raz - spróbuj odświeżyć
    return true;
  }

  try {
    const lastRefresh = new Date(lastRefreshDate);
    const daysSinceRefresh =
      (Date.now() - lastRefresh.getTime()) / (1000 * 60 * 60 * 24);

    // Odświeżaj co 30 dni (zostaje 30 dni zapasu przed wygaśnięciem)
    return daysSinceRefresh >= 30;
  } catch {
    return true;
  }
}

export default async function () {
  // Instagram Access Token - ustaw w zmiennych środowiskowych
  let accessToken = process.env.INSTAGRAM_ACCESS_TOKEN;

  // Jeśli nie ma tokena, zwróć przykładowe dane
  if (!accessToken) {
    console.warn(
      '⚠️  INSTAGRAM_ACCESS_TOKEN not found. Using placeholder data.'
    );
    return {
      posts: [
        {
          id: '1',
          permalink: 'https://www.instagram.com/p/DCe5wOforMk/',
          media_url: '/assets/images/resources/instagram_1.jpg',
          caption: 'Hair & Hair - Trychologia',
          media_type: 'IMAGE',
        },
        {
          id: '2',
          permalink: 'https://www.instagram.com/hair.and.hair.trychologia/',
          media_url: '/assets/images/resources/instagram_1.jpg',
          caption: 'Gabinet Hair & Hair Kraków',
          media_type: 'IMAGE',
        },
      ],
    };
  }

  // Automatyczne odświeżanie tokena (co ~30 dni)
  if (shouldRefreshToken()) {
    console.log('🔍 Sprawdzam czy token wymaga odświeżenia...');
    accessToken = await refreshInstagramToken(accessToken);
  }

  try {
    // Pobierz najnowsze posty z Instagram API
    const fields =
      'id,caption,media_type,media_url,permalink,thumbnail_url,timestamp';
    const limit = 6; // Liczba postów do wyświetlenia

    const response = await fetch(
      `https://graph.instagram.com/me/media?fields=${fields}&limit=${limit}&access_token=${accessToken}`
    );

    if (!response.ok) {
      throw new Error(`Instagram API error: ${response.status}`);
    }

    const data = await response.json();

    // Przefiltruj tylko zdjęcia i karuzele (pomijamy video dla uproszczenia)
    const posts = data.data
      .filter(
        (post) =>
          post.media_type === 'IMAGE' || post.media_type === 'CAROUSEL_ALBUM'
      )
      .map((post) => ({
        id: post.id,
        permalink: post.permalink,
        media_url:
          post.media_type === 'VIDEO' ? post.thumbnail_url : post.media_url,
        caption: post.caption || '',
        media_type: post.media_type,
        timestamp: post.timestamp,
      }))
      .slice(0, 6); // Bierz tylko 6 najnowszych

    console.log(`✅ Instagram: Fetched ${posts.length} posts`);

    return { posts };
  } catch (error) {
    console.error('❌ Instagram API Error:', error.message);

    // Fallback do przykładowych danych
    return {
      posts: [
        {
          id: '1',
          permalink: 'https://www.instagram.com/hair.and.hair.trychologia/',
          media_url: '/assets/images/resources/instagram_1.jpg',
          caption: 'Hair & Hair',
          media_type: 'IMAGE',
        },
      ],
    };
  }
}
