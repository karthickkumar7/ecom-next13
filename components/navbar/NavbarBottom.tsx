import { FiChevronDown } from 'react-icons/fi';
import { FaPlaceOfWorship } from 'react-icons/fa';
import { MdOutlineLocationOn } from 'react-icons/md';
import { FcIphone } from 'react-icons/fc';

function NavbarBottom() {
    return (
        <div className="max-w-container mx-auto flex items-center justify-between bg-tealBlueDark">
            <section className="flex items-center">
                <div className="flex items-center space-x-2">
                    <span>
                        <FcIphone />
                    </span>
                    <p>How do you want your Items?</p>
                    <span>
                        <FiChevronDown />
                    </span>
                </div>
                <span className="w-[1px] h-4 bg-white inline-flex ml-4"></span>
                <div className="flex items-center space-x-2 ml-4">
                    <span>
                        <MdOutlineLocationOn />
                    </span>
                    <p>Bengaluru, 560047</p>
                    <span>
                        <FaPlaceOfWorship />
                    </span>
                    <p>Bengaluru urban</p>
                </div>
            </section>
            <section className="flex items-center">
                <ul className="flex items-center gap-6 font-semibold">
                    <li className="cursor-pointer">Deals</li>
                    <li className="cursor-pointer">Grocery & Essentials </li>
                    <li className="cursor-pointer">Home</li>
                    <li className="cursor-pointer">Tech</li>
                    <li className="cursor-pointer">Fashion</li>
                </ul>
            </section>
        </div>
    );
}

export default NavbarBottom;
