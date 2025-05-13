import Link from 'next/link'
export default function Home() {
  return (
    <>
      <div>
        <h2>license</h2><br />
        <p>The icons in this web pages are from free plan of Font Awesome.</p>
        <p>As to license, reffer below link</p><br />
        <Link href='https://fontawesome.com/license/free' className='text-blue-500'>
          Font Awesome Free License
        </Link>
      </div>
    </>
  )
}