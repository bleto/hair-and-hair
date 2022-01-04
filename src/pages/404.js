import React from 'react';

import Layout from '../components/Layout';
import logoTop from '../assets/images/hah-color-top.svg';
import config from '../../config';

const IndexPage = () => (
  <Layout>
    <article id="main">
      <header>
        <div className="logo">
          <img
            className="logo"
            src={logoTop}
            alt={config.heading}
            width="20%"
          />
        </div>
        <h2>Nie znaleziono strony</h2>
        <p>Błędny adres URL</p>
        <ul className="actions stacked">
          <li>
            <a href="/" className="button fit primary">
              Strona główna
            </a>
          </li>
        </ul>
      </header>
    </article>
  </Layout>
);

export default IndexPage;
