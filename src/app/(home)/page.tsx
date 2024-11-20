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
    <main className="overflow-x-hidden min-h-screen">
      Sushi Resturant
    </main>
  );
}
