import React from 'react';

import Layout from '../components/Layout';

const IndexPage = () => (
  <Layout>
    <article id="main">
      <header>
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
