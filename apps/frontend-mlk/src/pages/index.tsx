// components/SliderComponent.js
import 'tailwindcss/tailwind.css';
import React from 'react'
import { useState } from 'react';
import ChatIcon from '../components/ChatIcon';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Accordion from '../components/Accordion';
import Marquee from 'react-fast-marquee';
import Link from 'next/link';
import HomeSlider from '@/components/HomeSlider';
import MenuSlider from '@/components/MenuSlider';

<style>
  @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500&family=Montserrat:ital,wght@0,200;0,300;0,400;0,500;0,600;1,600;1,700&family=Ysabeau:ital@1&display=swap');
</style>




const Home = () => {
  const [mobileMenu, setMobileMenu] = useState(false)




  const testimonials = [
    {
      image: 'https://source.unsplash.com/800x600/?food',
      name: 'Sarah Johnson',
      description: 'The meals I ordered from your store are absolutely delicious. The flavors are fantastic, and the presentation is beautiful. I look forward to trying more dishes!'
    },
    {
      image: 'https://source.unsplash.com/800x600/?restaurant',
      name: 'Michael Thompson',
      description: "Your food offerings are fantastic. Each meal is carefully prepared and bursting with flavor. I'm impressed with the variety and quality of your dishes. Highly recommended!"
    },
    {
      image: 'https://source.unsplash.com/800x600/?chef',
      name: 'Emily Davis',
      description: 'The meals from your food store are a true culinary delight. The ingredients are fresh, and the recipes are unique. Every bite is a delight to the taste buds.'
    },
    {
      image: 'https://source.unsplash.com/800x600/?cooking',
      name: 'Daniel Wilson',
      description: 'Your food store is my go-to for delicious and healthy meals. I appreciate the attention to detail in every dish. The portions are perfect, and the prices are reasonable.'
    },
    {
      image: 'https://source.unsplash.com/800x600/?recipe',
      name: 'Sophia Martinez',
      description: 'I can\'t get enough of the scrumptious meals I ordered from your store. The variety of cuisines is impressive, and the quality is top-notch. I\'m a satisfied customer!'
    },
    {
      image: 'https://source.unsplash.com/800x600/?foodie',
      name: 'Aiden Harris',
      description: 'Your food store offers an amazing range of flavors. Each meal is a culinary adventure. I love the fact that there\'s something new to try every day!'
    },
    {
      image: 'https://source.unsplash.com/800x600/?plate',
      name: 'Olivia Clark',
      description: 'Ordering from your food store has been a delightful experience. The meals arrive fresh and well-packaged. The menu diversity keeps me excited for my next order!'
    },
    {
      image: 'https://source.unsplash.com/800x600/?meal',
      name: 'Ethan Walker',
      description: 'I\'ve been a loyal customer of your food store. Your commitment to quality and taste is evident in every dish. Your meals have become a regular part of my weekly routine!'
    }
  ];

  return (
    <div>
      <div className="App ">

        <Navbar mobileMenu={mobileMenu} setMobileMenu={setMobileMenu} />
        <Marquee className='bg-red-600 text-white italic '>
          <div className='marque flex justify-around text-sm py-1'>

            <Link href="/menu">
              <div className='mx-20'>
                Opening Sale
              </div>

            </Link>

            <Link href="/menu">
              <div className='mx-12'>
                Huge Discounts on First 100 Orders
              </div>
            </Link>
            <Link href="/menu">
              <div className='mx-12'>
                Hurry! Limited Time Deal
              </div>
            </Link>
            <Link href="/orders">
              <div className='mx-12'>
                Activate your Weekly and Monthly Subscription with Great Discounts
              </div>
            </Link>
          </div>
        </Marquee>
        <HomeSlider/>

     

        <section className="working ">
          <div className="container py-8 mx-auto">

            <div className='flex flex-col py-6 mx-auto'>

              <div className=' flex justify-center items-center gap-2 text-xl md:text-xl lg:text-2xl xl:text-3xl font-semibold text-slate-800'>
                <span>
                  <img src="https://d3ljlx3hzhder.cloudfront.net/sprink/b2c_assets/images/header_line.png" className="header_line " />
                </span>
                <span >
                  How Do We <span className='text-yellow-400'>Operate?</span>
                </span>
                <span>
                  <img src="https://d3ljlx3hzhder.cloudfront.net/sprink/b2c_assets/images/header_line.png" className="header_line " />
                </span>

              </div>


              <div className="working-content-parent w-[90%] mx-auto flex gap-6 justify-center items-center py-4 flex-wrap ">

                <div className='working-content-child w-[30%]  py-6 h-full bg-yellow-100 rounded-xl shadow-md flex justify-center items-center flex-col'>
                  <div className=" flex justify-center items-center  py-4">
                    <img src="images/phone.png" alt="order-placing" className='working-content-image w-16 h-16 my-1 p-1' />
                  </div>
                  <div className='text-xs md:text-sm lg:text-sm xl:text-sm font-semibold text-slate-900 px-4 '>
                    <div className=''>
                      Step-1
                    </div>
                    SELECT YOUR MEAL PLAN.
                  </div>


                </div>
                <div className='working-content-child w-[30%] py-6 h-full bg-yellow-100 rounded-xl shadow-md flex justify-center items-center flex-col '>
                  <div className=" flex justify-center items-center py-4 ">
                    <img src="images/whatsapp.png" alt="order-placing" className='working-content-image w-14 h-14 my-1 p-1' />
                  </div>
                  <div className='text-xs md:text-sm lg:text-sm xl:text-sm font-semibold text-slate-900 px-4   '>
                    <div className=''>
                      Step-2
                    </div>
                    CONNECT WITH US ON WHATSAPP AND BOOK YOUR ORDER
                  </div>
                </div>

                <div className='working-content-child w-[30%]  py-6 h-full bg-yellow-100 rounded-xl shadow-md flex justify-center items-center flex-col'>
                  <div className=" flex justify-center items-center py-4">
                    <img src="images/delivery-boy.png" alt="order-placing" className='w-16 h-16 working-content-image' />
                  </div>
                  <div className='text-xs md:text-sm lg:text-sm xl:text-sm font-semibold text-slate-900 px-4 '>
                    <div className=' '>
                      Step-3
                    </div>
                    YOUR FOOD WILL BE DELIVERED FRESH AND HOT.
                  </div>
                </div>


              </div>
            </div>
          </div>
        </section>

        <section className="our-menu  w-full  flex justify-center   flex-col bg-yellow-100 my-2 py-8  ">

          <div className=' flex justify-center items-center gap-2 text-xl md:text-xl lg:text-2xl xl:text-3xl font-semibold text-slate-800 pt-4 pb-2'>
            <span>
              <img src="https://d3ljlx3hzhder.cloudfront.net/sprink/b2c_assets/images/header_line.png" className="header_line " />
            </span>
            <span >
              Our <span className='text-yellow-400'>Menu</span>
            </span>
            <span>
              <img src="https://d3ljlx3hzhder.cloudfront.net/sprink/b2c_assets/images/header_line.png" className="header_line " />
            </span>

          </div>


          <div className='text-gray-800 w-[70vw] mx-auto  pb-8 text-xs sm:text-md md:text-md lg:text-md xl:text-lg'>
            Explore Flavourfull meals that change daily to match your preferences. Enjoy our popular customer dishes!
          </div>

          <div className=' our-menu-parent flex gap-4 justify-center items-center w-full'>


           <MenuSlider/>
            <div className='our-menu-child2 home-menu bg-white w-[30%] py-12 px-4 h-[50vh]  flex justify-center items-center shadow-md rounded-xl  '>


              <span className='text-xs sm:text-md md:text-md lg:text-md xl:text-lg'>
                Indulge in daily delights at "The Metro Light Kitchen" - where love and freshness blend into unique dishes crafted with care. Discover our changing menu, each day bringing new flavors to savor. Experience the essence of home-cooked goodness in every bite. Join us for a delightful culinary adventure! Bon appétit!
              </span>

            </div>

          </div>




          <div className='meal-option-btn w-60 py-2 px-2 mx-auto text-white font-semibold my-4 cursor-pointer'>
            <Link href="/menu">
                Navigate to Menu
            </Link>
          </div>


        </section>

        <section className='why-choose-use py-6 my-4'>
          <div className="container w-[90%] py-4 mx-auto ">
            <div className=' flex justify-center items-center gap-2 text-xl md:text-xl lg:text-2xl xl:text-3xl font-semibold text-slate-800'>
              <span>
                <img src="https://d3ljlx3hzhder.cloudfront.net/sprink/b2c_assets/images/header_line.png" className="header_line " />
              </span>
              <span >
                What makes <span className='text-yellow-400'>Ghar ka Khana </span> Special
              </span>
              <span>
                <img src="https://d3ljlx3hzhder.cloudfront.net/sprink/b2c_assets/images/header_line.png" className="header_line " />
              </span>

            </div>


            <div className="why-choose-us-parent w-full mx-auto flex gap-4 justify-center items-center flex-wrap py-6  ">

              <div className='why-choose-us-child w-[30%]   py-6 h-full shadow-md shadow-yellow-300 rounded-xl flex justify-center items-center flex-col '>
                <div className=" flex justify-center items-center  py-4">
                  <img src="images/personal-hygiene.png" alt="order-placing" className='w-16 h-16 why-choose-us-image' />
                </div>
                <div className='text-xs md:text-sm lg:text-sm xl:text-sm font-bold text-slate-900 mb-2'>
                  Food Safety and Hygiene
                </div>
                <div className='text-xs md:text-sm lg:text-sm xl:text-sm font-semibold text-slate-700'>
                  Home-cooked meals offer the assurance of cleanliness and safe handling, providing greater appeal and trust in the food and balancing your health.
                </div>


              </div>
              <div className='why-choose-us-child w-[30%]  py-6 h-full shadow-md shadow-yellow-300 rounded-xl flex justify-center items-center flex-col'>
                <div className=" flex justify-center items-center py-4 ">
                  <img src="images/cooking.png" alt="order-placing" className='w-16 h-16 why-choose-us-image' />
                </div>
                <div className='text-xs md:text-sm lg:text-sm xl:text-sm font-bold text-slate-900 mb-2'>
                  Personalized Touch
                </div>
                <div className='text-xs md:text-sm lg:text-sm xl:text-sm font-semibold text-slate-700'>
                  Crafted with love and care, home-cooked dishes cater to individual tastes and preferences, making them feel special and uniquely tailored.
                </div>
              </div>

              <div className='why-choose-us-child w-[30%]  py-6 h-full shadow-md shadow-yellow-300 rounded-xl flex justify-center items-center flex-col'>
                <div className=" flex justify-center items-center py-4">
                  <img src="images/fresh.png" alt="order-placing" className='w-16 h-16 why-choose-us-image' />
                </div>
                <div className='text-xs md:text-sm lg:text-sm xl:text-sm font-bold text-slate-900 mb-2'>
                  Fresh and Customizable
                </div>
                <div className='text-xs md:text-sm lg:text-sm xl:text-sm font-semibold text-slate-700'>
                  Home cooking allows control over ingredients, ensuring freshness and offering the freedom to customize meals according to dietary needs and experiment with diverse flavors.
                </div>
              </div>


            </div>
            <div className=' meal-option-btn w-60 py-2 px-2 mx-auto text-white font-semibold my-4 cursor-pointer'
            >
              <Link href="/menu">
                  Place Order
              </Link>
            </div>



          </div>

        </section>


        <ChatIcon></ChatIcon>




        <section className="faq-section  w-full  flex justify-center   flex-col bg-[#f6f6f6] my-2 py-8">

          <div className="container">

            <div className=' flex justify-center items-center gap-2 text-xl md:text-xl lg:text-2xl xl:text-3xl font-semibold text-slate-800'>
              <span>
                <img src="https://d3ljlx3hzhder.cloudfront.net/sprink/b2c_assets/images/header_line.png" className="header_line " />
              </span>
              <span >
                <span className='text-yellow-400'>FAQ's </span> Section
              </span>
              <span>
                <img src="https://d3ljlx3hzhder.cloudfront.net/sprink/b2c_assets/images/header_line.png" className="header_line " />
              </span>

            </div>


          </div>

          <div className='content flex flex-wrap w-[80%]  mx-auto gap-2 justify-center items-center py-6'>
            <Accordion />
          </div>




        </section>

        <section className="why-us py-8 w-full">

          <div className="container w-full py-4 mx-auto">
            <div className=' flex justify-center items-center gap-2 text-xl md:text-xl lg:text-2xl xl:text-3xl font-semibold text-slate-800'>
              <span>
                <img src="https://d3ljlx3hzhder.cloudfront.net/sprink/b2c_assets/images/header_line.png" className="header_line " />
              </span>
              <span >
                Why <span className='text-yellow-400'>The Metro Light Kitchen</span>
              </span>
              <span>
                <img src="https://d3ljlx3hzhder.cloudfront.net/sprink/b2c_assets/images/header_line.png" className="header_line " />
              </span>

            </div>

            <div className="why-us-parent flex flex-wrap w-[80%] mx-auto gap-4 gap-y-4 justify-center items-center py-6 ">

              <div className='why-us-child w-[45%] flex justify-center items-center gap-6 py-4 px-2  '>
                <img src="images/schedule.png" alt="weekly-menu" className='w-20 h-20 why-us-image' />
                <div className='why py-4'>
                  <div className='why-text text-semibold text-slate-800 font-semibold py-2'>
                    WEEKLY MEAL
                  </div>
                  <div className='why-us-desc text-gray-500 text-sm'>
                    Discover a variety of delicious and wholesome meals tailored to your preferences, available all week long.
                  </div>

                </div>
              </div>
              <div className='why-us-child w-[45%] flex justify-center items-center gap-6 py-4 px-2 '>
                <img src="images/interface.png" alt="customisable-meal" className='w-20 h-20 why-us-image' />
                <div className='why py-4'>
                  <div className='why-text text-semibold text-slate-800 font-semibold py-2' >
                    CUSTOMISABLE MEAL
                  </div>
                  <div className='why-us-desc text-gray-500 text-sm '>
                    Personalize your dining experience by creating meals that  aligns with your  tastes and dietary needs.
                  </div>

                </div>

              </div>
              <div className='why-us-child w-[45%] flex justify-center items-center gap-6 py-4 px-2 '>
                <img src="images/box.png" alt="easy-add-ons" className='w-20 h-20 why-us-image' />
                <div className='why py-4'>
                  <div className='why-text text-semibold text-slate-800 font-semibold py-2'>
                    EASY ADD-ON
                  </div>
                  <div className='why-us-desc text-gray-500 text-sm'>
                    Enhance your meals effortlessly with our convenient and delectable add-on options.
                  </div>

                </div>

              </div>
              <div className='why-us-child w-[45%] flex justify-center items-center gap-6 py-4 px-2 '>
                <img src="images/tasting.png" alt="unmatachable-taste" className='w-20 h-20 why-us-image' />
                <div className='why py-4'>
                  <div className='why-text text-semibold text-slate-800 font-semibold py-2'>
                    UNMATCHABLE TASTE
                  </div>
                  <div className='why-us-desc text-gray-500 text-sm '>
                    Indulge in the unparalleled flavors of our expertly crafted dishes.
                  </div>
                </div>

              </div>


            </div>


          </div>
        </section>

        <section className="testimonial flex justify-center items-center bg-yellow-100 py-5">
          <div className="container w-[90vw] py-5 ">
            <div className=' flex justify-center items-center gap-2 text-xl md:text-xl lg:text-2xl xl:text-3xl font-semibold text-slate-800 pt-4 pb-2'>
              <span>
                <img src="https://d3ljlx3hzhder.cloudfront.net/sprink/b2c_assets/images/header_line.png" className="header_line " />
              </span>
              <span >
                Customer <span className='text-yellow-400'>Review</span>
              </span>
              <span>
                <img src="https://d3ljlx3hzhder.cloudfront.net/sprink/b2c_assets/images/header_line.png" className="header_line " />
              </span>

            </div>


            <p className='text-gray-500'>What People Say</p>
            <div className="slider-testimonial py-5">
              <Swiper
                modules={[Pagination, Autoplay]}
                slidesPerView={1}
                spaceBetween={40}
                speed={300}
                autoplay={{
                  delay: 2000,
                  disableOnInteraction: false
                }}


                pagination={{
                  clickable: true,
                }}

                breakpoints={{
                  640: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 40,
                  },
                  1080: {
                    slidesPerView: 3,
                    spaceBetween: 50,
                  },
                }}



                className="mySwiper"
              >
                <SwiperSlide className='bg-yellow-100   '>
                  <div className=' bg-yellow-100  mx-auto '>

                    <div className='flex flex-col  md:relative   bg-yellow-100   relative w-full'>

                      <div className='absolute w-14 h-14 top-4'>
                        <img src={testimonials[0].image} alt="person-1" className='rounded-full mx-auto ' />

                      </div>
                      <div className='text-end mt-4 '>
                        <p className='tracking-wider font-bold text-base md:text-lg lg:text-xl capitalize'>{testimonials[0].name}</p>
                      </div>

                      <div className='bg-[#232020] rounded-md w-full'>
                        <div className='text-violet-400   mx-auto mt-3'>
                          <FaQuoteLeft className='mx-auto text-green-500' />
                        </div>

                        <div className='text-center mt-1 text-white'>
                          {testimonials[0].description}
                        </div>

                        <div className='text-violet-400 mx-auto mt-5'>
                          <FaQuoteRight className='mx-auto text-green-500' />
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className='bg-yellow-100'>
                  <div className=' bg-yellow-100 mx-auto'>

                    <div className='flex flex-col  md:relative   bg-yellow-100  relative'>

                      <div className='absolute w-14 h-14 top-4'>
                        <img src={testimonials[1].image} alt="person-2" className='rounded-full mx-auto ' />

                      </div>
                      <div className='text-end mt-4 '>
                        <p className='tracking-wider font-bold text-base md:text-lg lg:text-xl capitalize'>{testimonials[1].name}</p>
                      </div>

                      <div className='bg-[#232020] rounded-md'>
                        <div className='text-violet-400   mx-auto mt-3'>
                          <FaQuoteLeft className='mx-auto text-green-500' />
                        </div>

                        <div className='text-center mt-1 text-white'>
                          {testimonials[1].description}
                        </div>

                        <div className='text-violet-400 mx-auto mt-5'>
                          <FaQuoteRight className='mx-auto text-green-500' />
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className='bg-yellow-100'>
                  <div className=' bg-yellow-100 mx-auto'>

                    <div className='flex flex-col  md:relative   bg-yellow-100   relative'>

                      <div className='absolute w-14 h-14 top-4'>
                        <img src={testimonials[2].image} alt="person-3" className='rounded-full mx-auto ' />

                      </div>
                      <div className='text-end mt-4 '>
                        <p className='tracking-wider font-bold text-base md:text-lg lg:text-xl capitalize'>{testimonials[2].name}</p>
                      </div>

                      <div className='bg-[#232020] rounded-md'>
                        <div className='text-violet-400   mx-auto mt-3'>
                          <FaQuoteLeft className='mx-auto text-green-500' />
                        </div>

                        <div className='text-center mt-1 text-white'>
                          {testimonials[2].description}
                        </div>

                        <div className='text-violet-400 mx-auto mt-5'>
                          <FaQuoteRight className='mx-auto text-green-500' />
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className='bg-yellow-100'>
                  <div className=' bg-yellow-100 mx-auto'>

                    <div className='flex flex-col  md:relative   bg-yellow-100   relative'>

                      <div className='absolute w-14 h-14 top-4'>
                        <img src={testimonials[3].image} alt="person-4" className='rounded-full mx-auto ' />

                      </div>
                      <div className='text-end mt-4 '>
                        <p className='tracking-wider font-bold text-base md:text-lg lg:text-xl capitalize'>{testimonials[3].name}</p>
                      </div>

                      <div className='bg-[#232020] rounded-md'>
                        <div className='text-violet-400   mx-auto mt-3'>
                          <FaQuoteLeft className='mx-auto text-green-500' />
                        </div>

                        <div className='text-center mt-1 text-white'>
                          {testimonials[3].description}
                        </div>

                        <div className='text-violet-400 mx-auto mt-5'>
                          <FaQuoteRight className='mx-auto text-green-500' />
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className='bg-yellow-100'>
                  <div className=' bg-yellow-100 mx-auto'>

                    <div className='flex flex-col  md:relative   bg-yellow-100   relative'>

                      <div className='absolute w-14 h-14 top-4'>
                        <img src={testimonials[4].image} alt="person-4" className='rounded-full mx-auto ' />

                      </div>
                      <div className='text-end mt-4 '>
                        <p className='tracking-wider font-bold text-base md:text-lg lg:text-xl capitalize'>{testimonials[4].name}</p>
                      </div>

                      <div className='bg-[#232020] rounded-md'>
                        <div className='text-violet-400   mx-auto mt-3'>
                          <FaQuoteLeft className='mx-auto text-green-500' />
                        </div>

                        <div className='text-center mt-1 text-white'>
                          {testimonials[4].description}
                        </div>

                        <div className='text-violet-400 mx-auto mt-5'>
                          <FaQuoteRight className='mx-auto text-green-500' />
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className='bg-yellow-100'>
                  <div className=' bg-yellow-100 mx-auto'>

                    <div className='flex flex-col  md:relative   bg-yellow-100   relative'>

                      <div className='absolute w-14 h-14 top-4'>
                        <img src={testimonials[5].image} alt="person-5" className='rounded-full mx-auto ' />

                      </div>
                      <div className='text-end mt-4 '>
                        <p className='tracking-wider font-bold text-base md:text-lg lg:text-xl capitalize'>{testimonials[5].name}</p>
                      </div>

                      <div className='bg-[#232020] rounded-md'>
                        <div className='text-violet-400   mx-auto mt-3'>
                          <FaQuoteLeft className='mx-auto text-green-500' />
                        </div>

                        <div className='text-center mt-1 text-white'>
                          {testimonials[5].description}
                        </div>

                        <div className='text-violet-400 mx-auto mt-5'>
                          <FaQuoteRight className='mx-auto text-green-500' />
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className='bg-yellow-100'>
                  <div className=' bg-yellow-100 mx-auto'>

                    <div className='flex flex-col  md:relative  bg-yellow-100 relative'>

                      <div className='absolute w-14 h-14 top-4'>
                        <img src={testimonials[6].image} alt="person-6" className='rounded-full mx-auto ' />

                      </div>
                      <div className='text-end mt-4 '>
                        <p className='tracking-wider font-bold text-base md:text-lg lg:text-xl capitalize'>{testimonials[6].name}</p>
                      </div>

                      <div className='bg-[#232020] rounded-md'>
                        <div className='text-violet-400   mx-auto mt-3'>
                          <FaQuoteLeft className='mx-auto text-green-500' />
                        </div>

                        <div className='text-center mt-1 text-white'>
                          {testimonials[6].description}
                        </div>

                        <div className='text-violet-400 mx-auto mt-5'>
                          <FaQuoteRight className='mx-auto text-green-500' />
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className='bg-yellow-100'>
                  <div className=' bg-yellow-100 mx-auto'>

                    <div className='flex flex-col  md:relative   bg-yellow-100  relative'>

                      <div className='absolute w-14 h-14 top-4'>
                        <img src={testimonials[7].image} alt="person-7" className='rounded-full mx-auto ' />

                      </div>
                      <div className='text-end mt-4 '>
                        <p className='tracking-wider font-bold text-base md:text-lg lg:text-xl capitalize'>{testimonials[7].name}</p>
                      </div>

                      <div className='bg-[#232020] rounded-md'>
                        <div className='text-violet-400   mx-auto mt-3'>
                          <FaQuoteLeft className='mx-auto text-green-500' />
                        </div>

                        <div className='text-center mt-1 text-white'>
                          {testimonials[7].description}
                        </div>

                        <div className='text-violet-400 mx-auto mt-5'>
                          <FaQuoteRight className='mx-auto text-green-500' />
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

              </Swiper>


            </div>
          </div>
        </section>

        <Footer />



















      </div >


    </div >
  )
}

export default Home
