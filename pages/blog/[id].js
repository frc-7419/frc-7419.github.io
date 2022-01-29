import { getAllPostIds, getPostData } from '../../utils/Posts'
import Head from 'next/head'
import Date from '../../utils/Date'


export default function Post({ postData }) {
  return (
    <main className="flex-grow">
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
      <div className="pt-28 pb-12 md:pt-28 md:pb-20">

        <Head>
          <title>{postData.title}</title>
        </Head>
        <article>
          <h1 className="text-xl mb-1">{postData.title}</h1>
          <div className="text-gray-600 mb-4">
            <Date dateString={postData.date} />
          </div>
          <div className="prose prose-img:rounded" dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </article>
      </div>
      </div>
    </main>
  )
}

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}
