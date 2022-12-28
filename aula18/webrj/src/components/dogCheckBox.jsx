import React from "react";

const DogCheckBox = ({ transaction, text }) => {
  return (
    <div className={`flex flex-row items-center gap-1 ${transaction ? '' : 'opacity-40'}`}>
        <span className="text-[14px] font-semibold">{text}</span>
      {transaction ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-circle-check stroke-green-600"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="#2c3e50"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <circle cx="12" cy="12" r="9" />
          <path d="M9 12l2 2l4 -4" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-circle-dashed"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="#2c3e50"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M8.56 3.69a9 9 0 0 0 -2.92 1.95" />
          <path d="M3.69 8.56a9 9 0 0 0 -.69 3.44" />
          <path d="M3.69 15.44a9 9 0 0 0 1.95 2.92" />
          <path d="M8.56 20.31a9 9 0 0 0 3.44 .69" />
          <path d="M15.44 20.31a9 9 0 0 0 2.92 -1.95" />
          <path d="M20.31 15.44a9 9 0 0 0 .69 -3.44" />
          <path d="M20.31 8.56a9 9 0 0 0 -1.95 -2.92" />
          <path d="M15.44 3.69a9 9 0 0 0 -3.44 -.69" />
        </svg>
      )}
    </div>
  );
};

export default DogCheckBox;
