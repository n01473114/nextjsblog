import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import marked from 'marked'
import Link from 'next/link'

export default function PostPage({
  frontmatter: { title, authors, date, cover_image },
  slug,
  content,
}) {
  return (
    <>
    <section className='card card-page'>
      <Link href='/'>
        <a className='btn btn-back'>🠔</a>
      </Link>
      <h1 className='post-title'>{title}</h1>
      <h2>By {authors}</h2>
      <article className='post-date'>Posted on {date}</article>
      <img src={cover_image} alt='' />
      <article className='post-body'>
        <div dangerouslySetInnerHTML={{__html: marked.parse(content)}}></div>
      </article>
    </section>
    </>
  )
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join('posts'))

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace('.md', ''),
    },
  }))

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(
    path.join('posts', slug + '.md'),
    'utf-8'
  )

  const { data: frontmatter, content } = matter(markdownWithMeta)

  return {
    props: {
      frontmatter,
      slug,
      content,
    },
  }
}
