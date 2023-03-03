import Navigation from '../components/Navigation'
import Image from 'next/image'

function Gallery () {
    return (
        <main className="bg-black">
            <div className="h-1/2 w-full relative">
                <Image src="/images/water-reflection-cropped.jpg" width={3200} height={1800} className="object-fill h-full w-full"/>
                <div className="absolute  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <h1 className="md:text-6xl text-4xl md:tracking-widest tracking-wide mt-10 text-white">GALLERY</h1>
                </div>
                <Navigation/>
            </div>

            <div className="md:grid grid-flow-row auto-rows-max grid-cols-3 gap-6 my-10 mx-10">
                <Image src="/images/walterdale-night.jpg" width={3200} height={1800} className="object-fill my-10 md:my-auto"/>
                <Image src="/images/stadium-night.jpg" width={3200} height={1800} className="object-fill my-10 md:my-auto"/>
                <Image src="/images/walterdale-side.jpg" width={3200} height={1800} className="object-fill my-10 md:my-auto"/>
                <Image src="/images/highlevel-bike.jpg" width={3200} height={1800} className="object-fill my-10 md:my-auto"/>
                <Image src="/images/university-fall.jpg" width={3200} height={1800} className="object-fill my-10 md:my-auto"/>
                <Image src="/images/vancouver-ariel.jpg" width={3200} height={1800} className="object-fill my-10 md:my-auto"/>
                <Image src="/images/sydney-book.png" width={3200} height={1800} className="object-fill my-10 md:my-auto"/>
                <Image src="/images/brett-mountain.jpg" width={3200} height={1800} className="object-fill my-10 md:my-auto"/>
                <Image src="/images/jaret-mountain.jpg" width={3200} height={1800} className="object-fill my-10 md:my-auto"/>
                <Image src="/images/edmonton-color.jpg" width={3200} height={1800} className="object-fill my-10 md:my-auto"/>
                <Image src="/images/vancouver-bridge.jpg" width={3200} height={1800} className="object-fill my-10 md:my-auto"/>
                <Image src="/images/fall-path-cropped.jpg" width={3200} height={1800} className="object-fill my-10 md:my-auto"/>
                <Image src="/images/julia-flower.jpg" width={3200} height={1800} className="object-fill my-10 md:my-auto"/>
                <Image src="/images/towers-cold.jpg" width={3200} height={1800} className="object-fill my-10 md:my-auto"/>
                <Image src="/images/whytecliff-girls.jpg" width={3200} height={1800} className="object-fil my-10l md:my-auto"/>
            </div>
        </main>
    )
}
export default Gallery
