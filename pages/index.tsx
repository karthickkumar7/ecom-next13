import Banner from '@/components/banner/Banner';
import Navbar from '@/components/navbar/Navbar';
import FeaturedProductCard from '@/components/products/FeaturedProductCard';
import ProductCard from '@/components/products/ProductCard';
import axios from 'axios';
import { GetServerSideProps } from 'next';
import Image from 'next/image';
import { Data } from './api/products';

interface Props {
    data: Data;
}

export default function Home(props: Props) {
    return (
        <main>
            <Navbar />
            <div className="w-full bg-emerald-100">
                <Banner />
            </div>
            <div className="w-full bg-emerald-100">
                <div className="max-w-contentContainer mx-auto space-y-8 bg-white px-4 py-6">
                    {/* FEATURED */}
                    <section className="w-full h-[250px] flex flex-col justify-between">
                        <div className="flex items-center justify-between">
                            <h4 className="text-xl font-semibold">Featured</h4>
                            <p className="cursor-pointer">see more</p>
                        </div>
                        <div className="flex gap-4">
                            <FeaturedProductCard />
                            <FeaturedProductCard />
                            <FeaturedProductCard />
                            <FeaturedProductCard />
                            <FeaturedProductCard />
                        </div>
                    </section>

                    {/* CATEGORIES */}
                    <section className="w-full h-[610px] flex flex-col justify-between">
                        <div className="flex items-center justify-between">
                            <h4 className="text-xl font-semibold">
                                Categories
                            </h4>
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

                    {/* PRODUCTS */}
                    <section className="mt-4 flex flex-wrap gap-4">
                        {props.data.map((product) => (
                            <ProductCard
                                key={product._id}
                                title={product.title}
                                description={product.description}
                                image={product.image}
                            />
                        ))}
                    </section>
                </div>
            </div>
        </main>
    );
}

export const getServerSideProps: GetServerSideProps = async () => {
    const { data } = await axios.get('http://localhost:3000/api/products');

    return {
        props: {
            data,
        },
    };
};
