import preval from 'babel-plugin-preval/macro'
// need to use preval because fetch files from server side
const posts = preval`
const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const files = fs.readdirSync(path.join('src/pages/blog/posts'))
const posts = files.map(filename => {
  const markdownWithMeta = fs.readFileSync(path.join('src/pages/blog/posts', filename), 'utf-8');
  const { data: frontMatter, content } = matter(markdownWithMeta);
  const mdSource = content;
  return {
    frontMatter,
    slug: filename.split('.')[0],
    mdSource
  }
})
module.exports = posts
`

// -- generate feed --

const RSS = require("rss");
const fs = require("fs");
const showdown = require("showdown");
const converter = new showdown.Converter();

var feed = new RSS({
  title: "7419 Blog",
  description: "Description",
  feed_url: "https://frc-7419.github.io/#/rss.xml",
  site_url: "https://frc-7419.github.io",
  // image_url: "image",
});

posts.map((post) => (
  feed.item({
    title: post.frontMatter.title,
    description: post.frontMatter.description,
    url: "https://frc-7419.github.io/#/blog/" + post.slug,
    date: post.frontMatter.date,
    description: converter.makeHtml(post.mdSource)
  })
))

var xml = feed.xml({
  indent: true
})

fs.writeFile("public/rss.xml", xml, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Wrote ./public/rss.xml");
  }
});