import anotherSushi from '@/assets/anotherSushi.jpg';
import sushiImage from '@/assets/sushiImage.jpg';
import sushiPlate from '@/assets/sushiPlate.png';
import Image from 'next/image';

export default function Menu() {

    return (
        <main className="overflow-x-hidden w-full no-scrollbar">
            <div className="h-[190vh] w-full relative flex flex-col">
                <div className="absolute h-[50%] w-[50%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-2/3">
                    <Image
                        src={sushiPlate}
                        alt='sushi on plate'
                        className='size-full object-cover'
                    />
                </div>
                <div className="flex justify-between w-full h-1/2 bg-tertiary p-28">
                    <h1 className='text-8xl font-bold text-primary h-max w-max'>
                        Food Menu
                    </h1>
                    <div className="flex flex-col gap-6 text-secondary h-max">
                        <p className='text-4xl font-bold font-serif hover:text-primary cursor-pointer transition duration-300'>
                            Appetizers
                        </p>
                        <p className='text-4xl font-bold font-serif hover:text-primary cursor-pointer transition duration-300'>
                            Entrees
                        </p>
                        <p className='text-4xl font-bold font-serif hover:text-primary cursor-pointer transition duration-300'>
                            Extras
                        </p>
                        <p className='text-4xl font-bold font-serif hover:text-primary cursor-pointer transition duration-300'>
                            Desserts
                        </p>
                    </div>
                </div>
                <div className="flex justify-center items-center w-full h-1/2">
                    <div className="flex flex-col gap-6 bg-tertiary w-1/2 h-full p-28">
                        <h1 className='text-8xl font-bold text-secondary h-max w-max'>
                            Delivery & <br /> Takeout
                        </h1>
                        <p className='text-primary'>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut ad nihil pariatur neque beatae aspernatur illo amet voluptas id sequi.
                        </p>
                        <button className='border border-secondary px-4 py-6 w-max text-secondary hover:bg-primary hover:border-primary hover:text-tertiary transition duration-300 font-medium'>
                            Full Menu
                        </button>
                    </div>
                    <div className="flex justify-center items-center w-1/2 h-full p-28">
                        <div className="size-full grid grid-cols-2 gap-3">
                            <div className="flex flex-col items-center gap-3 col-span-1">
                                <div className='flex bg-quinary w-[80%] h-[80%]'>

                                </div>
                                <p className='font-bold font-serif text-xl'>
                                    Sashimi
                                </p>
                            </div>
                            <div className="flex flex-col items-center gap-3 col-span-1">
                                <div className='flex bg-quinary w-[80%] h-[80%]'>

                                </div>
                                <p className='font-bold font-serif text-xl'>
                                    Noodles
                                </p>
                            </div>
                            <div className="flex flex-col items-center gap-3 col-span-1">
                                <div className='flex bg-quinary w-[80%] h-[80%]'>

                                </div>
                                <p className='font-bold font-serif text-xl'>
                                    Sushi Rolls
                                </p>
                            </div>
                            <div className="flex flex-col items-center gap-3 col-span-1">
                                <div className='flex bg-quinary w-[80%] h-[80%]'>

                                </div>
                                <p className='font-bold font-serif text-xl'>
                                    Nigiri
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full relative flex justify-center items-center flex-col">
                <div className="flex flex-col items-center px-28 py-16 w-full h-full gap-12">
                    <h1 className='font-semibold text-6xl w-max text-tertiary'>
                        Popular Dishes
                    </h1>
                    <div className="grid grid-cols-3 gap-12 w-full h-full">
                        <div className="flex flex-col gap-3 font-bold text-xl items-center col-span-1">
                            <div className='w-40 h-40 rounded-full overflow-hidden'>
                                <Image
                                    src={sushiImage}
                                    alt='sushi'
                                    className='size-full object-cover'
                                />
                            </div>
                            <p>
                                Temaki
                            </p>
                        </div>
                        <div className="flex flex-col gap-3 font-bold text-xl items-center col-span-1">
                            <div className='w-40 h-40 rounded-full overflow-hidden'>
                                <Image
                                    src={sushiImage}
                                    alt='sushi'
                                    className='size-full object-cover'
                                />
                            </div>
                            <p>
                                Nigiri
                            </p>
                        </div>
                        <div className="flex flex-col gap-3 font-bold text-xl items-center col-span-1">
                            <div className='w-40 h-40 rounded-full overflow-hidden'>
                                <Image
                                    src={sushiImage}
                                    alt='sushi'
                                    className='size-full object-cover'
                                />
                            </div>
                            <p>
                                Sushi Rolls
                            </p>
                        </div>
                        <div className="flex flex-col gap-3 font-bold text-xl items-center col-span-1">
                            <div className='w-40 h-40 rounded-full overflow-hidden'>
                                <Image
                                    src={sushiImage}
                                    alt='sushi'
                                    className='size-full object-cover'
                                />
                            </div>
                            <p>
                                Chef&apos;s Special
                            </p>
                        </div>
                        <div className="flex flex-col gap-3 font-bold text-xl items-center col-span-1">
                            <div className='w-40 h-40 rounded-full overflow-hidden'>
                                <Image
                                    src={sushiImage}
                                    alt='sushi'
                                    className='size-full object-cover'
                                />
                            </div>
                            <p>
                                Speciality Rolls
                            </p>
                        </div>
                        <div className="flex flex-col gap-3 font-bold text-xl items-center col-span-1">
                            <div className='w-40 h-40 rounded-full overflow-hidden'>
                                <Image
                                    src={sushiImage}
                                    alt='sushi'
                                    className='size-full object-cover'
                                />
                            </div>
                            <p>
                                Sashimi
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full relative flex justify-center items-center flex-col bg-gray-100">
                <div className="flex flex-col items-center px-28 py-16 w-full h-full gap-12">
                    <h1 className='font-semibold text-6xl w-max text-tertiary'>
                        Full Menu
                    </h1>
                    <div className="grid grid-cols-4 gap-12 w-full h-full">
                        <div className="flex flex-col gap-4 font-bold text-xl items-center col-span-1 p-8 rounded-lg bg-primary pb-3">
                            <div className="flex h-56 w-56">
                                <Image src={sushiImage} alt='sushi' className='flex size-full object-cover rounded-lg hover:scale-105 transition duration-300' />
                            </div>
                            <p className='text-xl font-bold text-tertiary'>
                                Item Name
                            </p>
                        </div>
                        <div className="flex flex-col gap-4 font-bold text-xl items-center col-span-1 p-8 rounded-lg bg-primary pb-3">
                            <div className="flex h-56 w-56">
                                <Image src={sushiImage} alt='sushi' className='flex size-full object-cover rounded-lg hover:scale-105 transition duration-300' />
                            </div>
                            <p className='text-xl font-bold text-tertiary'>
                                Item Name
                            </p>
                        </div>
                        <div className="flex flex-col gap-4 font-bold text-xl items-center col-span-1 p-8 rounded-lg bg-primary pb-3">
                            <div className="flex h-56 w-56">
                                <Image src={sushiImage} alt='sushi' className='flex size-full object-cover rounded-lg hover:scale-105 transition duration-300' />
                            </div>
                            <p className='text-xl font-bold text-tertiary'>
                                Item Name
                            </p>
                        </div>
                        <div className="flex flex-col gap-4 font-bold text-xl items-center col-span-1 p-8 rounded-lg bg-primary pb-3">
                            <div className="flex h-56 w-56">
                                <Image src={sushiImage} alt='sushi' className='flex size-full object-cover rounded-lg hover:scale-105 transition duration-300' />
                            </div>
                            <p className='text-xl font-bold text-tertiary'>
                                Item Name
                            </p>
                        </div>
                        <div className="flex flex-col gap-4 font-bold text-xl items-center col-span-1 p-8 rounded-lg bg-primary pb-3">
                            <div className="flex h-56 w-56">
                                <Image src={sushiImage} alt='sushi' className='flex size-full object-cover rounded-lg hover:scale-105 transition duration-300' />
                            </div>
                            <p className='text-xl font-bold text-tertiary'>
                                Item Name
                            </p>
                        </div>
                        <div className="flex flex-col gap-4 font-bold text-xl items-center col-span-1 p-8 rounded-lg bg-primary pb-3">
                            <div className="flex h-56 w-56">
                                <Image src={sushiImage} alt='sushi' className='flex size-full object-cover rounded-lg hover:scale-105 transition duration-300' />
                            </div>
                            <p className='text-xl font-bold text-tertiary'>
                                Item Name
                            </p>
                        </div>
                        <div className="flex flex-col gap-4 font-bold text-xl items-center col-span-1 p-8 rounded-lg bg-primary pb-3">
                            <div className="flex h-56 w-56">
                                <Image src={sushiImage} alt='sushi' className='flex size-full object-cover rounded-lg hover:scale-105 transition duration-300' />
                            </div>
                            <p className='text-xl font-bold text-tertiary'>
                                Item Name
                            </p>
                        </div>
                        <div className="flex flex-col gap-4 font-bold text-xl items-center col-span-1 p-8 rounded-lg bg-primary pb-3">
                            <div className="flex h-56 w-56">
                                <Image src={sushiImage} alt='sushi' className='flex size-full object-cover rounded-lg hover:scale-105 transition duration-300' />
                            </div>
                            <p className='text-xl font-bold text-tertiary'>
                                Item Name
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="h-[95vh] w-full relative flex bg-gray-100">
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
