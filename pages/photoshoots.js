import {Carousel} from 'flowbite-react'


import Navigation from '../components/Navigation'

function Photoshoots () {
    return (
        <main className='bg-black h-full'>
            <div className="h-1/2 w-full relative">
                <img src="/images/photoshoots-page-cropped.jpg" className="object-fill h-full w-full"/>
                <div className="absolute  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <h1 className="md:text-6xl text-4xl md:tracking-widest tracking-wide mt-10 md:m-0 text-white">PHOTOSHOOTS</h1>
                </div>
                <Navigation/>
            </div>


            <div className="h-96 md:w-1/2 w-5/6 mx-auto mt-10 text-white">
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

            <div className="h-96 md:w-1/2 w-5/6 mx-auto mt-10 mb-20 text-white">
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