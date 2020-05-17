import React from 'react';
import Head from 'next/head'

import 'prism-themes/themes/prism-vs.css';
import 'semantic-ui-css/semantic.min.css';

import config from '../data/config.json'
import '../styles/bootstrap.css';
const tracking = `<!-- Global site tag (gtag.js) - Google Analytics -->
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-120967034-1');
`
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>{config.title}</title>
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-120967034-1"></script>

        <meta name="description" content={config.description}></meta>
        <script dangerouslySetInnerHTML={{__html:tracking}}/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </Head>

      <Component {...pageProps} />
    </>
  )
}

export default MyApp;
