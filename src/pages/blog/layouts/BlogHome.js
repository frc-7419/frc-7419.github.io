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
            <div className="py-12 md:py-20">


              {posts.map((post) => (
                <Link to={'/blog/' + post.slug}>
                {/* TODO: make it an actual card */}
                  <div className="card mb-3 pointer" style={{ maxWidth: '540px' }}>
                    <div className="row g-0">
                      <div className="col-md-8">
                        <div className="card-body">
                          <h5 className="card-title">{post.frontMatter.title}</h5>
                          <p className="card-text text-gray-700 text-sm">{post.frontMatter.description}</p>
                          <p className="card-text">
                            <small className="text-muted">{post.frontMatter.date}</small>
                          </p>
                        </div>
                      </div>
                      <div className="col-md-4 m-auto">
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
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}




export default BlogHome;