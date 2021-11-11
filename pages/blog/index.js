import Head from 'next/head'
import { getSortedPostsData } from '../../lib/posts'
import Link from 'next/link'
import Date from '../../components/date'

export default function Home({ allPostsData }) {
  return (
    <main className="flex-grow">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-28 pb-12 md:pt-28 md:pb-20">
          <section className="p-1 relative">
            <h2 className="h2 pb-8">Blog</h2>
            <ul className="">
              {allPostsData.map(({ id, date, title }) => (
                <li className="rounded mb-8 text-blue-600" key={id}>
                  <Link href={`/blog/${id}`}>
                    <a>{title}</a>
                  </Link>
                  <br />
                  <small className="text-gray-600">
                    <Date dateString={date} />
                  </small>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </main>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
