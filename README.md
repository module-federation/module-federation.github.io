<p align="center">
  <a style="padding-right: 16px;" href="https://tinacms.org">
    <img src="https://app.forestry.io/assets/forestry-logotype-pos-c71a6bd237d9199d0457ba2811553997ff5bab0d2cd0e740686ab26c00d9c240.svg" width="112" height="28">
  </a>
</p>
<h1 align="center">
  Federated Libraries
</h1>

## About

A website documenting Webpack 5 Module Federation.

##  Quick Setup

#### *Import Directly to Forestry*

<a href="https://app.forestry.io/quick-start?repo=kendallstrautman/brevifolia-next-forestry&engine=other">
  <img alt="Import this project into Forestry" src="https://assets.forestry.io/import-to-forestryK.svg" />
</a>

#### *Set-up Locally*
In your terminal, navigate to where you would like this blog to live, then run 
```bash
#clone the repo
git clone git@github.com:kendallstrautman/brevifolia-next-forestry.git

#navigate to the directory
cd brevifolia-next-forestry

#install dependencies & run dev server with yarn 
yarn install
yarn develop

#or with npm 
npm install
npm run develop
```
This will start a dev server, navigate to localhost:3000 to check it out.

## Project Structure 

- Site-level configuration is stored in `data/config.json`. 
- Edit styles within each component or page file within the `<style jsx>` tags. 
- Global styles live in the `Meta` component. 
- `public/` is where you images live and will get uploaded.
- `posts/`contains all your markdown blog posts.
- `pages` is where you page components live. 
- The blog pages are dynamically generated with a `slug` parameter. See the template in `pages/blog/[slug].js`. 
- The pages & template are comprised of components from `components`.
- The routes are generated in `next.config.js` with `exportPathMap`

## Using Forestry as your CMS

The `.forestry` directory contains all the settings information and frontmatter configuration to allow Forestry to setup the sidebar structure and editing capacity for this blog. After importing this blog into forestry, you can [access and edit](https://forestry.io/docs/editing/) all of the content via the sidebar. 

You can add new blog posts, [data files](https://forestry.io/docs/editing/data-files/), or entire pages and sections to fit your needs. You can also [customize how media](https://forestry.io/docs/media/) is handled, by configurating gitLFS, Cloudinary, S3, or Netlify Large Media.

You can set up a [remote admin](https://forestry.io/docs/editing/remote-admin/) for content editors to log in directly to yoururl.com/admin to make content updates.

### Instant Previews

The [instant preview](https://forestry.io/docs/previews/instant-previews/) method spins up the a development server for a long-lived preview that can quickly respond to content updates. When using instant previews, your preview command should be the develop command. The development server spawned by this command should be available over port 8080, and bind to 0.0.0.0. The forestry:preview command in this project's package.json will launch a dev server compatible with Forestry's instant previews.

## Deploy Options

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/jacob-ebey/federated-libraries-next)

[Netlify](https://www.netlify.com/blog/2016/09/29/a-step-by-step-guide-deploying-on-netlify/) is a great way to easily deploy sites. There's no special setup you need to do with Forestry to deploy with Netlify. When Forestry makes commits to your repo, Netlify will auto-trigger a rebuild / deploy when new commits are made.
