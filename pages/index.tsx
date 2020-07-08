import { NextPage } from 'next'
import Link from 'next/link'
import Layout from '../components/Layout'

interface Props {
  userAgent?: string;
}

const Page: NextPage<Props> = ({ userAgent }) => (
  
  <Layout title="Home | Next.js + TypeScript Example">
  <h1>Hello Next.js 👋</h1>
  <p>
    <Link href="/about">
      <a>About</a>
    </Link>
  </p>
  <p><main>Your user agent: {userAgent}</main></p>
</Layout>
)

Page.getInitialProps = async ({ req }) => {
  const userAgent = req ? req.headers['user-agent'] : navigator.userAgent
  return { userAgent }
}

export default Page

