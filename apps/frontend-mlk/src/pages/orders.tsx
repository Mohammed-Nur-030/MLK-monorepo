import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useState } from 'react'
import Head from 'next/head'




const BulkOrder = () => {
  const [mobileMenu, setMobileMenu] = useState(false)
  return (
    <div>
      <Head>
        <title>
          Orders-TheMetroLightKitchen
        </title>
        <meta name="description"
          content=" Elevate your celebrations with our bulk ordering services! Whether it's a birthday bash, corporate catering, or an outdoor event, we've got your culinary needs covered. Explore our diverse menu, customize your order, and ensure your guests savor every moment. Make your event unforgettable with our catering expertise." />
        <meta name='keywords' content='Daily Meals,Daily Tiffin,I am Hungry,Canteen,Tiffin Service in Bengaluru ' />

      </Head>
      <Navbar mobileMenu={mobileMenu} setMobileMenu={setMobileMenu} />
   
    

      <section className="order-hero-section ">
        <div className='order-hero flex justify-center items-center flex-col text-white h-[45vh]'>
          <div className='text-lg sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl font-bold '>
            Your Vision, Your Order

          </div>
          <div className='text-lg sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl font-bold'>

            Customized and Bulk Options Available
          </div>
        </div>
      </section>

      <section className='bulk-orders  '>
        <div className="container mx-auto  border-black py-8 ">

          <div className=' flex justify-center items-center gap-2 text-xl md:text-xl lg:text-2xl xl:text-3xl font-semibold text-slate-800 text-center'>
            <span>
              <img src="https://d3ljlx3hzhder.cloudfront.net/sprink/b2c_assets/images/header_line.png" className="header_line " alt="---" />
            </span>
            <span className=' '>
              We Undertake <span className='text-yellow-400'>Bulk Orders</span>
            </span>
            <span>
              <img src="https://d3ljlx3hzhder.cloudfront.net/sprink/b2c_assets/images/header_line.png" className="header_line " alt="---" />
            </span>

          </div>

          <div className='flex w-full bulk-order-parent   justify-center items-center gap-2 py-6 flex-wrap'>

            <div className='w-[23%] bulk-order-child  shadow-md shadow-slate-900 flex justify-center items-center flex-col py-8 px-2 text-center h-[150px] rounded-xl text-slate-900  bg-yellow-100'>
              <div className="logo-order w-12 h-14">
                <img src="images/jar.png" alt="save-big" className='h-full w-full' />
              </div>
              <div className='logo-content pt-4 font-semibold'>
                Save Big on Large Orders
              </div>


            </div>
            <div className=' w-[23%]  bulk-order-child  shadow-md shadow-slate-900 flex justify-center items-center flex-col py-8 px-2 text-center h-[150px] rounded-xl text-slate-900  bg-yellow-100'>
              <div className="logo-order w-12 h-12">
                <img src="images/customize.png" alt="customize" className='h-full w-full' />
              </div>
              <div className='logo-content pt-4 font-semibold'>
                Customize to Match Your Unique Needs
              </div>


            </div>
            <div className=' w-[23%]  bulk-order-child   shadow-md shadow-slate-900  flex justify-center items-center flex-col  px-2 text-center rounded-xl text-slate-900  bg-yellow-100 py-8 h-[150px] '>
              <div className="logo-order w-12 h-12">
                <img src="images/thumbs-up.png" alt="easy" className='h-full w-full' />
              </div>
              <div className='logo-content pt-4 font-semibold'>
                Fast and Easy Bulk Ordering Process
              </div>


            </div>
            <div className=' w-[23%]  bulk-order-child   shadow-md shadow-slate-900  flex justify-center items-center flex-col py-8  px-2 text-center h-[150px] rounded-xl text-slate-900  bg-yellow-100'>
              <div className="logo-order w-12 h-14">
                <img src="images/arrow.png" alt="personlize" className='h-full w-full' />
              </div>
              <div className='logo-content pt-4 font-semibold'>
                Personalize Your Selections
              </div>


            </div>



          </div>

        </div>

      </section>

      <section className='bulk-main   '>
        <div className="container mx-auto  py-8 ">
          <div className=' flex justify-center items-center gap-2 text-xl md:text-xl lg:text-2xl xl:text-3xl font-semibold text-slate-800 py-2 text-center'>

            <span>
              <img src="https://d3ljlx3hzhder.cloudfront.net/sprink/b2c_assets/images/header_line.png" className="header_line " alt="---" />
            </span>
            <span >
              Our Services <span className='text-yellow-400'>Includes</span>
            </span>
            <span>
              <img src="https://d3ljlx3hzhder.cloudfront.net/sprink/b2c_assets/images/header_line.png" alt="---"  className="header_line " />
            </span>

          </div>

          <div className="box-order-container w-full flex flex-col justify-center items-center py-6 ">

            <div className="box-order     flex justify-center items-center  gap-4">
              <div className='image-box-order w-[45%] '>
                <img src="images/birthday.jpg" alt="birthday" className='h-full w-full' />

              </div>
              <div className='content-box-order w-[30%]'>
                <div className='text-lg sm:text-2xl md:text-2xl lg:text-3xl xl:text-4x font-semibold'>
                  Birthday Party Orders
                </div>
                <div className='text-gray-600 text-xs md:text-md lg:text-base xl:text-lg '>
                  Celebrate in style with our customized catering services, creating delicious memories for a birthday bash that will be cherished by all
                </div>

              </div>
            </div>
            <div className="box-order    flex  justify-center items-center gap-4">
              <div className='content-box-order w-[30%]'>
                <div className='text-lg sm:text-2xl md:text-2xl lg:text-3xl xl:text-4x font-semibold'>
                  Corporate Events
                </div>
                <div className='text-gray-600 text-xs md:text-md lg:text-base xl:text-lg  '>
                  Impress your team or clients with our exquisite corporate catering solutions, designed to elevate your business events and meetings.
                </div>
              </div>
              <div className='image-box-order w-[45%] '>
                <img src="images/corporate-event.jpg" alt="corporate event" />


              </div>
            </div>
            <div className="box-order    flex justify-center items-center gap-4">
              <div className='image-box-order w-[45%] '>
                <img src="images/outdoor.jpg" alt="outdoor-event" />



              </div>
              <div className='content-box-order w-[30%]'>
                <div className='text-lg sm:text-2xl md:text-2xl lg:text-3xl xl:text-4x font-semibold'>

                  Outdoor Caterine
                </div>
                <div className='text-gray-600 text-xs md:text-md lg:text-base xl:text-lg  '>
                  Take your event to the great outdoors with our exceptional outdoor catering service, serving delectable dishes in the perfect alfresco setting.
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

export default BulkOrder
