import React from 'react'
import Head from 'next/head'

import 'prism-themes/themes/prism-vs.css'
import 'semantic-ui-css/semantic.min.css'

import config from '../data/config.json'
import '../styles/bootstrap.css'
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
  if(redirect) window.location.replace(redirect)
  window.onload = function() { Calendly.initBadgeWidget({ url: 'https://calendly.com/scripted-alchemy/30-meeting-1-1', text: 'Schedule time with us', color: '#006bff', textColor: '#ffffff', branding: true }); }
`
function MyApp ({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>{config.title}</title>
        <script src='https://www.googletagmanager.com/gtag/js?id=UA-120967034-1' />
        <link rel="prerender" href="/blog"/>
        <meta name='description' content={config.description} />
        <script dangerouslySetInnerHTML={{ __html: tracking }} />
        <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet"/>
        <script src="https://assets.calendly.com/assets/external/widget.js" type="text/javascript" async/>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      </Head>

      <Component {...pageProps} />
    </>
  )
}

export default MyApp
// https://federated-libraries-next.now.sh/?utm_source=ModuleFederationExamples&utm_medium=https://github.com/sponsors/ScriptedAlchemy&utm_campaign=sponsor_link
