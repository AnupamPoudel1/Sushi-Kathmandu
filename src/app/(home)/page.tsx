import Link from "next/link";
import { FaSearch } from "react-icons/fa";

export default function Home() {

  const navLinks = [
    {
      title: 'Home',
      link: '/'
    },
    {
      title: 'About',
      link: '/about'
    },
    {
      title: 'Menu',
      link: '/menu'
    },
    {
      title: 'Blog',
      link: '/blog'
    },
    {
      title: 'Contact',
      link: '/contact'
    },
  ]

  return (
    <main className="overflow-x-hidden bg-gray-300 min-h-screen">
      <header className=" bg-white py-4 px-28 flex justify-between items-center">
        <div className="logo flex justify-center items-center text-2xl font-sans">
          <Link href={'/'}>
            Sushi Kathmandu
          </Link>
        </div>
        <nav className="flex justify-center items-center gap-4">
          {
            navLinks.map((link, index) => (
              <Link
                key={index}
                href={link.link}
                className="font-semibold text-base"
              >
                {link.title}
              </Link>
            ))
          }
          <button className="text-base">
            <FaSearch />
          </button>
        </nav>
      </header>
      Sushi Resturant
    </main>
  );
}
