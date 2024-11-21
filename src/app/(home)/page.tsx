import bgImage from '@/assets/bgImage.jpg';
import secondBgImg from '@/assets/secondBgImg.jpg';
import sushiImage from '@/assets/sushiImage.jpg';
import anotherSushi from '@/assets/anotherSushi.jpg';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {

  return (
    <main className="overflow-x-hidden h-[95vh] w-full no-scrollbar">
      <div className="h-[95vh] w-full relative">
        <Image
          src={bgImage}
          alt='background image'
          className='w-full h-full object-cover'
        />
        <div className="absolute border-[20px] border-primary top-20 left-32 flex flex-col py-14 px-8 text-primary font-extrabold text-9xl gap-6">
          <p>
            寿
          </p>
          <p>
            司
          </p>
        </div>
        <div className="absolute top-28 left-1/2 -translate-x-1/2 flex flex-col py-14 px-8 gap-6">
          <p className='uppercase font-serif font-extrabold text-2xl text-primary bg-secondary w-max p-2'>
            Welcome To
          </p>
          <p className='font-serif font-extrabold text-8xl text-primary'>
            Bukta Sushi
          </p>
          <Link
            href={'/menu'}
            className='px-4 py-3 bg-tertiary w-max text-primary font-semibold hover:bg-secondary transition duration-300'
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
      <div className="w-full flex justify-center items-center py-12 px-32 gap-32 bg-gray-100">
        <div className="flex justify-center items-center w-96">
          <Image
            src={sushiImage}
            alt='sushi image'
            className='size-full object-cover'
          />
        </div>
        <div className="flex flex-col gap-4 w-[60%]">
          <h1 className='text-5xl font-semibold font-serif text-tertiary'>
            Traditional <br /> Taste
          </h1>
          <p className='text-base font-normal text-text w-3/4'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis dicta ratione unde est, natus commodi possimus enim ipsum quisquam totam.
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
        <div className="absolute border-8 border-primary top-52 left-10 flex flex-col py-14 px-8 text-primary backdrop-blur gap-4">
          <div className='flex gap-6 font-bold text-9xl'>
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
          <div className="text-primary text-base font-semibold">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda.
          </div>
        </div>

        <div className="absolute border-2 border-primary top-40 right-32 flex flex-col py-14 px-8 text-primary  gap-4">
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

      <div className="h-[95vh] w-full relative flex">
        <div className="image flex justify-center items-center w-[40%] h-full relative">
          <Image
            src={anotherSushi}
            alt='contact image'
            className='w-full h-full object-cover'
          />
          <div className="absolute uppercase flex flex-col gap-6 p-4 backdrop-blur rounded-xl">
            <p className='font-semibold font-serif text-2xl text-primary'>
              Dine In
            </p>
            <h1 className='text-6xl font-bold text-primary'>
              Call To <br /> Reserve
            </h1>
            <button className='py-3 px-6 border-2 border-primary text-xl font-medium text-primary w-max hover:bg-primary hover:text-secondary transition duration-300'>
              Book Now
            </button>
          </div>
        </div>
        <div className='w-[60%] h-full flex flex-col justify-center items-center p-6 gap-14'>
          <h1 className='text-6xl font-extrabold text-secondary'>
            Bukta Sushi
          </h1>
          <div className="flex flex-col gap-3 justify-center items-center">
            <p className='text-base font-medium text-tertiary'>
              Open Hours
            </p>
            <p className='text-xl font-semibold text-secondary'>
              Monday - Friday : 11am - 11pm
            </p>
            <p className='text-xl font-semibold text-secondary'>
              Saturday - Sunday : 11am - 9pm
            </p>
          </div>
          <div className="flex flex-col gap-3 justify-center items-center">
            <p className='text-base font-medium text-tertiary'>
              Call
            </p>
            <p className='text-xl font-semibold text-secondary'>
              (+47) 46744000
            </p>
          </div>
          <div className="flex flex-col gap-3 justify-center items-center">
            <p className='text-base font-medium text-tertiary'>
              Address
            </p>
            <p className='text-xl font-semibold text-secondary'>
              Strandvegen 134, 9006 Tromsø
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
