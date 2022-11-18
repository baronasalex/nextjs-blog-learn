import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>I'm beginner front-end developer. My projects on the <a href="https://github.com/baronasalex">GitHub</a> </p>
        <Link href="/posts/first-post">Post page</Link>
        <p>
          ("This is a sample website - you’ll be building a site like this on"{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}