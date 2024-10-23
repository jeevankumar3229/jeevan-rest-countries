import React from "react";

const Card = ({ imageURL, cName, population, region, capital }) => {
  return (
    <div className="bg-white shadow-md w-[70%] h-[400px] my-2 flex flex-col rounded-xl overflow-hidden pb-[20px] mb-[30px] font-custom sm:w-[47%] md:w-[31%] lg:w-[23%]">
      <div className="h-[50%]">
        <img src={imageURL} alt="" className="w-[100%] h-[100%]" />
      </div>
      <p className="my-[40px] ml-[25px] font-extrabold text-base ">{cName}</p>
      <p className="ml-[25px] text-base font-light">
        <span className="font-semibold">Population: </span>
        <span>{population}</span>
      </p>
      <p className="ml-[25px] text-base  font-light">
        <span className="font-semibold">Region: </span>
        <span>{region}</span>
      </p>
      <p className="ml-[25px] text-base  font-light">
        <span className="font-semibold">Capital: </span>
        <span>{capital}</span>
      </p>
    </div>
  );
};

export default Card;
