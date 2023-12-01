import React, { useEffect, useState } from "react";

import { navigateLinks } from "../data/data";

import { useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { openCart } from "../redux/shoppingSlice";

import { GiHamburgerMenu } from "react-icons/gi";
import { BsXLg } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";


const Navigate = () => {

  const [positionScrollY, setPisitionScrollY] = useState(0);
  const [activeNavigate, setActiveNavigate] = useState(false)
  const dispatch = useDispatch()
  const box = useSelector(state => state.shopping.shoppingCart)

  useEffect(() => {
    const handleScroll = () => {
      const positionY = window.scrollY;
      setPisitionScrollY(positionY.toFixed(0));
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  const navigate = useNavigate()
  const clickSection = (path) => {
    navigate(`/#${path}`)
    setActiveNavigate(false)
  }

  const navigateClass = "fixed top-0 w-full text-gray-100 z-50"
  const navigateScrollClass = "fixed top-0 w-full text-gray-900 backdrop-blur-lg bg-white/30 z-50"

  const navigateVisibleClass = "absolute flex flex-col gap-10 items-center pt-10 top-0 left-0 w-full h-screen backdrop-blur-lg bg-emerald-800 z-40 text-gray-900 slide-in-bottom"
  const navigateHiddenClass = "absolute hidden flex-col gap-10 items-center pt-10 top-[40px] left-0 w-full h-screen backdrop-blur-lg bg-emerald-800 z-40"

  return (
    <div className={positionScrollY > 100 ? navigateScrollClass : navigateClass}>
      <div className="flex items-center py-2 px-4 max-w-[1400px] mx-auto relative">

        {/*--- LOGO ---*/}
        <div className="mr-auto">
          <a href='/#' className="flex items-end  cursor-pointer">
            <h1 className="text-4xl font-bold fontLogo">furniture</h1>
            <div className="w-4 h-4 bg-yellow-500 rounded-full mb-1 ml-1"></div>
          </a>
        </div>

        {/*--- Links  ---*/}
        <div className="hidden md:flex gap-5">
          {navigateLinks.map((el) => (
            <a
              onClick={() => clickSection(el.path)}
              href={el.path}
              key={el.name}
              className="text-2xl font-bold cursor-pointer border-transparent border-b-4 hover:border-yellow-400 tracking-wider py-2"
            >
              {el.name}
            </a>
          ))}


        </div>

        {/*--- SHOPPING_CART ICON ---*/}
        <div className="flex items-center justify-center text-3xl cursor-pointer hover:text-yellow-500 relative px-6 py-2">
          {box.length > 0 && (
            <div className="w-5 h-5 bg-yellow-500 rounded-full text-sm flex justify-center items-center font-black text-black absolute top-0 right-3">{box.length}</div>
          )}
          <FaShoppingCart onClick={() => dispatch(openCart())}/>
        </div>

        {/*--- BURGER ICON ---*/}
        <div onClick={() => setActiveNavigate(true)} className="md:hidden text-3xl p-1">
          <GiHamburgerMenu />
        </div>
        

        {/*--- NAVIGATION SMALL DEVICES  ---*/}
        <div className={activeNavigate ? navigateVisibleClass : navigateHiddenClass}>
          <div className="flex justify-between w-full px-10">
            <div onClick={() => clickLogo()} className="flex items-end mr-auto">
              <h1 className="text-4xl font-bold fontLogo text-white">furniture</h1>
              <div className="w-4 h-4 bg-yellow-500 rounded-full mb-1 ml-1"></div>
            </div>
            <div onClick={() => setActiveNavigate(false)} className="text-3xl p-1 text-white font-bold">
              <BsXLg />
            </div>
          </div>
          {navigateLinks.map((el) => (
            <a
              onClick={() => clickSection(el.path)}
              href={el.path}
              key={el.name}
              className="text-xl font-black cursor-pointer border-transparent border-b-4 hover:border-yellow-400 tracking-wider"
            >
              {el.name}
            </a>
          ))}
          <div className='w-full h-1 border-t border-gray-400 max-w-[1400px] mx-auto mt-auto'></div>

          <div className='max-w-[1400px] mx-auto p-6 pb-10 text-white text-sm'>
              <p>Copyright ©2023. All Rights Reserved. — Designed with love by <span className='italic font-semibold px-2'>p.kmuk</span></p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Navigate;
