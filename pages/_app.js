import React from 'react';
import Head from 'next/head'

import 'prism-themes/themes/prism-vs.css';
import 'semantic-ui-css/semantic.min.css';

import config from '../data/config.json'
import '../styles/bootstrap.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>{config.title}</title>
        <meta name="description" content={config.description}></meta>

        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </Head>

      <Component {...pageProps} />
    </>
  )
}

export default MyApp;
