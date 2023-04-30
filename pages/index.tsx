import Banner from '@/components/banner/Banner';
import Navbar from '@/components/navbar/Navbar';
import FeaturedProductCard from '@/components/products/FeaturedProductCard';

export default function Home() {
    return (
        <main>
            <Navbar />
            <div className="w-full bg-emerald-100">
                <Banner />
            </div>
            <div className="w-full bg-emerald-100">
                <div className="max-w-contentContainer mx-auto space-y-3 bg-white px-4 py-6">
                    {/* FEATURED */}
                    <section className="w-full h-[200px]">
                        <div className="flex items-center justify-between">
                            <h4 className="text-xl font-semibold">Featured</h4>
                            <p>see more</p>
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
                    <section className="w-full h-[200px]">
                        <div className="flex items-center justify-between">
                            <h4 className="text-xl font-semibold">
                                Categories
                            </h4>
                            <p>see more</p>
                        </div>
                    </section>
                </div>
            </div>
        </main>
    );
}
