interface Props {
    title: string;
    desc: string;
    buttonText: string;
    className?: string;
}

function BannerText(props: Props) {
    return (
        <div
            className={`absolute w-60 h-full top-2 left-4 flex flex-col gap-3 text-white ${props.className}`}
        >
            <h1 className="text-2xl font-bold">{props.title}</h1>
            <p>{props.desc}</p>
            <button className="bg-white text-black rounded-full w-[100px] px-2 py-1 hover:ring ring-amber-300 duration-300">
                {props.buttonText}
            </button>
        </div>
    );
}

export default BannerText;
