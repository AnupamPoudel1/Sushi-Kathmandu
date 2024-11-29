import anotherSushi from '@/assets/anotherSushi.jpg';
import sushiImage from '@/assets/sushiImage.jpg';
import sushiPlate from '@/assets/sushiPlate.png';
import Contact from '@/sections/Contact';
import Image from 'next/image';

const deliveryTakeout = [
    {
        dishName: 'Sashimi'
    },
    {
        dishName: 'Noodles'
    },
    {
        dishName: 'Sushi Rolls'
    },
    {
        dishName: 'Nigiri'
    },
]

const popularDishes = [
    {
        image: sushiImage,
        dishName: 'Temaki'
    },
    {
        image: sushiImage,
        dishName: 'Nigiri'
    },
    {
        image: sushiImage,
        dishName: 'Sushi Rolls'
    },
    {
        image: sushiImage,
        dishName: 'Chef Special'
    },
    {
        image: sushiImage,
        dishName: 'Speciality Rolls'
    },
    {
        image: sushiImage,
        dishName: 'Sashimi'
    },
]

const fullMenu = [
    {
        dishName: 'Wakame',
        description: 'Fresh seaweed salad with a touch of sesame, light and refreshing.',
        category: 'Appetizers',
        price: '69 NOK'
    },
    {
        dishName: 'Spring Roll(3pcs)',
        description: 'Crispy vegetable or chicken rolls served with a sweet chili sauce.',
        category: 'Appetizers',
        price: '99 NOK'
    },
    {
        dishName: 'Gyoza(4pcs)',
        description: 'Chicken dumplings served with chef special sauce.',
        category: 'Appetizers',
        price: '99 NOK'
    },
    {
        dishName: 'Nobashi(4pcs)',
        description: 'Crispy shrimp tempura with ponzu sauce, perfect for a crunchy start.',
        category: 'Appetizers',
        price: '99 NOK'
    },
    {
        dishName: 'Hot Spice Salmon Roll(8pcs)',
        description: 'Crispy fried salmon and Philadelphia maki, topped with spicy salmon, teriyaki, spring onion, and sesame seeds.',
        category: 'Fried Sushi Rolls',
        price: '169 NOK'
    },
    {
        dishName: 'Cherry Blossom Roll(8pcs)',
        description: 'Maki roll with fresh salmon, avocado, and Philadelphia cheese, topped with chili mayo, teriyaki sauce, spring onion, and tobiko.',
        category: 'Fried Sushi Rolls',
        price: '159 NOK'
    },
    {
        dishName: 'Rock Star Roll(8pcs)',
        description: 'Fried maki with shrimp tempura, avocado, and cucumber, topped with salmon, chili mayo, spring onion, and teriyaki sauce.',
        category: 'Fried Sushi Rolls',
        price: '179 NOK'
    },
    {
        dishName: 'Salmon Maki(8pcs)',
        description: 'Salmon, Avacado, Philadelphia, topped with sesame.',
        category: 'Classic Rolls',
        price: '111 NOK'
    },
    {
        dishName: 'Tempura Shrimp Maki(8pcs)',
        description: 'Fried Shrimp Tempura, Cucumber, Avacado, sesame seeds.',
        category: 'Classic Rolls',
        price: '111 NOK'
    },
    {
        dishName: 'Salmon Duo Maki (8pcs)',
        description: 'Salmon, Avacado, Philadelphia, topped with Salmon.',
        category: 'Classic Rolls',
        price: '149 NOK'
    },
    {
        dishName: 'Smoky Tempura Maki(8pcs)',
        description: 'Tempura shrimp maki with smoked salmon, chili mayo, teriyaki sauce, sesame seeds, and spring onion.',
        category: 'Classic Rolls',
        price: '149 NOK'
    },
    {
        dishName: 'Los Angeles Maki(8pcs)',
        description: 'Crabstick, avocado, and cucumber maki, chili mayo topping.',
        category: 'Classic Rolls',
        price: '111 NOK'
    },
    {
        dishName: 'Tempura Futo Maki(8pcs)',
        description: 'Tempura shrimp, avocado, chili mayo wrapped in a maki.',
        category: 'Classic Rolls',
        price: '129 NOK'
    },
    {
        dishName: 'Aurora Maki(8pcs)',
        description: 'Crispy tempura shrimp maki with avocado and cucumber, topped with philadelphia, avocado, chili mayo, teriyaki, sesame, and spring onion.',
        category: 'Specialty Rolls',
        price: '179 NOK'
    },
    {
        dishName: 'Rainbow Maki(8pcs)',
        description: 'Crabstick, avocado, and cucumber maki, topped with smoked salmon, chili mayo, teriyaki, sesame, and fresh spring onion.',
        category: 'Specialty Rolls',
        price: '169 NOK'
    },
    {
        dishName: 'Strawberry-Salmon Maki(8pcs)',
        description: 'Salmon, apple, avacado, and philadelphia, topped with a slice of strawberry, teriyaki, and sesame.',
        category: 'Specialty Rolls',
        price: '159 NOK'
    },
    {
        dishName: 'Veggie Delight Roll(8pcs)',
        description: 'Crisp cucumber, ocean wakame, creamy avocado, topped with sesame seeds.',
        category: 'Specialty Rolls',
        price: '129 NOK'
    },
    {
        dishName: 'Shrimp(6pcs)',
        description: 'Fresh, thinly sliced shrimp served with chef special sauce.',
        category: 'Sashimi',
        price: '99 NOK'
    },
    {
        dishName: 'Salmon(6pcs)',
        description: 'Fresh, thinly sliced salmon served with chef special sauce.',
        category: 'Sashimi',
        price: '121 NOK'
    },
    {
        dishName: 'Shrimp(2pcs)',
        description: 'Succulent Shrimp on a rice ball.',
        category: 'Nigiri',
        price: '41 NOK'
    },
    {
        dishName: 'Salmon(2pcs)',
        description: 'Fresh Salmon on a rice ball.',
        category: 'Nigiri',
        price: '41 NOK'
    },
    {
        dishName: 'Smoked Salmon(2pcs)',
        description: 'Smoky Salmon on a rice ball dressing with chili mayo,teriyaki sauce, spring onion.',
        category: 'Nigiri',
        price: '49 NOK'
    },
    {
        dishName: 'Bukta meny(16pcs)',
        description: 'Salmon Duo Maki (8 pcs.), Salmon Nigiri (6 pcs.), and Shrimp Nigiri (2 pcs.).',
        category: 'Combo',
        price: '249 NOK'
    },
    {
        dishName: 'Family meny(32pcs)',
        description: 'Cherry Blossom Roll (6 pcs.), Rock Star Roll (6 pcs.), Tempura Futo Maki (6pcs.), Strawberry-Salmon Maki (8 pcs.), Salmon Nigiri (2 pcs.), smoked salmon nigiri (2pcs) and Shrimp Nigiri (2 pcs.).',
        category: 'Combo',
        price: '499 NOK'
    },
    {
        dishName: 'Party meny(76pcs)',
        description: 'Hot Spice Salmon Roll (6pcs.), Rock Star Roll (6pcs.) Cherry Blossom Roll (6pcs.), Smoky Tempura Maki (8 pcs.), Tempura Futo Maki (6 pcs.), Salmon Maki (8 pcs.), Los Angeles Maki (8 pcs.), Salmon Nigiri (10 pcs.), Smoked Salmon Nigiri (5 pcs.), Shrimp Nigiri (5 pcs.) and Sashimi (Chef mix: 8pcs.) served with house sauce.',
        category: 'Combo',
        price: '999 NOK'
    },
]

