import * as React from "react";
import Head from "next/head";
import Link from "next/link";
import matter from "gray-matter";
import { Button, Container, Divider, Header, Segment } from "semantic-ui-react";

import config from "../../data/config.json";
import navItems from "../../nav-items";
import AppShell from "../../components/app-shell";
import Hero from "../../components/hero";
import { container } from "./blog.module.css";

export function getStaticProps() {
  const ctx = require.context("../../posts", true, /\.md$/);
  const keys = ctx.keys();
  const values = keys.map(ctx);

  const posts = keys.map((key, index) => {
    const slug = key.split("/")[1].replace(/ /g, "-").slice(0, -3).trim();

    const parsed = matter(values[index].default);

    const { date, ...rest } = parsed.data;
    return {
      ...rest,
      slug,
      date: date.toISOString().substring(0, 10),
    };
  });

  console.log(posts);

  return {
    props: { posts },
  };
}

export default function BlogPage({ posts }) {
  return (
    <>
      <Head>
        <title>The Federated Blog | {config.title}</title>
        <script
          async
          src="//cdn.embedly.com/widgets/platform.js"
          charSet="UTF-8"
        ></script>
      </Head>

      <AppShell
        menuItems={navItems.menuItems}
        secondaryMenuItems={navItems.secondaryMenuItems}
        heading={() => (
          <Hero>
            <Container text>
              <h1>The Federated Blog</h1>
              <h2>stay up to date with the latest in module federation</h2>
            </Container>
          </Hero>
        )}
      >
        <Segment style={{ padding: "8em 0em" }} vertical>
          <Container text className={container}>
            {posts.map((post, i) => {
              const embeddedArticle = post.medium_link ? (
                <a
                  href={post.medium_link}
                  data-card-controls={0}
                  data-card-via={post.slug}
                  data-card-chrome={0}
                  className="embedly-card"
                >
                  Embedly
                </a>
              ) : null;
              return (
                <React.Fragment key={post.slug}>
                  {i > 0 && <Divider style={{ margin: "3em 0em" }} />}

                  <Header
                    as="h3"
                    style={{
                      fontSize: "2em",
                      display: embeddedArticle ? "none" : "inherit",
                    }}
                  >
                    {post.title}
                  </Header>
                  <p>
                    {embeddedArticle ? (
                      <Link href={`/blog/${post.slug}`}>
                        <a>{embeddedArticle}</a>
                      </Link>
                    ) : (
                      post.secondary_title
                    )}
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
              );
            })}
          </Container>
        </Segment>
      </AppShell>
    </>
  );
}
