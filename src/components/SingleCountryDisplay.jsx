import React, { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useParams } from "react-router-dom";

const SingleCountryDisplay = ({ data }) => {
  const [newData, setnewData] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchCountryData = async () => {
      try {
        const res = await fetch(`https://restcountries.com/v3.1/name/${id}`);
        const data = await res.json();
        setnewData(data[0]);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCountryData();
  }, []);

  return (
    <div className="bg-white mx-[40px] sm:flex sm:justify-between sm:w-[100%] sm:mx-0 sm:px-[40px] sm:h-[40vh]">
      {/* Image */}
      <div className="h-[100%] sm:w-[50%] sm:h-[45vh]">
        {newData && newData.flags && newData.flags.png ? (
          <img src={newData.flags.png} alt="" className="w-[100%] h-[100%]" />
        ) : (
          ""
        )}
      </div>
      {/* container */}
      <div
        className="sm:w-[45%] sm:flex sm:flex-col text-start sm:my-[2px] sm:h-auto"
        style={{ alignSelf: "center" }}
      >
        <div className="mt-[60px] sm:my-[20px] sm:mt-0">
          <p className="font-extrabold text-5xl sm:text-4xl">
            {newData && newData.name && newData.name.common
              ? newData.name.common
              : "NA"}
          </p>
        </div>
        <div className="sm:flex">
          <div className="mt-[45px] sm:flex-grow sm:mt-0">
            <p className="text-2xl font-light sm:text-base">
              <span className="font-normal">Native Name: </span>
              <span>
                {newData &&
                newData.name &&
                newData.name.nativeName &&
                newData.name.nativeName.eng
                  ? newData.name.nativeName.eng.common
                  : "NA"}
              </span>
            </p>
            <p className="text-2xl font-light mt-[25px] sm:mt-[10px] sm:text-base">
              <span className="font-normal">Population: </span>
              <span>
                {newData && newData.population ? newData.population : ""}
              </span>
            </p>
            <p className="text-2xl font-light mt-[25px] sm:mt-[10px] sm:text-base">
              <span className="font-normal">Region: </span>
              <span>{newData && newData.region ? newData.region : ""}</span>
            </p>
            <p className="text-2xl font-light mt-[25px] sm:mt-[10px] sm:text-base">
              <span className="font-normal">Sub Region: </span>
              <span>
                {newData && newData.subregion ? newData.subregion : ""}
              </span>
            </p>
            <p className="text-2xl font-light mt-[25px] sm:mt-[10px] sm:text-base">
              <span className="font-normal">Capital: </span>
              <span>
                {newData && newData.capital && newData.capital[0]
                  ? newData.capital[0]
                  : ""}
              </span>
            </p>
          </div>

          <div className="mt-[50px] sm:w-auto sm:mt-0">
            <p className="text-2xl font-light sm:text-base">
              <span className="font-normal">Top Level Domain: </span>
              <span>
                {newData && newData.tld && newData.tld[0] ? newData.tld[0] : ""}
              </span>
            </p>
            <p className="text-2xl font-light mt-[25px] sm:mt-[10px] sm:text-base">
              <span className="font-normal">Currencies: </span>
              <span>
                {newData && newData.currencies
                  ? Object.values(newData.currencies).map(
                      (currency) => currency.name
                    )
                  : ""}
              </span>
            </p>
            <p className="text-2xl font-light mt-[25px] sm:mt-[10px] sm:text-base">
              <span className="font-normal">Languages: </span>
              <span>
                {newData && newData.languages
                  ? Object.values(newData.languages).join(", ")
                  : ""}
              </span>
            </p>
          </div>
        </div>
        <div className="sm:pt-[20px] sm:flex sm:items-center">
          <p className="text-2xl font-light mt-[45px] sm:mt-0 sm:text-base sm:w-[20%]">
            <span className="font-normal">Border Countries: </span>
          </p>
          <div className="w-[100%] mt-[25px] sm:mt-0 flex flex-wrap justify-start">
            {
              newData && newData.borders
                ? newData.borders.map((border, index) => (
                    <button
                      key={index}
                      className="w-[23%] bg-pink-300 py-[12px] rounded-md m-1"
                    >
                      {border}
                    </button>
                  ))
                : "" // <p>NA</p>
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCountryDisplay;
