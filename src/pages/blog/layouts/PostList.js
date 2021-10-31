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

export default posts;