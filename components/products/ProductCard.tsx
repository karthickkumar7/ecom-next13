import Image from 'next/image';
import React from 'react';

interface Props {
    title: string;
    description: string;
    image: string;
}

const ProductCard = ({ title, description, image }: Props) => {
    return (
        <article className="w-[200px] h-[300px] rounded-lg overflow-hidden shadow hover:shadow-md duration-300">
            <div className="w-full h-1/2 flex justify-center">
                <img
                    src={image}
                    alt="image"
                    className="h-full object-contain"
                />
            </div>
            <div className="w-full h-1/2 p-1">
                <h4 className="text-sm font-semibold">{title}</h4>
                <p className="text-xs">{description.slice(0, 100)}</p>
            </div>
        </article>
    );
};

export default ProductCard;
