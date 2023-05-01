import Image from 'next/image';
import React from 'react';

function Categories() {
    return (
        <section className="w-full h-[610px] flex flex-col justify-between">
            <div className="flex items-center justify-between">
                <h4 className="text-xl font-semibold">Categories</h4>
                <p>see more</p>
            </div>
            <div className="grid grid-cols-3 gap-2 min-h-[250px]">
                <section className="col-span-2 relative">
                    <Image
                        src={'/assets/men.jpg'}
                        alt="men"
                        height={80}
                        width={200}
                        className="object-cover w-full h-full"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-blue-500"></div>
                </section>
                <section className="relative">
                    <Image
                        src={'/assets/women.jpg'}
                        alt="women"
                        height={80}
                        width={120}
                        className="object-cover w-full h-full"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-pink-500"></div>
                </section>
                <section className="relative">
                    <Image
                        src={'/assets/elec.jpg'}
                        alt="women"
                        height={80}
                        width={120}
                        className="object-cover w-full h-full"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-zinc-500"></div>
                </section>

                <section className="col-span-2 relative">
                    <Image
                        src={'/assets/groceries.jpg'}
                        alt="groc"
                        height={80}
                        width={200}
                        className="object-cover w-full h-full"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-green-500"></div>
                </section>
            </div>
        </section>
    );
}

export default Categories;
