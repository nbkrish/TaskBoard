import React from 'react';
import LandingCards from './Partials/LandingCards';
import Nav from './Partials/LandingPageNav';

const LandingPage = () => {
  const GetStartedBtnClicked = () => {
    window.location.href = '/spaces';
  };
  return (
    <div>
      <Nav />
      <div className="mx-auto w-full lg:w-3/4 px-4 lg:px-0">
        <div className="py-10 mx-auto">
          <div className="pb-5 text-3xl lg:text-6xl text-onBackground font-bold">
            <p className="flex justify-center">Your new hub for</p>
            <p className="flex justify-center">getting work done.</p>
          </div>
          <div className="text-onBackground text-lg lg:text-xl py-5 lg:py-10">
            <p className="flex justify-center ">
              Messaging, tasks, files, notes, and meetings for free.
            </p>
            <p className="flex justify-center">
              All in one space. All for free.
            </p>
          </div>
          <button
            onClick={GetStartedBtnClicked}
            className="text-xl mx-auto font-semibold rounded flex justify-center px-8 rounded text-center py-2 border-none bg-primary text-onPrimary hover:bg-primaryDark"
          >
            Get Started
          </button>
          <div className="flex justify-center py-10">
            <hr className="border border-2 border-onBackground w-11/12"></hr>
          </div>
          <div className="flex flex-col lg:flex-row gap-5 py-10">
            <LandingCards
              Heading="Everything together"
              Description="With everything in one space, you don't need to switch between different apps to get work done."
            />
            <LandingCards
              Heading="Keep work at work"
              Description="Switch to a more asynchronous way of working. Less distractions, less meetings, and more time for yourself."
            />
            <LandingCards
              Heading="Works for everyone"
              Description="Create as many spaces as you want and add as many people as you need. Works across organizations."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
