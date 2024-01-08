import Link from 'next/link';
import React from 'react'

interface NavbarProps {
    mobileMenu: boolean;
    setMobileMenu: React.Dispatch<React.SetStateAction<boolean>>;
  }

const Navbar:React.FC<NavbarProps> = ({ mobileMenu, setMobileMenu }) => {
    return (
        <div>

            <nav className='big-navbar w-full bg-white z-10 '>

                <div className=' nav-2  w-full flex  px-4 mx-auto justify-between'>
                    <div className='logo w-[180px] h-[70px]'>
                       <img src="images/big-logo.png" alt="logo" data-src-mobile="images/small-logo.png" data-src-small="images/shop-88.jpg"  className='w-full h-full'/>
                    </div>

                    <div className='navbar-middle flex items-end italic text-xs pb-1 ml-4 text-semibold '>
                        Home Made Food Is Where It All Started..
                    </div>

                    <div className='navbar flex items-center  ml-auto mr-auto pt-4 '>
                        <ul className='  flex gap-3 font-semibold'>

                            <li className='group pl-6  '>
                                <Link href="/">
                                    <span className="cursor-pointer pt-0.5  font-semibold uppercase text-sm ">HOME</span>
                                    </Link>
                                    <span
                                    className="block h-0.5 w-full bg-transparent group-hover:bg-yellow-400"
                                ></span>
                             </li>
                            <li className='group pl-6  '>
                                <Link href="/about">
                                    <span className="cursor-pointer pt-0.5 text-sm font-semibold uppercase ">About US</span>
                                    </Link>
                                    <span
                                    className="block h-0.5 w-full bg-transparent group-hover:bg-yellow-400"
                                ></span>
                             </li>
                            <li className='group pl-6  '>
                                <Link href="/menu">
                                    <span className="cursor-pointer pt-0.5 text-sm font-semibold uppercase ">our menu</span>
                                    </Link>
                                    <span
                                    className="block h-0.5 w-full bg-transparent group-hover:bg-yellow-400"
                                ></span>
                             </li>
                            <li className='group pl-6  '>
                                <Link href="/orders">
                                    <span className="cursor-pointer pt-0.5 text-sm font-semibold uppercase ">bulk orders</span>
                                    </Link>
                                    <span
                                    className="block h-0.5 w-full bg-transparent group-hover:bg-yellow-400"
                                ></span>
                             </li>
                            <li className='group pl-6  '>
                                <Link href="/contact">
                                    <span className="cursor-pointer pt-0.5 text-sm font-semibold uppercase ">contact us</span>
                                    </Link>
                                    <span
                                    className="block h-0.5 w-full bg-transparent group-hover:bg-yellow-400"
                                ></span>
                             </li>


                        </ul>
                    </div>

                    <div className="hamburger-menu w-8 h-8   hidden mt-8 mr-2 " onClick={() => setMobileMenu(true)} >
                        <img src="images/more.png" alt="menu" className=' w-14 h-8  object-cover ' />
                    </div>

                    <div className={`pointer-events-none fixed inset-0 z-50 min-h-screen bg-black bg-opacity-70 opacity-0 transition-opacity  ${mobileMenu ? 'opacity-100 pointer-events-auto' : ''}`}>

                        <div className="absolute left-0 min-h-screen w-2/3 bg-primary py-4 px-8 shadow md:w-1/3  ">


                            <ul className="mt-8 absolute top-0 right-0 flex flex-col items-center ml-4  ">

                                <li className="py-4">

                                    <span
                                        onClick={() => {
                                            setMobileMenu(false);
                                        }}
                                        className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
                                    ><Link href="/">Home</Link></span>

                                </li>
                                <li className="py-4">

                                    <span
                                        onClick={() => {
                                            setMobileMenu(false);
                                        }}
                                        className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
                                    ><Link href="/about">About</Link></span>

                                </li>



                                <li className="py-4">

                                    <span
                                        onClick={() => {

                                            setMobileMenu(false);
                                        }}
                                        className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
                                    ><Link href="/menu">OUR MENU</Link></span>

                                </li>

                                <li className="py-4">

                                    <span
                                        onClick={() => {

                                            setMobileMenu(false);
                                        }}
                                        className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
                                    ><Link href="/contact">Contact us</Link></span>

                                </li>
                                <li className="py-4">

                                    <span
                                        onClick={() => {

                                            setMobileMenu(false);
                                        }}
                                        className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
                                    ><Link href="/orders">bulk orders</Link></span>

                                </li>

                              
                            </ul>
                        </div>
                        <div className="absolute right-0 min-h-screen w-1/3 bg-primary py-4 px-8 shadow md:w-1/3  ">
                            <button
                                className="absolute top-2 right-0 mt-4 mr-4"
                                onClick={() => setMobileMenu(false)}>
                                <img src="images/icons8-x-50.png" className="h-10 w-auto inverted-image z-20" alt="close-menu" />
                            </button>
                        </div>
                    </div>


                </div>
            </nav>

        </div>
    )
}

export default Navbar
