import React from 'react'
import { urlFor } from '../client'


type  ImageUrl={
    asset:{_ref:string,_type:string},
   }
   type  slugType={
    current:string,
    _type:string,
   }
   type menuDataType={
    day:string,
    namesAndVeg:[{image:ImageUrl,name:string,veg:boolean,_key:string}],
    price:string,
    slug:slugType,
    _createdAt:string,
    _id:string,
    _rev:string,
    _type:string,
    _updatedAt:string,
    description?:string,
  }
type PlanVegProps={
    vegDaysArray:menuDataType[],
    category:string,
}

const PlanVeg:React.FC<PlanVegProps> = ({vegDaysArray,category}:PlanVegProps) => {
    console.log("inisde plan veg")
    
  
    console.log(vegDaysArray)
    console.log(category)
    const foundObject = vegDaysArray.filter((obj) => {
        const dayWords = obj.day.split(' ');
        const lastWord = dayWords[dayWords.length - 1].toLowerCase();
        return lastWord === category.toLowerCase();
    });

    console.log(foundObject)
    return (
        <section className="plan">
            <div className="container plan-container  mx-auto">
            <div className='font-semi-bold text-xl text-center bg-yellow-100 py-4 text-slate-900 font-bold rounded-t-xl'>Menu Plan for <span>{foundObject[0]?.day}</span></div>

                <div className="flex justify-center items-center px-4">

                <div className='flex  flex-wrap justify-center items-center '>
                          {
                            foundObject[0]?.namesAndVeg[0].image ? (

                                foundObject[0]?.namesAndVeg.map((item:{image:ImageUrl,name:string,veg:boolean,_key:string}, index:number) => { 
                                    console.log("item")
                                    console.log(item)
                                  
                                            return (
                                                <div key={index} className='plan-image-container flex flex-col border-2 py-2 px-2 bg-white rounded-xl shadow-xl my-4 mx-2 '>
                                                    <div className="w-60 h-60 todays-food "
                                                      style={{
                                                          backgroundImage: `url(${urlFor(item?.image?.asset?._ref).url()})`,
                                                        }}
                                                        ></div>
                                                        <div className='flex justify-between w-full 2 items-center'>

                                                    <div className='py-2 font-semibold'>
                                                        {
                                                            item.name
                                                        }
                                                        </div>  
                                                        <div  className=' w-8 h-8'>
                                                                   {
                                                                    item.veg ? (
                                                                            <img src="images/veg.png" alt="veg" className='h-full w-full' />
                                                                    ):(
                                                                        <img src="images/non-veg.png" alt="non-veg" className='h-full w-full' />

                                                                    )
                                                                }
                                                            
                                                            
                                                        </div>  
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

export default PlanVeg
