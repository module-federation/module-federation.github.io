import * as React from 'react'
import Head from 'next/head'
import matter from 'gray-matter'
import {
  Button,
  Container,
  Divider,
  Header,
  Segment,
} from 'semantic-ui-react';

import config from '../../data/config.json'
import navItems from '../../nav-items'
import AppShell from '../../components/app-shell'
import Hero from '../../components/hero'

// function reformatDate(fullDate) {
//   const date = new Date(fullDate)
//   return date.toDateString().slice(4);
// }

export default function BlogPage ({ posts }) {
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
              <h1>The Federated Blog</h1>
              <h2>
                stay up to date with the latest in module federation
              </h2>
            </Container>
          </Hero>
        )}
      >
        <Segment style={{ padding: '8em 0em' }} vertical>
        <Container text>
            {posts.map((post, i) => (
              <React.Fragment key={post.slug}>
                {i > 0 && <Divider style={{ margin: '3em 0em' }} />}

                <Header as="h3" style={{ fontSize: '2em' }}>
                  {post.title}
                </Header>
                <p>
                  {post.secondary_title}
                </p>
                <Button
                  as="a"
                  size="large"
                  href={`/blog/${post.slug}`}
                  className="no-print"
                >
                  Read Post
                </Button>
              </React.Fragment>
            ))}
          </Container>
        </Segment>
      </AppShell>
    </>
  )
}

BlogPage.getInitialProps = async function () {
  const ctx = require.context("../../posts", true, /\.md$/)
  const keys = ctx.keys()
  const values = keys.map(ctx)

  const posts = keys.map((key, index) => {
    console.log(key)
    const slug = key.split('/')[1].replace(/ /g, '-').slice(0, - 3).trim()

    const parsed = matter(values[index].default)
    console.log(parsed)

    return {
      ...parsed.data,
      slug
    }
  })

  return { posts }
}
