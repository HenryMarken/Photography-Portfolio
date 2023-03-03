import Navigation from '../components/Navigation'

function Gallery () {
    return (
        <main className="bg-black">
            <div className="h-1/2 w-full relative">
                <img src="/images/water-reflection-cropped.jpg" className="object-fill h-full w-full"/>
                <div className="absolute  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <h1 className="md:text-6xl text-4xl md:tracking-widest tracking-wide mt-10 text-white">GALLERY</h1>
                </div>
                <Navigation/>
            </div>

            <div className="md:grid grid-flow-row auto-rows-max grid-cols-3 gap-6 my-10 mx-10">
                <img src="/images/walterdale-night.jpg" className="object-fill my-10 md:my-auto"/>
                <img src="/images/stadium-night.jpg" className="object-fill my-10 md:my-auto"/>
                <img src="/images/walterdale-side.jpg" className="object-fill my-10 md:my-auto"/>
                <img src="/images/highlevel-bike.jpg" className="object-fill my-10 md:my-auto"/>
                <img src="/images/university-fall.jpg" className="object-fill my-10 md:my-auto"/>
                <img src="/images/vancouver-ariel.jpg" className="object-fill my-10 md:my-auto"/>
                <img src="/images/sydney-book.png" className="object-fill my-10 md:my-auto"/>
                <img src="/images/brett-mountain.jpg" className="object-fill my-10 md:my-auto"/>
                <img src="/images/jaret-mountain.jpg" className="object-fill my-10 md:my-auto"/>
                <img src="/images/edmonton-color.jpg" className="object-fill my-10 md:my-auto"/>
                <img src="/images/vancouver-bridge.jpg" className="object-fill my-10 md:my-auto"/>
                <img src="/images/fall-path-cropped.jpg" className="object-fill my-10 md:my-auto"/>
                <img src="/images/julia-flower.jpg" className="object-fill my-10 md:my-auto"/>
                <img src="/images/towers-cold.jpg" className="object-fill my-10 md:my-auto"/>
                <img src="/images/whytecliff-girls.jpg" className="object-fil my-10l md:my-auto"/>
            </div>
        </main>
    )
}
export default Gallery
