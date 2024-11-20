"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import { twMerge } from "tailwind-merge";

export default function Navbar() {

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

    const pathname = usePathname();

    const [showNav, setShowNav] = useState<boolean>(false);

    const toggleNav = () => {
        setShowNav(!showNav);
    }


    return (
        <header className="z-50 top-8 sticky w-full">
            <div className="flex justify-between items-center p-4 relative lg:px-12 xl:px-28 bg-primary overflow-x-clip">
                <div className="logo flex justify-center items-center">
                    <h1 className="font-medium text-3xl">Sushi Kathmandu</h1>
                </div>
                <nav className="flex justify-center items-center gap-4 text-tertiary">
                    {
                        navLinks.map((link, index) => {

                            const isActive = pathname === link.link;

                            return (
                                <Link
                                    key={index}
                                    href={link.link}
                                    className={twMerge("text-base font-medium hover:text-secondary px-3", isActive ? 'text-secondary' : '')}
                                >
                                    {link.title}
                                </Link>
                            )
                        })
                    }
                    <div className="text-base relative h-max">
                        <input
                            type="text"
                            className="px-4 pl-8 py-1 border border-tertiary rounded-lg focus:outline-none"
                            placeholder="Search"
                        />
                        <FaSearch className="absolute top-1/2 -translate-y-1/2 left-2" />
                    </div>
                </nav>
            </div>
        </header>
    );
}
