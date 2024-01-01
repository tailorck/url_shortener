import Head from 'next/head';
import PropTypes from 'prop-types';
import React from 'react';

import Page from '../components/Page';

import 'aos/dist/aos.css';
import 'react-lazy-load-image-component/src/effects/blur.css';

export default function App({ Component, pageProps }) {
  return (
    <React.Fragment>
      <Head>
        <title>Url.ly</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta
          name="description"
          content="Shorten urls in seconds."
        />
        <meta
          name="keywords"
          content="URL Shortener"
        />
      </Head>

      <Page>
        <Component {...pageProps} />
      </Page>
    </React.Fragment>
  );
}

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
