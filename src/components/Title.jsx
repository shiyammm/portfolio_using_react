import React from 'react';

const Title = ({ title, className }) => {
  return (
    <h2
      className={`text-[4rem] mt-10 font-roslindale-display text-white absolute top-10 ${className}`}
    >
      {title}
    </h2>
  );
};

export default Title;
