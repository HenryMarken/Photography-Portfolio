import {Carousel, Navbar} from 'flowbite-react'
import Link from 'next/link'

function Photoshoots () {
    return (
        <main>
            <div className="h-1/2 w-full relative">
                <img src="/images/photoshoots-page.jpg" className="object-fill h-full w-full"/>
                <div className="absolute  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <h1 className="text-6xl tracking-widest font-medium">PHOTOSHOOTS</h1>
                </div>
                <Navbar fluid={true} className="w-full rounded-none absolute bg-opacity-0 top-0 mt-5">
                <Navbar.Brand >
                    <img  src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite Logo"/>
                    <span className="self-center whitespace-nowrap text-xl text-white"> Henry Marken </span>
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse>
                    <Link href="/" className="md:text-2xl text-white hover:text- font-extralight font-roboto transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-150"> Home </Link>
                    <Link href="/gallery" className="md:text-2xl text-white hover:text- font-extralight font-roboto transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-150"> Gallery </Link>
                    <Link href="/photoshoots" className="md:text-2xl text-white underline font-extralight font-roboto"> Photoshoots </Link>
                    <Link href="/about" className="md:text-2xl text-white font-extralight font-roboto transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-150"> About </Link>
                    <Link href="/contact" className="md:text-2xl text-white font-extralight font-roboto transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-150"> Contact </Link>
                </Navbar.Collapse>
                </Navbar>
            </div>


            <div className="h-96 w-1/2 mx-auto mt-10">
                <h1 className="text-center">Wedding</h1>
                <Carousel slide={false}>
                    <img src="/images/wedding/kissing-wedding.jpg" />
                    <img src="/images/wedding/fall-wedding.jpg" />
                    <img src="/images/wedding/dsc09291.jpg" />
                    <img src="/images/wedding/portrait.jpg" />
                    <img src="/images/wedding/dsc09336.jpg" />
                    <img src="/images/wedding/dsc09230-2.jpg" className="scale-95" />
                    
                    
                    
                </Carousel>
            </div>

            <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 w-1/2 mx-auto my-10">
                <h1 className="text-center">Maternity</h1>
                <Carousel slide={false} className=" ">
                <img src="/images/maternity/maternity-ring.jpg"  className="object-scale-down"/>
                    <img src="/images/maternity/maternity-landscape-cropped.jpg" className="scale-75 rounded-sm"/>
                    <img src="/images/maternity/portrait-cropped.jpg"  />
                    <img src="/images/maternity/prince-cropped.jpg" className="object-scale-down scale-75" />
                </Carousel>
            </div>
        </main>
    )
}
export default Photoshoots