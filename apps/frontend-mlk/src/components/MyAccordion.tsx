import React, { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

interface MyAccordionProps {
  curr: FAQItem;
}

const MyAccordion: React.FC<MyAccordionProps> = ({ curr }) => {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(!show);
  };

  return (
    <div className='single-faq w-[48%] py-2'>
      <div className='flex justify-between items-center px-4 py-2 bg-white'>
        <h3 className='font-semibold'>{curr.question}</h3>
        <p onClick={handleShow} className='text-xl cursor-pointer'>
          &#x2b;
        </p>
      </div>
      {show && (
        <div className='bg-yellow-100 py-2 my-2 text-sm rounded-xl px-4'>
          {curr.answer}
        </div>
      )}
    </div>
  );
};

export default MyAccordion;
