import Link from 'next/link';
import React from 'react'
import { BsInstagram, BsWhatsapp, BsFacebook, } from 'react-icons/bs';
import { FaCreditCard, FaCcMastercard, } from 'react-icons/fa';

const Footer = () => {
  const year=new Date().getFullYear();

  return (
    <>
      <section className="footer py-2 bg-slate-900">
        <div className="container w-[90vw] py-4 my-3 flex flex-col mx-auto">

          <div className="footer-wrapper flex py-5">
            <div className="footer-wrapper-1 w-1/3 flex flex-col py-5 ">
              <div className=" flex flex-col justify-center items-center">
             <div className="text-center font-header  uppercase leading-tight tracking-wide text-white text-2xl sm:text-2xl lg:text-2xl font-semibold">
              THE METRO LIGHT KITCHEN
             </div>
                
              </div>
              <div className="icons p-4">
                <div className=' inline-block rounded-full p-3 m-2 bg-[#3a3535] hover:bg-yellow-300 cursor-pointer'>
                  <Link href="https://www.instagram.com/themetrolightkitchen/" target='_black'>
                     
                  <BsInstagram className='w-5 h-5 text-white' />
                     
                  </Link>
                </div>
                <div className=' inline-block rounded-full p-3 m-2 bg-[#3a3535] hover:bg-yellow-300 cursor-pointer'>
                  <Link href="https://wa.me/919353627039" target='_black'>
                     
                  <BsWhatsapp className='w-5 h-5 text-white' />
                     
                  </Link>
                </div>
                
                <div className=' inline-block rounded-full p-3 m-2 bg-[#3a3535] hover:bg-yellow-300 cursor-pointer'>
                  <BsFacebook className='w-5 h-5 text-white' />
                </div>
               

              </div>
            </div>
            <div className="footer-wrapper-2 w-2/3 flex-flex-col py-5">
              <div className="heading">
                <h2 className='text-xl sm:text-xl lg:text-2xl leading-10 text-white font-bold'>Your One-Stop Culinary Haven - Where Freshness and Flavor Meet!</h2>
              </div>
              <div className="links flex  gap-4 py-2  px-4">
                <div className="usefull-links w-1/2">
                  <h2 className='text-xl leading-10 text-white text-start cursor-pointer  py-2'>USEFUL LINKS</h2>
                  <div className="flex ">
                    <div className="w-1/2 flex flex-col justify-start ">
                      <ul className='text-md leading-10  text-white '>
                        <li className='text-start cursor-pointer text-[#a09292]'>
                          <Link href="/" className='hover:text-yellow-300'>
                             
                            Home
                             
                            </Link></li>
                        <li className='text-start cursor-pointer text-[#a09292]'><Link href="/menu" className='hover:text-yellow-300'>
                            
                          Our Menu
                           
                          </Link></li>
                        <li className='text-start cursor-pointer text-[#a09292]'><Link href="/about" className='hover:text-yellow-300'>
                           
                          About Us
                           
                          </Link></li>
                        <li className='text-start cursor-pointer text-[#a09292]'><Link href="/contact" className='hover:text-yellow-300'>
                           
                          Contact Us
                           
                          </Link></li>
                      </ul>
                    </div>
                    <div className="w-1/2 flex flex-col justify-start ">
                      <ul className=' text-md leading-10 text-white  '>
                        <li className='text-start cursor-pointer text-[#a09292]'>
                          <Link href="/orders" className='hover:text-yellow-300'>
                             
                            Bulk Orders
                             
                            </Link></li>
                        <li className='text-start cursor-pointer text-[#a09292]'><Link href="/orders" className='hover:text-yellow-300'>
                           
                          Corporate Orders
                           
                          </Link></li>
                        <li className='text-start cursor-pointer text-[#a09292]'><Link href="/contact" className='hover:text-yellow-300'>
                            
                          Customer Care
                           
                          </Link></li>
                      </ul>
                    </div>

                  </div>

                </div>
                <div className="our-store-main w-1/2 text-start cursor-pointer  ">
                  <div className="flex flex-col m-2 py-2">
                   
                    <div className="we-accept">
                      <h2 className='text-xl leading-10 text-white py-2 '>WE ACCEPT:</h2>
                      <div className=" icons-payment flex flex-wrap ">
                        <div className=' inline-block rounded-full p-3 m-2 bg-[#3a3535] hover:bg-yellow-300 cursor-pointer mx-3 '>
                          <FaCcMastercard className=' w-6 h-6 text-white' />
                        </div>
                        <div className=' inline-block rounded-full p-3 m-2 bg-[#3a3535] hover:bg-yellow-300 cursor-pointer mx-3'>
                          <img src="images/bhim-upi.png" alt="upi" className='w-6 h-6 filter invert-100 ' />
                        </div>
                        <div className=' inline-block rounded-full p-3 m-2 bg-[#3a3535] hover:bg-yellow-300 cursor-pointer mx-3'>
                          <FaCreditCard className=' w-6 h-6 text-white' />
                        </div>
                        <div className='    cursor-pointer mx-3 '>
                          <img src='images/Logo-sodexso.png' alt="sodexso" className=' w-18 h-12 text-white my-auto' />
                        </div>

                      </div>


                    </div>

                  </div>


                </div>
              </div>
            </div>


          </div>
          <hr className=' bg-gray-800' />
          <div className='footer-final flex m-3  '>
            <div className="w-1/2 footer-final-content">
              <ul className=' flex gap-3 text-md leading-10 text-white '>

                <li className='footer-final-content-link text-start cursor-pointer mx-4 text-[#a09292]'><Link href="/orders" className='hover:text-yellow-300'>
                    
                  Bulk Orders
                     
                  </Link></li>
                <li className='footer-final-content-link text-start cursor-pointer mx-4 text-[#a09292]'><Link href="/orders" className='hover:text-yellow-300'> Corporate Orders </Link></li>
                <li className='footer-final-content-link text-start cursor-pointer mx-4 text-[#a09292]'><Link href="/contact" className='hover:text-yellow-300'> Customer Care </Link></li>
              </ul>
            </div>
            <div className="w-1/2 m-3 footer-final-content">
              <h3 className='text-md text-[#a09292]'>© {year} The Metro Light Kitchen. All rights reserved.</h3>
            </div>


          </div>

        </div>
      </section>

    </>
  )
}

export default Footer
