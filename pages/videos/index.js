import * as React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import matter from 'gray-matter'
import {
  Button,
  Container,
  Divider,
  Header,
  Segment,
} from 'semantic-ui-react';
import {
  extract,
} from 'oembed-parser';
import config from '../../data/config.json'
import navItems from '../../nav-items'
import AppShell from '../../components/app-shell'
import Hero from '../../components/hero'
import {videoWrapper,videoTitle} from './video.module.css'
// function reformatDate(fullDate) {
//   const date = new Date(fullDate)
//   return date.toDateString().slice(4);
// }

export default function BlogPage({posts, embeds}) {
  return (
    <>
      <Head>
        <title>The Federated Blog | {config.title}</title>
      </Head>

      <AppShell
        menuItems={navItems.menuItems}
        secondaryMenuItems={navItems.secondaryMenuItems}
        heading={() => (
          <Hero>
            <Container text>
              <h1>The Federated Videos</h1>
              <h2>
                Check out videos about module federation
              </h2>
            </Container>
          </Hero>
        )}
      >
        <Segment style={{padding: '8em 0em'}} vertical>
          <Container text>
            {embeds.map((embed, i) => {
              return (
                <React.Fragment key={embed.thumbnail_url}>
                  {i > 0 && <Divider style={{margin: '3em 0em'}}/>}

                  <Header as="h3" className={videoTitle} style={{fontSize: '2em'}}>
                   <Link href={`/videos/${embed.slug}`}>{embed.title}</Link>
                  </Header>
                  <div className={videoWrapper} dangerouslySetInnerHTML={{__html: embed.html}}></div>
                </React.Fragment>
              )
            })}
          </Container>
        </Segment>
      </AppShell>
    </>
  )
}

BlogPage.getInitialProps = async function () {
  const ctx = require.context("../../videos", true, /\.md$/)
  const keys = ctx.keys()
  const values = keys.map(ctx)

  const posts = keys.map((key, index) => {
    const slug = key.split('/')[1].replace(/ /g, '-').slice(0, -3).trim()

    const parsed = matter(values[index].default)

    return {
      ...parsed.data,
      slug
    }
  }).sort(function (a, b) {
    return a.date - b.date;
  }).reverse()

  const embeds = await Promise.all(posts.map((post) => {
    return extract(post.video_url).then((obj)=>{
     return Object.assign(obj,{title:post.title,slug:post.slug})
    })
  }))
  return {posts, embeds}
}
