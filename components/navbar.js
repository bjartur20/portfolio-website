export default function Navbar() {
  return (
    <li>
      <ul>
        <Link href="/about">
          <a>About</a>
        </Link>
      </ul>
      <ul>
        <Link href="/projects">
          <a>Projects</a>
        </Link>
      </ul>
      <ul>
        <Link href="/contact">
          <a>Contact</a>
        </Link>
      </ul>
    </li>
  )
}