import * as React from 'react'
import Head from 'next/head'
import Prism from 'prismjs'
import matter from 'gray-matter'
import marksy from 'marksy/jsx'

import ArticlePage from '../../components/article-page'
import navItems from '../../nav-items'

import config from '../../data/config.json'

export function getStaticPaths () {
  const ctx = require.context('../../posts', true, /\.md$/)

  const paths = ctx.keys().map((key, index) => {
    const slug = key.split('/')[1].replace(/ /g, '-').slice(0, -3).trim()
    return { params: { slug } }
  })

  return {
    paths,
    fallback: false
  }
}


const compile = marksy({
  createElement: React.createElement,
  highlight(language, code) {
    return Prism.highlight(code, Prism.languages[language], language);
  },
});

// function reformatDate(fullDate) {
//   const date = new Date(fullDate)
//   return date.toDateString().slice(4);
// }

export default function BlogPostPage({content, data}) {
  const body = compile(content);
  const scrollToView = () => {
    var elmnt = document.getElementById("medium-content");
    elmnt.contentWindow.focus();
    elmnt.scrollIntoView();
  }
  const embeddedArticle = data.medium_link ? (
    <iframe id="medium-content" width="100%" height="1000px" onLoad={scrollToView} style={{height: "200vh"}}
            frameBorder={0}
            src={data.medium_link}></iframe>) : null

  return (
    <>
      <Head>
        <title>{data.title} | {config.title}</title>
        {data.secondary_title && <meta name='description' content={data.secondary_title} />}
      </Head>

      <ArticlePage
        isText={!embeddedArticle}
        menuItems={navItems.menuItems}
        secondaryMenuItems={navItems.secondaryMenuItems}
        title={data.title}
        secondaryTitle={data.secondary_title}
      >
        <article className='center-images'>
          {embeddedArticle ? embeddedArticle : body.tree}
        </article>
      </ArticlePage>
    </>
  )
}
