import React from 'react';
import Layout from '../components/Layout';

const BookingPage = () => {

  // const iframeData = {
  //   id: 96326,
  //   uniqueId: '58cda12586',
  //   lang: 'pl',
  //   country: 'pl',
  //   mode: 'dialog',
  //   theme: 'default'
  // };
  // const url = `https://booksy.com/widget/index.html?id=${iframeData.id}&amp;lang=${iframeData.lang}&amp;country=${iframeData.country}&amp;mode=${iframeData.mode}&amp;theme=${iframeData.theme}&amp;uniqueId=${iframeData.uniqueId}`;

  return (
    <Layout>
      <article id="main">
        <header>
          <h2>Rezerwuj</h2>
          <p>Zarezerwuj wizytę</p>
        </header>
        <section className="wrapper style5">
          <div className="inner">
            <iframe
              className="booksy-iframe"
              title="Rejestracja Booksy"
              width="100%"
              // sandbox="allow-same-origin allow-forms allow-popups"
              frameBorder="0"
              src="https://booksy.com/widget/index.html?id=96326&amp;lang=pl&amp;country=pl&amp;mode=dialog&amp;theme=default&amp;uniqueId=58cda12586"
            ></iframe>
          </div>
        </section>
      </article>
    </Layout>
  )
};

export default BookingPage;
