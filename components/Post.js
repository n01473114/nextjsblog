import Link from 'next/link'

export default function Post({ post }) {
  return (
    <article className='card'>
      <Link href={`/blog/${post.slug}`}>
      <div className='img-container'>
      <img className="img-btn" src={post.frontmatter.cover_image} alt='' />
      </div>
      </Link>

      <div className='post-date'>Posted on {post.frontmatter.date}</div>

      <h3>{post.frontmatter.title}</h3>

      <p>By {post.frontmatter.authors}</p>

      <Link href={`/blog/${post.slug}`}>
        <a className='btn'>Read More</a>
      </Link>
    </article>
  )
}