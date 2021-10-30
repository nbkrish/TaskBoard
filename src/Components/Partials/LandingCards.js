import React from 'react';

const LandingCards = (props) => {
  return (
    <div className="rounded-lg shadow-lg bg-surface p-5 text-onSurface">
      <p className="text-xl font-semibold pb-4">{props.Heading}</p>
      <p className="">{props.Description}</p>
    </div>
  );
};

export default LandingCards;
