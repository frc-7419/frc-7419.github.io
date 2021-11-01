import { Link } from 'react-router-dom';

import Header from '../../../partials/Header';
import Footer from '../../../partials/Footer';

import posts from './PostList';

function BlogHome() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Header />
      <main className="flex-grow">
        <section className="relative">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="py-14 md:py-20">
            <h1 className="h1 mb-5">Blog Posts</h1>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">

                {posts.map((post) => (
                  <Link to={'/blog/' + post.slug}>
                  {/* TODO: make it an actual card */}
                    <div className="rounded-lg bg-gray-200 p-3 flex justify-center items-center">
                      <div className="">
                        <h5 className="h5">{post.frontMatter.title}</h5>
                        <p className="text-gray-700 text-sm">{post.frontMatter.description}</p>
                        <small className="text-muted">{post.frontMatter.date}</small>
                      </div>
                      <div className="">
                      
                        {/* <Image
                          src={post.frontMatter.thumbnailUrl}
                          className="img-fluid mt-1 rounded-start"
                          alt="thumbnail"
                          width={500}
                          height={400}
                          objectFit="cover"
                        /> */}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}




export default BlogHome;