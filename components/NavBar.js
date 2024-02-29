import Link from 'next/link';

const NavBar = () => {
   
  return (
    <nav>
      <ul className="flex">
        <li>
          <Link href="/landing" exact>
            <a>home</a>
          </Link>
        </li>
        <li>
          <Link href="/inquiry">
            <a>Inquiry</a>
          </Link>
        </li>
        <li>
          <Link href="/artist/page">
            <a>artist</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;