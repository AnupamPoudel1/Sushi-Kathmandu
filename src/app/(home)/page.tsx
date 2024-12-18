import bgImage from '@/assets/bgImage.jpg';
import secondBgImg from '@/assets/secondBgImg.jpg';
import sushiImage from '@/assets/sushiImage.jpg';
import Image from 'next/image';
import Link from 'next/link';
import Contact from '@/sections/Contact';

export default function Home() {

  return (
    <main className="overflow-x-hidden w-full no-scrollbar">
      <div className="h-[95vh] w-full relative">
        <Image
          src={bgImage}
          alt='background image'
          className='w-full h-full object-cover'
        />
        {/* <div className="absolute border-[10px] md:border-[15px] lg:border-[20px] border-primary top-12 left-5 lg:top-20 lg:left-32 flex md:flex-col px-10 py-6 md:py-14 md:px-8 text-primary font-extrabold text-5xl md:text-8xl lg:text-9xl gap-6">
          <p>
            寿
          </p>
          <p>
            司
          </p>
        </div> */}
        <div className="absolute top-32 left-0 md:top-52 md:left-[60%] lg:top-28 lg:left-1/2 md:-translate-x-1/2 flex flex-col py-14 px-8 gap-6">
          <p className='uppercase font-serif font-extrabold text-lg md:text-2xl text-primary bg-secondary w-max p-2'>
            Welcome To
          </p>
          <p className='font-serif font-extrabold text-6xl md:text-8xl text-primary'>
            Bukta Sushi
          </p>
          <Link
            href={'/menu'}
            className='px-4 py-3 bg-tertiary w-max text-primary text-sm md:text-base font-semibold hover:bg-secondary transition duration-300'
          >
            View Menu
          </Link>
          <div className='font-normal text-xs text-tertiary bg-primary w-max p-2 flex flex-col gap-2'>
            <p>
              Monday - Friday : 11am - 11pm
            </p>
            <p>
              Saturday - Sunday : 11am - 9pm
            </p>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col lg:flex-row justify-center items-center py-6 px-4 lg:py-12 md:px-20 lg:px-32 gap-10 lg:gap-32 bg-gray-100">
        <div className="flex justify-center items-center w-96">
          <Image
            src={sushiImage}
            alt='sushi image'
            className='size-full object-cover'
          />
        </div>
        <div className="flex flex-col gap-4 w-full">
          <h1 className='text-5xl font-semibold font-serif text-tertiary'>
            Traditional <br /> Taste
          </h1>
          <p className='text-base font-normal text-text w-3/4'>
            Experience the artistry of authentic sushi crafted with the finest ingredients. From the delicate balance of flavors to the perfect texture, our menu celebrates the heritage of Japanese cuisine.
          </p>
          <Link
            href={'/menu'}
            className='px-6 py-3 border-2 border-tertiary w-max font-medium text-lg hover:bg-tertiary hover:text-primary transition duration-300'
          >
            View Menu
          </Link>
        </div>
      </div>
      <div className="h-[95vh] w-full relative">
        <Image
          src={secondBgImg}
          alt='background image'
          className='w-full h-full object-cover'
        />
        <div className="absolute border-8 border-primary top-10 left-5 lg:top-52 lg:left-10 flex flex-row px-12 py-8  lg:py-14 lg:px-8 text-primary backdrop-blur gap-4">
          <div className='flex lg:flex-row justify-center items-center gap-4 lg:gap-6 font-bold text-5xl md:text-9xl w-max'>
            <p>
              F
            </p>
            <p>
              R
            </p>
            <p>
              E
            </p>
            <p>
              S
            </p>
            <p>
              H
            </p>
          </div>
        </div>

        <div className="absolute border-2 border-primary top-1/2 right-10 md:top-[65%] backdrop-blur lg:top-40 lg:right-32 flex flex-col py-14 px-8 text-primary  gap-4">
          <Link href={'/menu'}>
            M
          </Link>
          <Link href={'/menu'}>
            E
          </Link>
          <Link href={'/menu'}>
            N
          </Link>
          <Link href={'/menu'}>
            U
          </Link>
        </div>
      </div>
      <Contact />
    </main>
  );
}
