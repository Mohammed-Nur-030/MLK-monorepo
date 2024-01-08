import  { useState } from 'react';
import { FormEvent,ChangeEvent } from 'react';

const Feedback = () => {
  const [feedback, setFeedback] = useState('');

  const handleFeedbackChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setFeedback(e.target.value);
  };

  const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const mailtoLink = `mailto:metrolightkitchen@gmail.com?subject=Feedback&body=${encodeURIComponent(feedback)}`;
    window.open(mailtoLink, '_blank');

    // Reset form after submission
    setFeedback('');
  };

  return (
    <div>
      <div
        className="relative feedback-form bg-primary bg-cover bg-center bg-no-repeat py-16 bg-blend-multiply lg:py-24" id="feedback"
      >
        <div className="container relative z-30">
          <h3
            className="text-center font-header text-3xl uppercase leading-tight tracking-wide text-white sm:text-4xl lg:text-5xl font-semibold"
          >
            We Value Your Feedback
          </h3>
          <form className="mt-6" onSubmit={handleSubmit}>
            <textarea
              className="w-full rounded px-4 py-3 font-body text-black resize-none"
              id="feedback"
              rows={4}
              placeholder="Enter your feedback"
              value={feedback}
              onChange={handleFeedbackChange}
            ></textarea>
            <button
            className="mt-4  bg-yellow-300 px-8 py-2 font-body text-base font-bold uppercase text-primary transition-colors hover:bg-primary text-white hover:bg-yellow-400 focus:border-transparent focus:outline-none focus:ring focus:ring-yellow sm:text-lg rounded-xl"
              type="submit"
            >
              Submit Feedback
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
