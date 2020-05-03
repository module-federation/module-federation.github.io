import * as React from 'react'
import Prism from 'prismjs';
import matter from 'gray-matter';
import marksy from 'marksy/jsx';


import ArticlePage from '../../components/article-page';
import navItems from '../../nav-items';
import {extract} from "oembed-parser";
import {videoContent,videoWrapper} from "./video.module.css"

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

export default function BlogTemplate(props) {
  const markdownBody = props.content
  const frontmatter = props.data

  const body = compile(markdownBody);
  return (
    <ArticlePage
      menuItems={navItems.menuItems}
      secondaryMenuItems={navItems.secondaryMenuItems}
      title={frontmatter.title}
      secondaryTitle={frontmatter.secondary_title}
    >
      <article className={videoContent}>
        <div className={videoWrapper} dangerouslySetInnerHTML={{__html: props.embed.html}}></div>
      </article>
    </ArticlePage>
  );
}

BlogTemplate.getInitialProps = async function (ctx) {
  const {slug} = ctx.query
  const content = await import(`../../videos/${slug}.md`)
  const config = await import(`../../data/config.json`)
  const data = matter(content.default);

  const embed = await extract(data.data.video_url).then((obj) => {
    return Object.assign(obj, {title: data.data.title})
  })
  return {
    siteTitle: config.title,
    ...data,
    embed
  }
}
