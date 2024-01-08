import React, { useState } from 'react'
import Footer from '../components/Footer';

import Navbar from '../components/Navbar';
import Feedback from '../components/FeedbackForm';

import Link from 'next/link';
import Head from 'next/head';




const Contact = () => {
    const [mobileMenu, setMobileMenu] = useState(false)


    return (

        <div>
             <Head>
                <title>
                    Contact-TheMetroLightKitchen
                </title>
                <meta name="description"
                    content=" Feel free to contact The Metro Light Kitchen" />
                <meta name='keywords' content='Daily Meals,Daily Tiffin,I am Hungry,Canteen ' />
                <meta name='keywords' content='Daily Meals,Daily Tiffin,I am Hungry,Canteen,Tiffin Service in Bengaluru ' />

            </Head>

            <Navbar mobileMenu={mobileMenu} setMobileMenu={setMobileMenu} />
            <div className='menu-hero flex justify-center items-center flex-col text-white'>

                <div className='text-3xl font-semibold'>
                    Contact Us
                </div>




            </div>



            <section className="contact-us py-6">
                <div className="container contact-us  w-[80%] h-[85vh] mx-auto py-5 flex  flex-wrap  gap-4 md:gap-0">

                    <div className="contact-item w-[45%] flex flex-col">
                        <div className=" flex flex-col">
                            <h3 className='text-xl  md:text-xl lg:text2xl xl:text-3xl font-bold py-4 pb-0'>GET IN
                                <span className='text-xl  md:text-xl lg:text2xl xl:text-3xl font-bold text-yellow-300'> TOUCH</span>
                            </h3>
                            <p className='text-gray-500 pb-4'>We're ready to lead you into the future with Business Services.</p>
                            <p className=""><span className="text-yellow-400">Call Us : </span> <Link href="tel:+(91) 9353627039" className='hover:text-yellow-300 hover:underline'>+(91)
                            9353627039 </Link></p>
                            <p> <span className="text-yellow-400">Email : </span> <Link href="mailto:metrolightkitchen@gmail.com" className='hover:text-yellow-00 hover:underline '>
                            metrolightkitchen@gmail.com</Link></p>
                            <p className="text-gray-500 pt-5"> 433 California St, Suite 300
                                San Francisco, CA 94104, USA </p>

                        </div>
                        <div className=" flex flex-col ">
                            <h3 className='text-xl  md:text-xl lg:text2xl xl:text-3xl font-bold pt-4 '>WORKING
                                <span className='text-xl  md:text-xl lg:text2xl xl:text-3xl font-bold text-yellow-300'> HOURS</span>
                            </h3>
                            <p className="text-gray-500 pb-4"> We are open on all days</p>

                            <div className='py-3'>
                                <h6 className='text-gray-700 font-bold leading-5 '>Lunch Timing:</h6>
                                <p className="text-gray-500"> Monday to Sunday 12.00 pm - 4.00 pm</p>

                            </div>

                            <h6 className='text-gray-700 font-bold leading-5 '>Customer support:</h6>
                            <p className="text-gray-500"> Monday to Friday 8.00 am - 6.00 pm</p>
                            <p className="text-gray-500"> Saturday 10.00 am - 4.00 pm</p>
                            <p className="text-gray-500"> Sunday - Closed</p>

                        </div>

                    </div>
                    <div className="contact-item w-[45%]  ">
                        {/* @ts-ignore */}
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d971.4001341374645!2d78.13797114641902!3d13.124483796875154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae16902ac7025b%3A0x5cda8d215b70772c!2sUlsoor%20Lake!5e0!3m2!1sen!2sin!4v1691071886118!5m2!1sen!2sin"
                            loading="lazy"
                            className='h-full w-full object-cover'
                            // @ts-ignore
                            referrerpolicy="no-referrer-when-downgrade"
                            title='location'></iframe>



                    </div>
                </div>

            </section>

            <Feedback />
            <Footer></Footer>

        </div>
    )
}

export default Contact
