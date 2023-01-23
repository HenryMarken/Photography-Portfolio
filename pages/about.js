import {Carousel, Navbar} from 'flowbite-react'
import Link from 'next/link'

function About () {
    return (
        <main>
            <div className="h-fit w-full relative">
                <img src="/images/about-page-cropped.jpg"/>
                <div className="absolute  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <h1 className="text-6xl tracking-widest font-medium">ABOUT</h1>
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
                    <Link href="/photoshoots" className="md:text-2xl text-white font-extralight font-roboto transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-150"> Photoshoots </Link>
                    <Link href="/about" className="md:text-2xl text-white underline font-extralight font-roboto"> About </Link>
                    <Link href="/contact" className="md:text-2xl text-white font-extralight font-roboto transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-150"> Contact </Link>
                </Navbar.Collapse>
                </Navbar>
            </div>
            
            <div className=" flex flex-col gap-10 py-10 text-center md:flex-row md:flex-wrap dark:text-white">
                
              <div className="basis-1/2 flex-1 max-w-4xl mx-auto w-full">
                <a href="https://photofinder.onrender.com/" target="_blank" rel="noreferrer">           
                    <img src="/images/about-photo.jpg" className="rounded-lg object-cover h-5/6" layout="responsive" />
                </a>
              </div>
              
              <div className="basis-1/2 flex-1 mt-52 md:text-2xl text-md py-2 px-10 md:px-0 leading-8 md:leading-10 text-center md:text-xl max-w-xl mx-auto">
                <h1 className="text-4xl font-bold mb-10">Hey, I'm Henry</h1>
                <p className="text-2xl leading-8  my-10">I started with photography as it helped me to explore the outside world. For me it was a way to live in the moment. I find myself always stressing and trying to rush my life into what I think is the best life for me not realizing to find happiness in the process and not the goal. With photograhy it allows me to take a step back and do just so.</p>
                <p className="text-2xl leading-8 my-10">Whenever the opportunity is presented to me to improve my skills in photography I don't shy away. I hope to do as many photoshoots as I can while meeting wonderful people along the way. One day I want to start my own photography business and hopefully teach others that are in the same position as me right now to break through that barrier of thinking and just doing.</p>   
              </div>

            </div>

        </main>
    )
}
export default About



