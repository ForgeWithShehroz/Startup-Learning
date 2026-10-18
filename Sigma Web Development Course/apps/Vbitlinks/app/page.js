import Image from "next/image";
import localFont from "next/font/local"
import Link from "next/link";

const poppins = localFont({
  src: "./fonts/Poppins-ExtraBold.ttf",
  variable: "--font-poppins",
  weight: "100 900",
});

export default function Home() {
  return (
    <main className="bg-purple-100">
      <section className="grid grid-cols-2 h-[50vh]">
        <div className=" flex flex-col gap-4 items-center justify-center">
          <p className={`font-bold text-2xl ${poppins.className} `}>The best URL shortener in the Market.</p>
          <p className="px-32 text-center">We are the most straightforward URL shortener in the world. We understand your needs and don't ask you to give your details to login or track you. Hence we made this URL shortener.</p>
          <div className='flex gap-3 text-white'>
            <Link href={"/shorten"}><button className='bg-purple-500 shadow-lg p-3 py-1 rounded-lg font-bold cursor-pointer'>Try Now</button></Link>
            <Link href={"/github"}><button className='bg-purple-500 shadow-lg p-3 py-1 rounded-lg font-bold cursor-pointer'>GitHub</button></Link>
          </div>
        </div>
        <div className=" relative">
          <Image alt="Vector Image" fill={true} src={"/vector.jpg"} className="mix-blend-darken" />
        </div>
      </section>
    </main>
  );
}
