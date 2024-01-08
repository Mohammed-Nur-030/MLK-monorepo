import React from 'react'
import { useState } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Head from 'next/head';




const About = () => {

    const [mobileMenu, setMobileMenu] = useState(false)
    return (
        <div>
            <Head>
                <title>
                    About-TheMetroLightKitchen
                </title>
                <meta name="description"
                    content="Explore more about The Metro Light Kitchen" />
                 <meta name='keywords' content='Daily Meals,Daily Tiffin,I am Hungry,Canteen,Tiffin Service in Bengaluru ' />

            </Head>

            <Navbar mobileMenu={mobileMenu} setMobileMenu={setMobileMenu} />




            <section className="our-story h-[55vh] w-full bg-yellow-100 flex justify-center items-center">
                <div className="container h-full wfull ">
                    <div className="our-story-content h-full w-full flex flex-col justify-center items-center ">
                        <div className="heading text-xl md:text-xl lg:text-2xl xl:text-3xl font-bold text-center text-gray-100 ">
                            Our <span className='text-yellow-400'>Story</span>
                        </div>
                        <div className="story py-4 text-gray-100 w-[80vw] mx-auto">
                            <p className='text-center'>
                                In the heart of our culinary journey lies a passion for creating memorable dining experiences. Our story began with a vision to redefine home-cooked meals, infusing them with love, creativity, and quality. Through exceptional culinary expertise, thoughtful curation, and a commitment to freshness, we aim to bring joy to every plate we serve.
                            </p>

                        </div>
                    </div>

                </div>
            </section>
            <hr />

            <section className="what-do-we-stand  py-8 bg-white">
                <div className="container w-full mx-auto ">
                    <div className="flex flex-col justify-center items-center  w-full mx-auto ">

                        <div className=' flex justify-center items-center gap-2 text-xl md:text-xl lg:text-2xl xl:text-3xl font-semibold text-slate-800 pt-4 pb-2'>
                            <span>
                                <img src="https://d3ljlx3hzhder.cloudfront.net/sprink/b2c_assets/images/header_line.png" className="header_line " alt="---" />
                            </span>
                            <span >
                                What Do We <span className='text-yellow-400'>Stand For?</span>
                            </span>
                            <span>
                                <img src="https://d3ljlx3hzhder.cloudfront.net/sprink/b2c_assets/images/header_line.png" className="header_line " alt="---" />
                            </span>

                        </div>


                        <div className="main-content  rounded-md">


                            <div className='flex  gap-4 mx-auto justify-center flex-wrap'>


                                <div className='image-about-content text-center  w-[30%] flex flex-col justify-center items-center  my-4'>

                                    <div className='py-6  bg-white px-2  mx-2 rounded-xl min-h-[30vh] flex justify-center items-center flex-col shadow-md shadow-yellow-300  '>

                                        <div>
                                            <img src="images/frying-pan.png" alt="no oily-food" className='w-24 h-22' />
                                        </div>



                                        <h2 className='py-2 font-semibold'>NO EXTRA OILY FOOD</h2>
                                        <p className='text-gray-500 text-md'>
                                            We maintain a healthy standard by using oils and spices in controlled quantities.
                                        </p>
                                    </div>

                                </div>
                                <div className='image-about-content text-center   w-[30%] flex flex-col justify-center items-center  my-4'>

                                    <div className='py-6  bg-white px-2  mx-2 rounded-xl  min-h-[30vh] flex justify-center items-center flex-col shadow-md shadow-yellow-300  '>
                                        <div>
                                            <img src="images/frozen-food.png" alt="no-frozen-food" className='w-24 h-22' />
                                        </div>

                                        <h2 className='py-2 font-semibold '>NO FROZEN FOOD</h2>
                                        <p className='text-gray-500 text-md'>
                                            No frozen ingredients used in our dishes for an authentic and delightful dining experience.
                                        </p>
                                    </div>

                                </div>
                                <div className='image-about-content text-center   w-[30%] flex flex-col justify-center items-center  my-4'>

                                    <div className='py-6  bg-white px-2  mx-2 rounded-xl  min-h-[30vh] flex justify-center items-center flex-col shadow-md shadow-yellow-300  '>
                                        <div>
                                            <img src="images/halal.png" alt="halal" className='w-24 h-22' />
                                        </div>

                                        <h2 className='py-2 font-semibold '>HALAL CERTIFIED</h2>
                                        <p className='text-gray-500 text-md'>
                                            Halal certified for complete assurance, catering to customers seeking Islamic dietary compliance.
                                        </p>
                                    </div>

                                </div>
                                <div className='image-about-content text-center  w-[30%]  flex flex-col justify-center items-center  my-4'>


                                    <div className='py-6  bg-white px-2  mx-2 rounded-xl  min-h-[30vh] flex justify-center items-center flex-col shadow-md shadow-yellow-300  '>
                                        <div>
                                            <img src="images/badge.png" alt="quality" className='w-24 h-22' />
                                        </div>


                                        <h2 className='py-2  font-semibold '>QUALITY </h2>
                                        <p className='text-gray-500 text-md'>
                                            Ingredients sourced from licensed vendors to ensure freshness and quality.
                                        </p>
                                    </div>

                                </div>
                                <div className='image-about-content text-center  w-[30%]  flex flex-col justify-center items-center  my-4'>

                                    <div className='py-6  bg-white px-2  mx-2 rounded-xl  min-h-[30vh] flex justify-center items-center flex-col shadow-md shadow-yellow-300  '>
                                        <div>
                                            <img src="images/chef.png" alt="chef" className='w-24 h-22' />
                                        </div>

                                        <h2 className='py-2 font-semibold '>EXPERIENCED CHEF</h2>
                                        <p className='text-gray-500 text-md'>
                                            Expert chefs take charge of real cooking, infusing passion and creativity into every meal.
                                        </p>
                                    </div>

                                </div>


                            </div>
                        </div>


                    </div>
                </div>
            </section>

            <Footer />

        </div>
    )
}

export default About
