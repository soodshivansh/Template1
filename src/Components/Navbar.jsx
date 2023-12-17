import React, { useState } from "react";
import { AiOutlineHome , AiOutlineCloseSquare} from "react-icons/ai";
import Headroom from 'react-headroom';


function Navbar() {
    const [nav,usenav] = useState(true)

    const handlenav = () => {
        usenav(!nav)
    }

  return (
    <>
    <Headroom>
    <div className="p-5">
      <div className="w-full h-[10vh] bg-gray-50 rounded-lg flex flex-row md:flex-row items-center justify-between p-5">
        <div className="flex gap-1 md:mb-0">
          <div className="mt-1 text-xl font-bold">
            <AiOutlineHome />
          </div>
          <h1 className="text-xl font-bold">AllState</h1>
        </div>

        <div className="md:flex hidden md:ml-28">
          <div className="bg-white rounded-3xl p-2 pr-8 pl-8 text-base font-normal">
            <ul className="flex gap-7 items-center">
              <li className="w-16 hover:border-b">About us</li>
              <li className="w-16 hover:border-b">Projects</li>
              <li className="w-16 hover:border-b">Agents</li>
              <li className="w-16 hover:border-b">Services</li>
              <li className="w-16 hover:border-b">Listings</li>
            </ul>
          </div>
        </div>

        <div className="md:hidden flex items-center justify-end">
          <button
            className="text-xl"
            onClick={() => handlenav()}
          >
            <div className={!nav ? 'hidden' : 'flex'}>☰</div>
            <div className={!nav ? 'flex' : 'hidden'}><AiOutlineCloseSquare /></div>
          </button>
        </div>

        <div className="hidden lg:flex items-center justify-between gap-6">
          <h1 className="flex font-semibold text-base gap-2">
            Other services
            <div className="mt-0.5">
              <i className="fa-solid fa-angle-down"></i>
            </div>
          </h1>
          <button className="relative py-2 px-6 text-black text-base font-bold uppercase rounded-[50px] overflow-hidden bg-white transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-blue-500 before:to-blue-300 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-[50px] hover:before:left-0">
            Contact us
          </button>
        </div>
      </div>
    </div>
    </Headroom>

            <div className={!nav ? 'font-hind fixed text-white left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-gray-50 ease-in-out duration-500 z-50' : 'font-hind fixed left-[-100%] top-0 ease-in-out duration-500 h-full z-50'}>
                <div className="flex gap-1 text-black mx-4 my-8">
                    <div className="mt-1 text-xl font-bold">
                        <AiOutlineHome />
                    </div>
                    <h1 className="text-xl font-bold">AllState</h1>
                </div>  
                    <ul className="flex flex-col text-left gap-5 items-center text-black uppercase mt-16">
                        <li className="hover:border-b">About us</li>
                        <li className="hover:border-b">Projects</li>
                        <li className="hover:border-b">Agents</li>
                        <li className="hover:border-b">Services</li>
                        <li className="hover:border-b">Listings</li>
                        <button className="relative py-2 px-6 text-black text-base font-bold uppercase rounded-[50px] overflow-hidden bg-white transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-blue-500 before:to-blue-300 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-[50px] hover:before:left-0">
                            Contact us
                        </button>
                    </ul>
            </div>

    </>
  );
}

export default Navbar;