export default function Menu() {

    return (
        <main className="overflow-x-hidden w-full no-scrollbar">
            <div className="h-max lg:h-[190vh] w-full relative flex flex-col">
                <div className="absolute w-[350px] h-[350px] md:w-[500px] md:h-[500px] lg:h-[50%] lg:w-[50%] top-32 -left-10 md:top-28 md:left-44 lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-2/3">
                    <Image
                        src={sushiPlate}
                        alt='sushi on plate'
                        className='size-full object-contain lg:object-cover'
                    />
                </div>
                <div className="flex justify-between w-full h-max lg:h-1/2 bg-tertiary py-14 px-5 pb-32 lg:p-28">
                    <h1 className='text-5xl md:text-6xl lg:text-8xl font-bold text-primary h-max w-max'>
                        Food Menu
                    </h1>
                    <div className="flex flex-col gap-6 text-secondary h-max">
                        <p className='text-xl md:text-3xl lg:text-4xl font-bold font-serif hover:text-primary cursor-pointer transition duration-300'>
                            Appetizers
                        </p>
                        <p className='text-xl md:text-3xl lg:text-4xl font-bold font-serif hover:text-primary cursor-pointer transition duration-300'>
                            Entrees
                        </p>
                        <p className='text-xl md:text-3xl lg:text-4xl font-bold font-serif hover:text-primary cursor-pointer transition duration-300'>
                            Extras
                        </p>
                        <p className='text-xl md:text-3xl lg:text-4xl font-bold font-serif hover:text-primary cursor-pointer transition duration-300'>
                            Desserts
                        </p>
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row justify-center items-center w-full h-max lg:h-1/2">
                    <div className="flex flex-col gap-6 bg-tertiary w-full lg:w-1/2 h-full py-14 px-5 pt-20 lg:p-28">
                        <h1 className='text-5xl md:text-6xl lg:text-8xl font-bold text-secondary h-max w-max'>
                            Delivery & <br /> Takeout
                        </h1>
                        <p className='text-primary'>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut ad nihil pariatur neque beatae aspernatur illo amet voluptas id sequi.
                        </p>
                        <button className='border border-secondary px-4 py-6 w-max text-secondary hover:bg-primary hover:border-primary hover:text-tertiary transition duration-300 font-medium'>
                            Full Menu
                        </button>
                    </div>
                    <div className="flex justify-center items-center w-full lg:w-1/2 h-full py-14 px-5 lg:p-28">
                        <div className="size-full grid grid-cols-2 gap-6">
                            {
                                deliveryTakeout.map((delivery, index) => {
                                    return (
                                        <div
                                            key={index}
                                            className="flex flex-col items-center gap-3 col-span-1"
                                        >
                                            <div className='flex bg-quinary w-32 h-32 md:w-52 md:h-52 lg:w-[80%] lg:h-[80%]'>

                                            </div>
                                            <p className='font-bold font-serif text-xl'>
                                                {delivery.dishName}
                                            </p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full relative flex justify-center items-center flex-col">
                <div className="flex flex-col items-center px-28 py-16 w-full h-full gap-12">
                    <h1 className='font-semibold text-5xl lg:text-6xl w-max text-tertiary'>
                        Popular Dishes
                    </h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 w-full h-full">
                        {
                            popularDishes.map((dish, index) => {
                                return (
                                    <div
                                        key={index}
                                        className="flex flex-col gap-3 font-bold text-xl items-center col-span-1"
                                    >
                                        <div className='w-40 h-40 rounded-full overflow-hidden'>
                                            <Image
                                                src={dish.image}
                                                alt='sushi'
                                                className='size-full object-cover'
                                            />
                                        </div>
                                        <p>
                                            {dish.dishName}
                                        </p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <div className="w-full relative flex justify-center items-center flex-col bg-gray-100">
                <div className="flex flex-col items-center px-12 lg:px-28 py-16 w-full h-full gap-12">
                    <h1 className='font-semibold text-6xl w-max text-tertiary'>
                        Full Menu
                    </h1>
                    <div className="flex flex-col gap-4">
                        <p className='text-left text-2xl font-bold w-full'>
                            Appetizers
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 w-full h-full">
                            {
                                fullMenu.filter((dish) => dish.category === 'Appetizers').map((menu, index) => {
                                    return (
                                        <div
                                            key={index}
                                            className="flex flex-col gap-4 font-bold text-xl items-center col-span-1 p-8 rounded-lg bg-primary pb-3"
                                        >
                                            <div className="flex h-56 w-56">
                                                <Image src={sushiImage} alt='sushi' className='flex size-full object-cover rounded-lg hover:scale-105 transition duration-300' />
                                            </div>
                                            <h1 className='text-xl font-bold text-tertiary'>
                                                {menu.dishName}
                                            </h1>
                                            <p className='text-xs text-text text-center'>
                                                {menu.description}
                                            </p>
                                            <p className='text-base font-bold text-text text-center'>
                                                Price - {menu.price}
                                            </p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <p className='text-left text-2xl font-bold w-full'>
                            Fried Sushi Rolls
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 w-full h-full">
                            {
                                fullMenu.filter((dish) => dish.category === 'Fried Sushi Rolls').map((menu, index) => {
                                    return (
                                        <div
                                            key={index}
                                            className="flex flex-col gap-4 font-bold text-xl items-center col-span-1 p-8 rounded-lg bg-primary pb-3"
                                        >
                                            <div className="flex h-56 w-56">
                                                <Image src={sushiImage} alt='sushi' className='flex size-full object-cover rounded-lg hover:scale-105 transition duration-300' />
                                            </div>
                                            <h1 className='text-xl font-bold text-tertiary'>
                                                {menu.dishName}
                                            </h1>
                                            <p className='text-xs text-text text-center'>
                                                {menu.description}
                                            </p>
                                            <p className='text-base font-bold text-text text-center'>
                                                Price - {menu.price}
                                            </p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <p className='text-left text-2xl font-bold w-full'>
                            Classic Rolls
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 w-full h-full">
                            {
                                fullMenu.filter((dish) => dish.category === 'Classic Rolls').map((menu, index) => {
                                    return (
                                        <div
                                            key={index}
                                            className="flex flex-col gap-4 font-bold text-xl items-center col-span-1 p-8 rounded-lg bg-primary pb-3"
                                        >
                                            <div className="flex h-56 w-56">
                                                <Image src={sushiImage} alt='sushi' className='flex size-full object-cover rounded-lg hover:scale-105 transition duration-300' />
                                            </div>
                                            <h1 className='text-xl font-bold text-tertiary'>
                                                {menu.dishName}
                                            </h1>
                                            <p className='text-xs text-text text-center'>
                                                {menu.description}
                                            </p>
                                            <p className='text-base font-bold text-text text-center'>
                                                Price - {menu.price}
                                            </p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <p className='text-left text-2xl font-bold w-full'>
                            Specialty Rolls
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 w-full h-full">
                            {
                                fullMenu.filter((dish) => dish.category === 'Specialty Rolls').map((menu, index) => {
                                    return (
                                        <div
                                            key={index}
                                            className="flex flex-col gap-4 font-bold text-xl items-center col-span-1 p-8 rounded-lg bg-primary pb-3"
                                        >
                                            <div className="flex h-56 w-56">
                                                <Image src={sushiImage} alt='sushi' className='flex size-full object-cover rounded-lg hover:scale-105 transition duration-300' />
                                            </div>
                                            <h1 className='text-xl font-bold text-tertiary'>
                                                {menu.dishName}
                                            </h1>
                                            <p className='text-xs text-text text-center'>
                                                {menu.description}
                                            </p>
                                            <p className='text-base font-bold text-text text-center'>
                                                Price - {menu.price}
                                            </p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <p className='text-left text-2xl font-bold w-full'>
                            Sashimi
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 w-full h-full">
                            {
                                fullMenu.filter((dish) => dish.category === 'Sashimi').map((menu, index) => {
                                    return (
                                        <div
                                            key={index}
                                            className="flex flex-col gap-4 font-bold text-xl items-center col-span-1 p-8 rounded-lg bg-primary pb-3"
                                        >
                                            <div className="flex h-56 w-56">
                                                <Image src={sushiImage} alt='sushi' className='flex size-full object-cover rounded-lg hover:scale-105 transition duration-300' />
                                            </div>
                                            <h1 className='text-xl font-bold text-tertiary'>
                                                {menu.dishName}
                                            </h1>
                                            <p className='text-xs text-text text-center'>
                                                {menu.description}
                                            </p>
                                            <p className='text-base font-bold text-text text-center'>
                                                Price - {menu.price}
                                            </p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <p className='text-left text-2xl font-bold w-full'>
                            Nigiri
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 w-full h-full">
                            {
                                fullMenu.filter((dish) => dish.category === 'Nigiri').map((menu, index) => {
                                    return (
                                        <div
                                            key={index}
                                            className="flex flex-col gap-4 font-bold text-xl items-center col-span-1 p-8 rounded-lg bg-primary pb-3"
                                        >
                                            <div className="flex h-56 w-56">
                                                <Image src={sushiImage} alt='sushi' className='flex size-full object-cover rounded-lg hover:scale-105 transition duration-300' />
                                            </div>
                                            <h1 className='text-xl font-bold text-tertiary'>
                                                {menu.dishName}
                                            </h1>
                                            <p className='text-xs text-text text-center'>
                                                {menu.description}
                                            </p>
                                            <p className='text-base font-bold text-text text-center'>
                                                Price - {menu.price}
                                            </p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <p className='text-left text-2xl font-bold w-full'>
                            Combo
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 w-full h-full">
                            {
                                fullMenu.filter((dish) => dish.category === 'Combo').map((menu, index) => {
                                    return (
                                        <div
                                            key={index}
                                            className="flex flex-col gap-4 font-bold text-xl items-center col-span-1 p-8 rounded-lg bg-primary pb-3"
                                        >
                                            <div className="flex h-56 w-56">
                                                <Image src={sushiImage} alt='sushi' className='flex size-full object-cover rounded-lg hover:scale-105 transition duration-300' />
                                            </div>
                                            <h1 className='text-xl font-bold text-tertiary'>
                                                {menu.dishName}
                                            </h1>
                                            <p className='text-xs text-text text-center'>
                                                {menu.description}
                                            </p>
                                            <p className='text-base font-bold text-text text-center'>
                                                Price - {menu.price}
                                            </p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
            <Contact />
        </main>
    );
}
