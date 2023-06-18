import React from 'react';

const Breadcrumb = ({ items }) => {
  return (
    <div className="breadcrumb">
      {items.map((item, index) => (
        <span key={index}>
          {index > 0 && ' '}
          {`${index + 1}. ${item}`}
        </span>
      ))}
    </div>
  );
};

export default Breadcrumb;
