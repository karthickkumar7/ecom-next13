import Image from 'next/image';
import React from 'react';
import Slider from 'react-slick';
import BannerText from './BannerText';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';

function Banner() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };
    return (
        <div className="max-w-contentContainer mx-auto px-4 py-6 flex gap-4 border-b-[1px] bg-white">
            <div className="w-2/3 rounded-lg h-[410px] shadow-md relative">
                <Slider {...settings}>
                    <div className="w-full h-[410px] relative">
                        <Image
                            src={'/assets/banner2.jpg'}
                            alt="banner"
                            width={700}
                            height={300}
                            priority
                            className="w-full h-full object-cover rounded-lg"
                        />
                        <BannerText
                            title="Summer Fashion is hot"
                            desc="New Trends & Styles to turn heads anytime, on any budget"
                            buttonText="Shop now!"
                        />
                    </div>
                    <div className="w-full h-[410px] relative">
                        <Image
                            src={'/assets/banner5.jpg'}
                            alt="banner"
                            width={700}
                            height={300}
                            priority
                            className="w-full h-full object-cover rounded-lg"
                        />
                        <BannerText
                            title="Summer Fashion is hot"
                            desc="New Trends & Styles to turn heads anytime, on any budget"
                            buttonText="Shop now!"
                            className="text-black"
                        />
                    </div>
                </Slider>
            </div>
            <div className="w-1/3 rounded-lg h-[410px] border-[1px] border-gray-200 shadow-md p-4 flex flex-col justify-between">
                <div className="flex items-center justify-between">
                    <h2 className="text-xl font-semibold text-black">
                        Fresh pick of the day!
                    </h2>
                    <p className="underline cursor-pointer">view all</p>
                </div>
                <div className="space-y-2">
                    <Image
                        src={'/assets/banner1.jpg'}
                        alt="fresh"
                        height={400}
                        width={400}
                        className="h-60 object-contain"
                    />
                    <button className="px-4 py-2 font-semibold rounded-full text-white bg-blue-600">
                        Options
                    </button>
                    <p className="text-lg font-semibold">
                        From &#x20B9; 15,000
                    </p>
                    <p>Electronics at 50% off...</p>
                </div>
            </div>
        </div>
    );
}

export default Banner;

function NextArrow(props: any) {
    const { onClick } = props;
    return (
        <div
            className="absolute bottom-12 right-6 z-10 cursor-pointer p-4 shadow-md rounded-full bg-white"
            onClick={onClick}
        >
            <BsArrowRight />
        </div>
    );
}

function PrevArrow(props: any) {
    const { onClick } = props;
    return (
        <div
            className="absolute bottom-12 left-6 z-10 cursor-pointer p-4 shadow-md rounded-full bg-white"
            onClick={onClick}
        >
            <BsArrowLeft />
        </div>
    );
}
