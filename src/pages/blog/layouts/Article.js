import React from 'react';

import posts from './PostList';

import ReactMarkdown from 'react-markdown'

import Header from '../../../partials/Header';
import Footer from '../../../partials/Footer';

import { useParams } from 'react-router-dom'

function Article() {

  const {slug} = useParams();
  var valid = false;
  for (var i = 0; i < posts.length; i++) {
    if (posts[i].slug === slug) {
      valid = true;
      var post_index = i;
    }
  }
  if (valid === false) {
    // redirect 404
  }
  return (
    <>
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Header />
      <main className="flex-grow">
        <section className="relative">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="py-12 md:py-20">

              <h1 className="h1">{posts[post_index].frontMatter.title}</h1>
              <ReactMarkdown>
                {posts[post_index].mdSource}
              </ReactMarkdown>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
    </>
  );
}

export default Article;