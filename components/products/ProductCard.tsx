import Image from 'next/image';
import { MdOutlineAdd } from 'react-icons/md';

interface Props {
    title: string;
    description: string;
    image: string;
    price: number;
    oldPrice: number;
}

const ProductCard = ({ title, description, image, price, oldPrice }: Props) => {
    return (
        <article className="w-[250px] h-[320px] rounded-lg overflow-hidden shadow hover:shadow-md duration-300">
            <div className="w-full h-1/2 flex justify-center">
                <Image
                    src={image}
                    alt="image"
                    className="h-full object-contain"
                    width={100}
                    height={100}
                />
            </div>
            <div className="w-full h-1/2 px-2 space-y-2">
                <div className="flex justify-between">
                    <button className="px-4 py-1 flex items-center gap-1 rounded-full bg-blue-600 text-white hover:shadow hover:opacity-80 duration-300">
                        <MdOutlineAdd className="text-lg" />
                        <span>Add</span>
                    </button>
                    <button className="px-4 py-1 flex items-center gap-1 rounded-full border border-blue-600 text-blue-600 hover:shadow hover:bg-blue-100 hover:border-blue-300 duration-300">
                        <MdOutlineAdd className="text-lg" />
                        <span>Details</span>
                    </button>
                </div>
                <p className="text-sm font-semibold text-green-600">
                    Now &#x20B9; {price}
                    {'  '}
                    <span className="text-xs text-slate-500 line-through">
                        &#x20B9; {oldPrice}
                    </span>
                </p>
                <h4 className="text-sm font-semibold">{title.slice(0, 34)}</h4>
                <p className="text-xs">{description.slice(0, 80)}</p>
            </div>
        </article>
    );
};

export default ProductCard;
