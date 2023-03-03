import React from "react";
import {Navbar} from 'flowbite-react'
import Link from 'next/link'


const Navigation = () => {
    const styling = "md:text-2xl text-white font-extralight font-roboto transition ease-in-out delay-150  hover:-translate-y-1 md:hover:scale-110 duration-150"
    return (
        <Navbar fluid={true} className="w-full rounded-none absolute bg-opacity-0 top-0 mt-5">
          <Navbar.Brand>
            <img  src="logo.png" className="mr-3 h-6 sm:h-9" alt="HM Logo"/>
            <span className="self-center whitespace-nowrap text-xl text-white font-roboto"> Henry Marken </span>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse >
            <Link href="/" className={styling}> Home </Link>
            <Link href="/gallery" className={styling}> Gallery </Link>
            <Link href="/photoshoots" className={styling}> Photoshoots </Link>
            <Link href="/about" className={styling}> About </Link>
            <Link href="/contact" className={styling}> Contact </Link>
          </Navbar.Collapse>
        </Navbar>
    )
}

export default Navigation
// "md:text-2xl text-white underline font-extralight font-roboto"
// "md:text-2xl text-white font-extralight font-roboto transition ease-in-out delay-150  hover:-translate-y-1 md:hover:scale-110 duration-150"