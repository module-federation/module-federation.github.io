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

export async function getStaticProps ({ params: { slug } }) {
  const markdown = await import(`../../posts/${slug}.md`)
  const { content, data: { date, ...rest } } = matter(markdown.default)

  return {
    props: {
      content,
      data: {
        ...rest,
        date: date.toISOString().substring(0, 10)
      }
    }
  }
}

const compile = marksy({
  createElement: React.createElement,
  highlight (language, code) {
    return Prism.highlight(code, Prism.languages[language], language)
  }
})

export default function BlogPostPage ({ content, data }) {
  const body = compile(content)

  return (
    <>
      <Head>
        <title>{data.title} | {config.title}</title>
        {data.secondary_title && <meta name='description' content={data.secondary_title} />}
      </Head>

      <ArticlePage
        menuItems={navItems.menuItems}
        secondaryMenuItems={navItems.secondaryMenuItems}
        title={data.title}
        secondaryTitle={data.secondary_title}
      >
        <article className='center-images'>
          {body.tree}
        </article>
      </ArticlePage>
    </>
  )
}
