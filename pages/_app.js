import React from 'react';
import Head from 'next/head'

import 'prism-themes/themes/prism-vs.css';
import 'semantic-ui-css/semantic.min.css';

import config from '../data/config.json'
import '../styles/bootstrap.css';
const tracking = `
function getUrlParams(search) {
    const hashes = search.slice(search.indexOf('?') + 1).split('&')
    const params = {}
    hashes.map(hash => {
        const [key, val] = hash.split('=')
        params[key] = decodeURIComponent(val)
    })
    return params
}

  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'UA-120967034-1');
  var redirect = getUrlParams(window.location.href).utm_medium
  console.log(redirect)
  if(redirect) window.location.replace(redirect)
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
// https://federated-libraries-next.now.sh/?utm_source=ModuleFederationExamples&utm_medium=https://github.com/sponsors/ScriptedAlchemy&utm_campaign=sponsor_link
