import Image from "next/image";

export default function Hero() {
  return (
    <section className=" bg-transparent flex items-center justify-center py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8 justify-center">
          <div className="relative w-full lg:w-3/5 h-[500px] bg-white rounded-lg shadow-xl overflow-hidden group">
            <div className="absolute inset-0 flex">
              <div className="w-1/3 h-full relative overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Close-up of a person's face"
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute top-4 left-4 text-white text-xs font-semibold bg-transparent bg-opacity-50 px-2 py-1 rounded">
                  NEW IMAGE MODEL
                </span>
              </div>

              <div className="w-1/3 h-full relative overflow-hidden">
                <Image
                  src="assets/city.jpg"
                  alt="Scenic landscape with windmills"
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="w-1/3 h-full relative overflow-hidden">
                <Image
                  src="assets/ankit-pareek-s84j6wIY6fM-unsplash.jpg"
                  alt="Person with distinct style"
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent p-8 flex flex-col justify-end text-white">
              <h2 className="text-8xl font-bold text-center mb-10">WAN 2.2</h2>
              <p className="text-3xl font-semibold mb-4">
                WAN 2.2 Image generation
              </p>
              <div className="flex flex-col md:flex-row justify-center md:justify-between items-center ">
                <p className="text-lg mb-6 max-w-lg">
                  Generate complex images with the brand new and powerful WAN
                  2.2 model. Exceptional prompt adherence and ultra-realistic
                  textures.
                </p>
                <button className="self-start px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-colors duration-300">
                  Try WAN 2.2
                </button>
              </div>
            </div>
          </div>

          {/* FLUX.1 Krea Section */}
          <div className="relative w-full lg:w-2/5 h-[500px] bg-transparent  rounded-lg shadow-xl overflow-hidden group">
            <div className="absolute inset-0">
              <Image
                src="assets/jose-dominguez-g3V5kdcyL9o-unsplash.jpg"
                alt="Bottle of liquor"
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-500 group-hover:scale-105"
              />

              <span className="absolute top-4 left-4 text-white text-xs font-semibold bg-transparent bg-opacity-50 px-2 py-1 rounded">
                OPEN SOURCE MODEL
              </span>
              <p className="text-center text-5xl absolute inset-0 text-white top-40 left-2">
                OPEN SOURCE
              </p>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent p-8 flex flex-col justify-end text-white">
              <h2 className="text-5xl font-bold mb-2">FLUX.1 Krea</h2>
              <p className="text-sm mb-6 max-w-md">
                We&apos;re making the weights to our FLUX.1 Krea model
                open-source. Download and run our model weights, read the
                technical report, or generate with it in Krea Image.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
