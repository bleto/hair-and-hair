import React, { useEffect } from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';
import Seo from '../components/Seo';
import { createWidgetContainer, createIframe } from '../utils/booksy';

const BookingPage = () => {
  useEffect(() => {
    let widgetContainer = null;
    const iframeData = {
      id: 96326,
      lang: 'pl',
      country: 'pl',
      mode: 'inline',
      theme: 'default',
    };
    const iframeSrc =
      'https://booksy.com/widget/index.html?id=' +
      iframeData.id +
      '&lang=' +
      iframeData.lang +
      '&country=' +
      iframeData.country +
      '&mode=' +
      iframeData.mode +
      '&theme=' +
      iframeData.theme;

    try {
      widgetContainer = createWidgetContainer(iframeData);

      createIframe(widgetContainer, iframeSrc);
    } catch (e) {
      console.error(e);
    }
    return () => {
      widgetContainer.remove();
    };
  }, []);

  return (
    <Layout>
      <Seo title="Rezerwacja" description="Zarezerwuj wizytę" />
      <article id="main">
        <header>
          <h2>Rezerwuj</h2>
          <p>Zarezerwuj wizytę</p>
        </header>
        <section className="wrapper style5 special">
          <div class="inner">
            <header className="major">
              <h3>ZASADY ANULOWANIA REZERWACJI</h3>
              <p>Jeśli z różnych powodów nie uda się Państwu dotrzeć do gabinetu na umówioną
                  wizytę/konieczne jest przełożenie terminu wizyty, prosimy o informację co najmniej 48 h
                  przed zaplanowaną wizytą. Postaramy się znaleźć dla Państwa dogodny termin następnego
                  spotkania.
                  W sytuacji kiedy klient dwukrotnie przełoży wizytę lub nie odwoła wizyty- umówienie kolejnej
                  wizyty/ zabiegu nie będzie możliwe.</p>
            </header>
            <header className="major">
              <h3>SPÓŹNIENIA NA UMÓWIONĄ WIZYTĘ</h3>
              <p>Mamy świadomość, że poruszanie się po Krakowie bywa trudne. Pracujemy według
                wcześniej ustalonego harmonogramu. Spóźnienia powyżej 15 min będzie oznaczało, że
                wizyta prawdopodobnie nie będzie mogła odbyć się w ustalonym wcześniej terminie i
                zostanie przełożona na inny dogodny dla Państwa termin.</p>
                <Link to="/regulamin">Regulamin</Link>
            </header>
          </div>
          <div className="inner iframeContainer" />
        </section>
      </article>
    </Layout>
  );
};

export default BookingPage;
