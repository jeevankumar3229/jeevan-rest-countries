import React from "react";
import { Link } from "react-router-dom";
const Card = ({ imageURL, cName, population, region, capital }) => {
  return (
    <div className="bg-lm-elements-dm-text shadow-md w-[70%] h-[400px] my-2 text-lm-text flex flex-col rounded-xl overflow-hidden pb-[20px] font-custom sm:w-[100%] md:w-[100%] lg:w-[100%] dark:bg-dm-elements dark:text-white dark:shadow-md">
      <Link to={`/country/${cName}`}>
        <div className="h-[200px] w-full">
          <img src={imageURL} alt="" className="w-full h-full object-fill" />
        </div>
        <div className="w-[100%] h-[50%]">
          <p className="py-[40px] pl-[25px] font-extrabold text-base ">
            {cName}
          </p>
          <p className="pl-[25px] text-base font-light">
            <span className="font-semibold">Population: </span>
            <span>{population}</span>
          </p>
          <p className="pl-[25px] text-base  font-light">
            <span className="font-semibold">Region: </span>
            <span>{region}</span>
          </p>
          <p className="pl-[25px] text-base  font-light">
            <span className="font-semibold">Capital: </span>
            <span>{capital}</span>
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Card;
