import React from 'react';
import { Helmet } from 'react-helmet';
import JsonLd from './JsonLd';
import config from '../../config';

export default function SEO({ description, lang = 'en', meta = [], title }) {
  const metaDescription = description || config.manifestName;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={config.manifestName}
      titleTemplate={title ? `%s | ${title}` : null}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          name: `keywords`,
          content: config.keywords,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    >
      <JsonLd>
        {{
          '@context': config.manifestSiteUrl,
          '@type': 'Organization',
          url: config.manifestSiteUrl,
          name: config.manifestName,
          contactPoint: {
            '@type': 'ContactPoint',
            telephone: '571-092-150',
            contactType: 'Rezerwacja',
          },
        }}
      </JsonLd>
    </Helmet>
  );
}
