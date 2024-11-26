import anotherSushi from '@/assets/anotherSushi.jpg';
import Image from 'next/image';

export default function Home() {

    return (
        <main className="overflow-x-hidden w-full no-scrollbar">
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
