import React from 'react'
import { urlFor } from '../client'


const PlanExtra = ({ newAdditional, extra }) => {
    console.log("newAdditional")
    console.log(newAdditional)
    console.log("extra")
    console.log(extra)
    const foundObject = newAdditional.filter((obj) => {
        const target=extra.toLowerCase();
      
        const title=obj.title.toLowerCase()
     
        if( title === target){
            return obj;
        }
       
    });

    console.log("foundObject")
    console.log(foundObject)
    return (
        <section className="plan">
            <div className="container  plan-extra-container mx-auto">
            <div className='plan-extra-container-heading font-semi-bold text-xl  text-center bg-yellow-100  mx-auto py-4 text-slate-900 font-bold'>Also Have a Look At our <span>{extra}</span></div>

                <div className="flex justify-center items-center px-4">

                <div className='flex  flex-wrap justify-center items-center  w-full'>
                          {
                            foundObject[0]?.items[0].image ? (

                                foundObject[0]?.items.map((item, index) => { 
                                            return (
                                                <div key={index} className='plan-image-container flex flex-col border-2 py-2 px-2 bg-white rounded-xl shadow-xl my-4 mx-2'>
                                                    <div className="w-40 h-40 todays-food"
                                                      style={{
                                                          backgroundImage: `url(${urlFor(item?.image?.asset?._ref).url()})`,
                                                        }}
                                                        ></div>
                                                    <div className='py-4 font-semibold'>
                                                        {
                                                            item?.name
                                                        }
                                                        </div>    
                                                </div>
                                            )
                                })
                            ):(
                                <div className='min-h-[30vh] flex justify-center items-center font-semibold text-white'>
                                    No images to display
                                </div>
                            )


                          }
                        
                    
            
                </div>

                </div>

            </div>
        </section>
    )
}

export default PlanExtra
