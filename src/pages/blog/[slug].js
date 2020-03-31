import * as React from 'react'
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";

import ArticlePage from '../../components/article-page';
import navItems from '../../nav-items';

export default function BlogTemplate(props) {
  // function reformatDate(fullDate) {
  //   const date = new Date(fullDate)
  //   return date.toDateString().slice(4);
  // }
  const markdownBody = props.content
  const frontmatter = props.data

  return (
    <ArticlePage
      menuItems={navItems.menuItems}
      secondaryMenuItems={navItems.secondaryMenuItems}
      title={frontmatter.title}
      secondaryTitle={frontmatter.secondary_title}
    >
      <ReactMarkdown source={markdownBody} />
    </ArticlePage>
  );
}

BlogTemplate.getInitialProps = async function(ctx) {
  const { slug } = ctx.query
  const content = await import(`../../posts/${slug}.md`)
  const config = await import(`../../data/config.json`)
  const data = matter(content.default);
  return {
    siteTitle: config.title,
    ...data
  }
}