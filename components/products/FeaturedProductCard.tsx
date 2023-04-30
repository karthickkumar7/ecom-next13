import React from 'react';

const FeaturedProductCard = () => {
    return (
        <article className="w-[200px] h-[200px] rounded-lg overflow-hidden shadow hover:shadow-md duration-300">
            <div className="w-full h-1/2 bg-slate-300">a</div>
            <div className="w-full h-1/2 p-1">
                <h4 className="text-sm font-semibold">iPhone 13 pro max</h4>
                <p className="text-xs">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Tempore cum corporis,
                </p>
            </div>
        </article>
    );
};

export default FeaturedProductCard;
