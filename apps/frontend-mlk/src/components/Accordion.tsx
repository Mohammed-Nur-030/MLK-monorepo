import React from 'react'
// import './Accordion.css'
import { useState } from 'react'
import MyAccordion from './MyAccordion'

const questions=[
    {
        id:1,
        question:" How does your The Metro Light Kitchen service work?",
        answer: "Our daily meal tiffin service works by offering convenient and delicious meals that you can order easily."
    },
    {
        id:2,
        question:"How do I place an order through your website?",
        answer: " To place an order through our website, simply browse our menu, select your desired meals, and click on the 'Order Now' button. This will direct you to WhatsApp, where you can finalize your order and make payment. "
    },
    {
        id:3,
        question:" Do you offer subscription plans?",
        answer: " Absolutely, we offer subscription plans for long-term convenience. Would you like more details about our subscription options?,Contact us for more details."
    },
    {
        id:4,
        question:"Can I make changes or cancel my subscription?",
        answer: " Yes, you can make changes or cancel your order within a specified time frame.",
    },
]


const Accordion = () => {
    const [data,setData]=useState(questions);
    
    
 
  return (

    <div className='w-full flex flex-wrap gap-4'>
     
        {
            data.map((curr,index)=>{
               
                return (
                <MyAccordion key={index} curr={curr} />
                )

            })
        }
      
    </div>
  )
}

export default Accordion
