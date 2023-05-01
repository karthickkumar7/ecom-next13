import Banner from '@/components/banner/Banner';
import Categories from '@/components/Categories';
import Navbar from '@/components/navbar/Navbar';
import FeaturedProductCard from '@/components/products/FeaturedProductCard';
import ProductCard from '@/components/products/ProductCard';
import { Product } from '@/types';
import axios from 'axios';
import { GetServerSideProps } from 'next';

interface Props {
    data: Product[];
    featured: Product[];
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
                            {props.featured.map((product) => (
                                <FeaturedProductCard
                                    key={product._id}
                                    title={product.title}
                                    description={product.description}
                                    image={product.image}
                                />
                            ))}
                        </div>
                    </section>
                    <Categories />
                    {/* PRODUCTS */}
                    <section className="mt-4 flex flex-wrap gap-4">
                        {props.data.map((product) => (
                            <ProductCard
                                key={product._id}
                                title={product.title}
                                description={product.description}
                                image={product.image}
                                price={product.price}
                                oldPrice={product.oldPrice}
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

    const featured = data.filter((prod: Product) => prod.featured);

    return {
        props: {
            data,
            featured,
        },
    };
};
