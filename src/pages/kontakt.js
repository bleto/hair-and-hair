import React from 'react';

import Layout from '../components/Layout';
import Seo from '../components/Seo';
import config from '../../config';

const ContactPage = () => (
  <Layout>
    <Seo title="Kontakt" description="Skontaktuj sie ze mną" />
    <article id="main">
      <header>
        <h2>Kontakt</h2>
        <p>Skontaktuj sie z nami</p>
        <p>tel. 571 092 150</p>
      </header>
      <section className="wrapper style5 special">
        <div class="inner">
          <header className="major">
            <h2>ODWIEDŹ NAS</h2>
            <p>Ruczaj 17a, 30-409 Kraków</p>
          </header>
          <iframe title="map" width="700" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=Ruczaj%2017a,%2030-409%20Krak%C3%B3w&t=&z=15&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
          <div class="inner">
          <br />
            <header className="major">
              <h3>Komunikacja miejska</h3>
              <p>
                Przystanek: <b>Lipińskiego</b><br />
                Linie tramwajowe: 11, 17, 18, 52, 62<br />
                Linie autobusowe: 106, 194, 136, 494<br />
              </p>
            </header>
          </div>
        </div>
        <hr />
        <div className="inner">
          <header className="major">
            <h2>CHCESZ BYĆ NA BIEŻĄCO ?</h2>
            <p>Odwiedź HAIR&amp;HAIR w mediach społecznościowych</p>
          </header>
          <ul className="icons major">
            {config.socialLinks.map((social) => {
              const { style, icon, name, url } = social;
              return (
                <li key={url}>
                  <a
                    href={url}
                    className={`icon ${style} ${icon} major`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="label">{name}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </article>
  </Layout>
);

export default ContactPage;
