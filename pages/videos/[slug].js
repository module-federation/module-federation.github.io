import * as React from "react";
import matter from "gray-matter";

import ArticlePage from "../../components/article-page";
import navItems from "../../nav-items";
import { extract } from "oembed-parser";
import { videoContent, videoWrapper } from "./video.module.css";

export function getStaticPaths() {
  const ctx = require.context("../../videos", true, /\.md$/);

  const paths = ctx.keys().map((key) => {
    const slug = key.split("/")[1].replace(/ /g, "-").slice(0, -3).trim();
    return { params: { slug } };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const markdown = await import(`../../videos/${slug}.md`);
  const {
    content,
    data: { date, ...rest },
  } = matter(markdown.default);

  const embed = await extract(rest.video_url).then((obj) => {
    return Object.assign(obj, { title: rest.title });
  });

  return {
    props: {
      content,
      data: {
        ...rest,
        date: date.toISOString().substring(0, 10),
      },
      embed,
    },
  };
}

export default function BlogTemplate(props) {
  const frontmatter = props.data;

  return (
    <ArticlePage
      menuItems={navItems.menuItems}
      secondaryMenuItems={navItems.secondaryMenuItems}
      title={frontmatter.title}
      secondaryTitle={frontmatter.secondary_title}
    >
      <article className={videoContent}>
        <div
          className={videoWrapper}
          dangerouslySetInnerHTML={{ __html: props.embed.html }}
        />
      </article>
    </ArticlePage>
  );
}
