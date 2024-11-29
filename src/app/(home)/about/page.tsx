import aboutImage from '@/assets/aboutImage.jpg';
import anotherSushi from '@/assets/anotherSushi.jpg';
import Contact from '@/sections/Contact';
import Image from 'next/image';

export default function About() {

    return (
        <main className="overflow-x-hidden w-full no-scrollbar">
            <div className="h-max lg:h-[95vh] w-full relative bg-gray-100 flex flex-col-reverse lg:flex-row px-2 lg:px-28">
                <div className="flex flex-col w-full lg:w-[60%] h-full p-4 lg:p-12 gap-6">
                    <h1 className='text-6xl font-medium font-serif text-tertiary'>
                        About <br /> Us
                    </h1>
                    <p className='text-base font-medium text-text'>
                        Welcome to Bukta Sushi, Tromsø&apos;s premier destination for authentic Japanese cuisine, nestled in the stunning landscapes of northern Norway. Located in the heart of Tromsø, we bring the art of sushi-making to this Arctic paradise, blending traditional Japanese techniques with the freshest ingredients sourced locally and globally.
                    </p>
                    <p className='text-base font-medium text-text'>
                        At Bukta Sushi, every dish is a masterpiece. From delicately sliced sashimi to innovative sushi rolls and warm, comforting bowls of miso soup, we take pride in offering a menu that caters to both seasoned sushi connoisseurs and curious first-timers.
                    </p>
                    <p className='text-base font-medium text-text'>
                        Our location in Tromsø allows us to combine the pristine beauty of Norway with the precision and passion of Japanese culinary traditions. Whether you&apos;re enjoying a cozy evening with friends, a romantic dinner, or simply indulging in your love for sushi, Bukta Sushi is here to make every meal memorable.
                    </p>
                    <p className='text-base font-medium text-text'>
                        Join us for an extraordinary culinary journey at Bukta Sushi—where Tromsø meets Tokyo on every plate.
                    </p>
                    <button className='font-medium text-base border border-secondary text-secondary w-max px-6 py-3 hover:bg-secondary hover:text-primary transition duration-300'>
                        View Menu
                    </button>
                </div>
                <div className="flex w-full lg:w-[40%] h-full p-2 justify-center items-center mt-24 lg:mt-0">
                    <div className="flex flex-col items-center justify-between border-8 border-tertiary w-64 h-[450px] p-14 pt-0 pb-24 font-extrabold text-8xl md:text-9xl gap-12 relative">
                        <p className='absolute -top-16 -left-16 text-secondary'>
                            寿
                        </p>
                        <p className='absolute -bottom-16 -right-16 text-secondary'>
                            司
                        </p>
                        <div className="flex justify-center items-center absolute p-4 w-[500px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                            <Image
                                src={aboutImage}
                                alt='sushi on plate'
                                className='w-full h-full object-cover'
                            />
                        </div>
                    </div>
                </div>
            </div>
            <Contact />
        </main>
    );
}
