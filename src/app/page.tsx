import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="bg-pink-200 absolute  h-screen flex">
        {/* left section */}
        <div className="py-20 w-2/5 ">
          <h1 className="text-yellow-600 font-extrabold text-6xl tracking-tighter px-20">
            FURNITURE
          </h1>
          <h2 className="text-yellow-600 font-semibold text-3xl tracking-widest px-20 py-3">
            Landing Page
          </h2>
          <p className="text-gray-800 px-20 text-left  ">
            furniture are all the things that are in the house and that people
            can use to sit, to lie on or that are supposed to contain smaller
            things like cloths or cups. Furniture is made of wood, particle
            boards, leather, screws etc.
          </p>
          <div className="py-12">
          <div className="ml-24 flex gap-2 ">
          <Image width="20" height="20" src="/weblogo.png" alt="products " />
          <a className="text-slate-800 text-xs underline" href="https://github.com/MinhalAmin/template">
          https://github.com
          </a>
          </div >
          <div className="ml-24 flex gap-2 py-3 ">
          <Image width="20" height="20" src="/instagram.png" alt="products " />
          <a className="text-slate-800 text-xs underline" href="https://www.instagram.com/minhal.zariwala_?igsh=c252aGR0Y3VwNjkx">
          www.instagram.com
          </a>
          </div>
          <div className="ml-24 flex gap-2">
          <Image width="19" height="20" src="/twitter.png" alt="products " />
          <a className="text-slate-800 text-xs underline" href="https://x.com/">
          https://x.com/
          </a>
          </div>
          </div>
        </div>
        {/* right section */}
        <div className="w-3/5 mr-2 ">
          <div className="bg-white absolute top-0 right-0 h-full w-50 mr-20 shadow-2xl  shadow-slate-400">
            <h1 className="text-gray-800 px-40 py-2 font-serif ">
              Benifits & Comfort
            </h1>
            <div className="px-3 py-1 flex gap-3 items-centre place-content-center ">
              <div className="shadow-xl  shadow-slate-400">
                <Image width="135" height="50" src="/f5.jpg" alt="products " />
                <h1 className="text-gray-800 text-xs px-2 py-2 font-thin  ">
                  Low cost, high quality
                </h1>
              </div>
              <div className="shadow-2xl  shadow-slate-400">
                <Image width="135" height="50" src="/f3.jpg" alt="products " />
                <h1 className="text-gray-800 text-xs px-2 py-2 font-thin ">
                  Decor of your dreams
                </h1>
              </div>
              <div className="shadow-xl  shadow-slate-400">
                <div className=" flex  ">
                <div className="flex ">
                  <Image
                    width="135"
                    height="50"
                    src="/f1.jpg"
                    alt="products "
                  />
                  </div>
                  <div className="rounded-full absolute right-1 pt-10 shadow-2xl shadow-slate-400">
                  <Image
                    width="20"
                    height="20"
                    src="/rightarrow.png"
                    alt="products "
                  />
                  </div>
                  </div>
                <h1 className="text-gray-800 text-xs px-0 py-2 font-thin content-center ">
                  Crafted with exellence
                </h1>
              </div>
            </div>
            <div className="flex justify-center py-2 gap-3 content-center">
            <p className="bg-slate-300 shadow-2xl w-2 h-2 rounded-full "></p>
            <p className="bg-slate-400 shadow-2xl w-2 h-2 rounded-full "></p>
            <p className="bg-slate-300 shadow-2xl w-2 h-2 rounded-full "></p>
            </div>
            <div className="">
              <h1 className="text-gray-800 text-xs px-2 py-1 font-serif font-thin flex justify-center">
                Setup your luxorious life with
              </h1>
              <h2 className="text-gray-800 text-2xl px-2 py-1 font-serif font-extrabold flex justify-center">
              Skyrise Decor
              </h2>
            </div>
            <div className="px-2 gap-2 columns-3 space-y-2 ">
            <Image width="135" height="100" src="/f4.jpg" alt="products " />
            <Image width="135" height="50" src="/f10.jpg" alt="products " />
            <Image width="135" height="100" src="/f7.jpg" alt="products " />
            <div className="grid grid-cols-subgrid gap-2  ">
            <Image width="135" height="100" src="/f2.jpg" alt="products " />
            <Image width="135" height="100" src="/f6.jpg" alt="products " />
            <Image width="135" height="100" src="/f11.jpg" alt="products " />
            </div>
            </div>
          </div>
        </div>
        {/* mid section */}
        <div className="bg-white absolute left-40 h-[35.5rem] ml-80 px-40 pr-5 self-end shadow-2xl ">
        <div className="flex gap-1 px-4 absolute left-0  ">
          <div className="pt-3 ">
        <Image width="15" height="15" src="/sofa.png" alt="products " />
        </div>
        <h1 className="text-xs text-slate-900  font-extrabold font-serif pt-3 tracking-tighter">
        Skyrise Decor
        </h1>
        </div>
        <div className="flex gap-12">
        <div className="flex pt-3 gap-3">
          <h1 className="text-[0.50rem] text-slate-800 text">Home</h1>
          <h1 className="text-[0.50rem] text-slate-800 text">Shop</h1>
          <h1 className="text-[0.50rem] text-slate-800 text">About</h1>
          <h1 className="text-[0.50rem] text-slate-800 text">Contact</h1>
        </div>
        <div className="flex gap-3 pt-3">
        <Image width="10" height="10" src="/user.png" alt="products " />
        <Image width="10" height="10" src="/search.png" alt="products " />
        <Image width="10" height="10" src="/heart.png" alt="products " />
        <Image width="10" height="10" src="/cart.png" alt="products " />
        </div>
        </div>
        <div className="pt-2 absolute left-0 ">
        <Image width="600" height="300" src="/liv1.jpg" alt="products " />
         <div className="absolute inset-16 flex justify-self-end bg-orange-100 h-[7.5rem] w-52  "></div>
        <div className=" absolute inset-16 items-start justify-self-start pl-[6.5rem] ">
        <h2 className="text-slate-900 text-[0.45rem] font-semibold tracking-widest pt-3">
          New Arrival</h2>
        <h2 className="text-yellow-600 text-sm font-extrabold tracking-tighter pt-1 ">
          Discover Our New
        </h2>
        <h3 className="text-yellow-600 text-sm font-extrabold tracking-tighter ">
          Collection
        </h3>
        <div className=" pt-1 ">
        <div className=" inset-20 pl-[7.5rem] bg-yellow-700 h-[2.3rem] w-[6rem]  "></div>
        <div className="absolute flex inset-16 items-start pl-[4.2rem] gap-1">
        <h2 className="text-white text-[0.75rem] font-extrabold tracking-tighter pt-4">
          BUY
          </h2>
          <h2 className="text-white text-[0.75rem] font-extrabold tracking-tighter pt-4">
           NOW
          </h2>
        </div>
        </div>
        </div>
        </div>
        <div className="py-[13.5rem] absolute">
        <h1 className="text-slate-900 text-[0.85rem] font-extrabold tracking-tighter font-sans">
          Browse The Range</h1>
          <p className="text-slate-900 text-[0.40rem] font-semibold tracking-widest">
          Where Luxury Meets Comfort</p>
          <div className="flex justify-end gap-3 pt-3 pr-10">
          <Image width="110" height="75" src="/f9.jpg" alt="products " />
          <Image width="110" height="75" src="/f8.jpg" alt="products " />
          <Image width="110" height="75" src="/f12.jpg" alt="products " />
          </div>
          <h1 className="text-slate-900 text-[0.85rem] font-extrabold tracking-tighter font-sans py-1">
          Our Products</h1>
          <div className="flex justify-end gap-1 py-2 pr-8">
          <Image width="50" height="50" src="/f13.jpg" alt="products " />
          <Image width="45" height="35" src="/f14.jpg" alt="products " />
          <Image width="50" height="35" src="/f15.jpg" alt="products " />
          <Image width="50" height="35" src="/f16.jpg" alt="products " />
          <Image width="50" height="35" src="/f17.jpg" alt="products " />
          <Image width="50" height="35" src="/f18.jpg" alt="products " />
          <Image width="50" height="35" src="/f19.jpg" alt="products " />
          </div>
          </div>
          </div>
      </section>
      </main>
  );
}
