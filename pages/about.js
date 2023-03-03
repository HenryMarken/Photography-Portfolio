import Navigation from '../components/Navigation'
import Image from 'next/image'

function About () {
    return (
        <main className="bg-black">
            <div className="h-fit w-full relative" width={3200} height={1800}>
                <Image src="/images/about-page-cropped.jpg"/>
                <div className="absolute  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <h1 className="md:text-6xl text-4xl md:tracking-widest tracking-wide mt-10 md:m-0 text-white">ABOUT</h1>
                </div>
                <Navigation/>
            </div>
            
            <div className=" flex flex-col gap-10 py-10 text-center md:flex-row md:flex-wrap text-white mx-auto">
                
              <div className="basis-1/2 flex-1 max-w-4xl mx-auto md:w-full w-5/6">         
                <Image src="/images/about-photo.jpg" className="rounded-lg object-cover h-5/6" width={3200} height={1800} layout="responsive" />
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



