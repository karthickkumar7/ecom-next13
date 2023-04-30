import { MdOutlineGridView, MdSearch } from 'react-icons/md';
import { TbLayoutGridAdd } from 'react-icons/tb';
import { AiOutlineHeart, AiOutlineUser } from 'react-icons/ai';
import { BsCart } from 'react-icons/bs';
import NavbarBottom from './NavbarBottom';

const Navbar = () => {
    return (
        <>
            <div className="w-full py-4 bg-tealBlue text-white">
                <div className="max-w-container mx-auto flex items-center justify-between">
                    <div className="navHeaderLinks">Logo</div>
                    <div className="navHeaderLinks">
                        <span>
                            <MdOutlineGridView className="text-lg" />
                        </span>
                        <p className="">Departments</p>
                    </div>
                    <div className="navHeaderLinks">
                        <span className="">
                            <TbLayoutGridAdd />
                        </span>
                        <p className="">Services</p>
                    </div>
                    <div className="w-[800px] flex rounded-full overflow-hidden text-slate-700 bg-white">
                        <input
                            type="text"
                            placeholder="Search Everything at Shopzone has to offer"
                            className="w-full px-6 py-2 outline-none"
                        />
                        <span className="text-2xl px-2 flex items-center justify-center cursor-pointer bg-amber-300 hover:text-opacity-80 hover:bg-amber-400 duration-300">
                            <MdSearch />
                        </span>
                    </div>
                    <div className="flex space-x-2 cursor-pointer px-3 py-2 hover:bg-slate-600 duration-300 rounded-xl">
                        <span className="mt-1">
                            <AiOutlineHeart className="text-lg" />
                        </span>
                        <div>
                            <p className="text-xs">Recorder</p>
                            <h4 className="font-semibold">My Items</h4>
                        </div>
                    </div>
                    <div className="flex space-x-2 cursor-pointer px-3 py-2 hover:bg-slate-600 duration-300 rounded-xl">
                        <span className="mt-1">
                            <AiOutlineUser className="text-lg" />
                        </span>
                        <div>
                            <p className="text-xs">Sign In</p>
                            <h4 className="font-semibold">Account</h4>
                        </div>
                    </div>
                    <div className="flex flex-col items-center cursor-pointer px-3 py-2 hover:bg-slate-600 duration-300 rounded-xl relative">
                        <span className="mt-1">
                            <BsCart className="text-xl" />
                        </span>

                        <h4 className="font-semibold">&#x20B9; 0</h4>
                        <span className="absolute top-0 right-0 h-5 w-5 flex items-center justify-center font-semibold rounded-full bg-amber-300 text-black">
                            3
                        </span>
                    </div>
                </div>
            </div>
            <div className="w-full py-2 bg-tealBlueDark text-white">
                <NavbarBottom />
            </div>
        </>
    );
};

export default Navbar;
