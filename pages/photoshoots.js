import {Carousel, Navbar} from 'flowbite-react'
import Link from 'next/link'

function Photoshoots () {
    return (
        <main>
            <div className="h-1/2 w-full relative">
                <img src="/images/photoshoots-page-cropped.jpg" className="object-fill h-full w-full"/>
                <div className="absolute  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <h1 className="md:text-6xl text-4xl md:tracking-widest tracking-wide mt-10 md:m-0">PHOTOSHOOTS</h1>
                </div>
                <Navbar fluid={true} className="w-full rounded-none absolute bg-opacity-0 top-0 mt-5">
                <Navbar.Brand >
                    <img  src="logo.png" className="mr-3 h-6 sm:h-9" alt="HM Logo"/>
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


            <div className="h-96 md:w-1/2 w-5/6 mx-auto mt-10">
                <h1 className="text-center text-2xl mb-5">Wedding</h1>
                <Carousel slide={false}>
                    <img src="/images/wedding/kissing-wedding.jpg" className="h-full md:h-screen object-cover md:object-contain" />
                    <img src="/images/wedding/fall-wedding.jpg" className="h-full md:h-screen object-cover md:object-contain" />
                    <img src="/images/wedding/dsc09291.jpg" className="h-full md:h-screen object-cover md:object-contain" />
                    <img src="/images/wedding/portrait.jpg" className="h-full md:h-screen object-cover md:object-contain " />
                    <img src="/images/wedding/dsc09336.jpg" className="h-full md:h-screen object-cover md:object-contain" />
                    <img src="/images/wedding/dsc09230-2.jpg" className="h-full md:h-screen object-cover md:object-contain " />
                    
                    
                    
                </Carousel>
            </div>

            <div className="h-96 md:w-1/2 w-5/6 mx-auto mt-10 mb-20">
                <h1 className="text-center text-2xl mt-40 mb-5">Maternity</h1>
                <Carousel slide={false}>
                <img src="/images/maternity/maternity-ring.jpg"  className="h-full md:h-fit object-cover md:object-contain"/>
                    <img src="/images/maternity/maternity-landscape-cropped.jpg" className="h-full md:h-fit object-cover md:object-contain"/>
                    <img src="/images/maternity/portrait-cropped.jpg" className="h-full md:h-fit object-cover "  />
                    <img src="/images/maternity/prince-cropped.jpg" className=" h-full md:h-fit object-cover " />
                </Carousel>
            </div>
        </main>
    )
}
export default Photoshoots