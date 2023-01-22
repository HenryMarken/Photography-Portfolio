import {Carousel, Navbar} from 'flowbite-react'
import Link from 'next/link'

function Gallery () {
    return (
        <main>
            <div className="h-1/2 w-full relative">
                <img src="/images/water-reflection.jpg" className="object-fill h-full w-full"/>
                <div className="absolute  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <h1 className="text-6xl tracking-widest font-medium">GALLERY</h1>
                </div>
                <Navbar fluid={true} className="w-full rounded-none absolute bg-opacity-0 top-0 mt-5">
                <Navbar.Brand >
                    <img  src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite Logo"/>
                    <span className="self-center whitespace-nowrap text-xl text-white"> Henry Marken </span>
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse>
                    <Link href="/" className="md:text-2xl text-white hover:text- font-extralight font-roboto transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-150"> Home </Link>
                    <Link href="/gallery" className="md:text-2xl text-white underline font-extralight font-roboto"> Gallery </Link>
                    <Link href="/photoshoots" className="md:text-2xl text-white font-extralight font-roboto transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-150 "> Photoshoots </Link>
                    <Link href="/about" className="md:text-2xl text-white font-extralight font-roboto transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-150"> About </Link>
                    <Link href="/contact" className="md:text-2xl text-white font-extralight font-roboto transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-150"> Contact </Link>
                </Navbar.Collapse>
                </Navbar>
            </div>

            <div className="grid grid-flow-row auto-rows-max grid-cols-3 gap-6 my-10 mx-10">
        
                <img src="/images/walterdale-night.jpg" className="object-fill"/>
                <img src="/images/stadium-night.jpg" className="object-fill my-auto"/>
                <img src="/images/walterdale-side.jpg" className="object-fill"/>
                <img src="/images/highlevel-bike.jpg" className="object-fill my-auto"/>
                <img src="/images/university-fall.jpg" className="object-fill my-auto"/>
                <img src="/images/vancouver-ariel.jpg" className="object-fill my-auto"/>
                <img src="/images/sydney-book.png" className="object-fill"/>
                <img src="/images/brett-mountain.jpg" className="object-fill"/>
                <img src="/images/jaret-mountain.jpg" className="object-fill"/>
                <img src="/images/edmonton-color.jpg" className="object-fill"/>
                <img src="/images/vancouver-bridge.jpg" className="object-fill"/>
                <img src="/images/fall-path-cropped.jpg" className="object-fill my-auto"/>
                <img src="/images/julia-flower.jpg" className="object-fill my-auto"/>
                <img src="/images/towers-cold.jpg" className="object-fill my-auto"/>
                <img src="/images/whytecliff-girls.jpg" className="object-fill my-auto"/>
               
            </div>
        </main>
    )
}
export default Gallery
