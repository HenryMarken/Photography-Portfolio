import {Carousel, Navbar} from 'flowbite-react'
import Link from 'next/link'

function About () {
    return (
        <main>
            <div className="h-fit w-full relative">
                <img src="/images/about-page-cropped.jpg"/>
                <div className="absolute  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <h1 className="md:text-6xl text-4xl md:tracking-widest tracking-wide mt-10 md:m-0">ABOUT</h1>
                </div>
                <Navbar fluid={true} className="w-full rounded-none absolute bg-opacity-0 top-0 mt-5">
                <Navbar.Brand >
                    <img  src="logo.png" className="mr-3 h-6 sm:h-9" alt="HM Logo"/>
                    <span className="self-center whitespace-nowrap text-xl text-white"> Henry Marken </span>
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse>
                    <Link href="/" className="md:text-2xl text-white font-extralight font-roboto transition ease-in-out delay-150  hover:-translate-y-1 md:hover:scale-110 duration-150"> Home </Link>
                    <Link href="/gallery" className="md:text-2xl text-white font-extralight font-roboto transition ease-in-out delay-150  hover:-translate-y-1 md:hover:scale-110 duration-150"> Gallery </Link>
                    <Link href="/photoshoots" className="md:text-2xl text-white font-extralight font-roboto transition ease-in-out delay-150  hover:-translate-y-1 md:hover:scale-110 duration-150"> Photoshoots </Link>
                    <Link href="/about" className="md:text-2xl text-white underline font-extralight font-roboto"> About </Link>
                    <Link href="/contact" className="md:text-2xl text-white font-extralight font-roboto transition ease-in-out delay-150  hover:-translate-y-1 md:hover:scale-110 duration-150"> Contact </Link>
                </Navbar.Collapse>
                </Navbar>
            </div>
            
            <div className=" flex flex-col gap-10 py-10 text-center md:flex-row md:flex-wrap dark:text-white mx-auto">
                
              <div className="basis-1/2 flex-1 max-w-4xl mx-auto md:w-full w-5/6">         
                <img src="/images/about-photo.jpg" className="rounded-lg object-cover h-5/6 " layout="responsive" />
              </div>
              
              <div className="basis-1/2 flex-1 lg:mt-32 mt-10  text-md py-2 md:px-0 leading-8 text-center max-w-lg mx-auto px-10">
                <h1 className="md:text-4xl text-2xl font-bold mb-10">Hey, I&apos;m Henry</h1>
                <p className="md:text-2xl text-xl my-10">I&apos;m a recent electrical engineering graduate that does photography as a side hobby. I started with photography as it helped me to see the world in a different view. For me it was a way to live in the moment. I find myself always stressing and trying to rush my life into what I think is the best life for me not realizing to find happiness in the process and not the goal. With photograhy it allows me to take a step back and do just so.</p>
                <p className="md:text-2xl text-xl my-10">Whenever the opportunity is presented to improve my skills in photography I don&apos;t shy away. I hope to do as many photoshoots as I can while meeting wonderful people along the way. One day I want to start my own photography business and hopefully strive as a travelling photographer.</p>   
              </div>

            </div>

        </main>
    )
}
export default About



