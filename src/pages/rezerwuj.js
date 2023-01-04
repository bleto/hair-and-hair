import React, { useEffect } from 'react';
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
        <section className="wrapper style5">
          <div className="inner iframeContainer" />
        </section>
      </article>
    </Layout>
  );
};

export default BookingPage;
