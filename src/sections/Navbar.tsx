"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { RxCross2, RxHamburgerMenu } from "react-icons/rx";
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
            title: 'Contact',
            link: '/contact'
        },
    ]

    const pathname = usePathname();

    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <header className="z-50 top-8 sticky w-full">
            <div className="flex justify-between items-center p-4 relative lg:px-12 xl:px-28 bg-primary overflow-x-clip">
                <Link href={'/'} className="logo flex justify-center items-center text-tertiary">
                    <h1 className="font-medium text-3xl"><span className="text-secondary">Bukta</span>Sushi</h1>
                </Link>
                <nav className="hidden lg:flex justify-center items-center gap-4 text-tertiary">
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
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="lg:hidden flex justify-center items-center text-2xl"
                >
                    {
                        isOpen ? <RxCross2 /> : <RxHamburgerMenu />
                    }
                </button>
                <nav className={twMerge("absolute lg:hidden flex flex-col gap-6 bg-primary w-full py-6 px-4 transition-all duration-300", isOpen ? 'top-16 left-0' : 'top-16 left-full')}>
                    {
                        navLinks.map((link, index) => {

                            const isActive = pathname === link.link;

                            return (
                                <Link
                                    key={index}
                                    href={link.link}
                                    onClick={() => setIsOpen(false)}
                                    className={twMerge("text-base font-medium hover:text-secondary px-3", isActive ? 'text-secondary' : '')}
                                >
                                    {link.title}
                                </Link>
                            )
                        })
                    }
                </nav>
            </div>
        </header>
    );
}
