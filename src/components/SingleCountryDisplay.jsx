import React, { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useParams } from "react-router-dom";
import Spinner from "./Spinner";
import NotFoundPage from "../Pages/NotFoundPage";
import BackButton from "./BackButton";

const SingleCountryDisplay = ({ data, data2 }) => {
  const [newData, setnewData] = useState(null);
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  let updatedData = {};

  useEffect(() => {
    const fetchCountryData = async () => {
      try {
        let updatedData = data2.filter((item) => {
          if (item.name.common === id) {
            return item;
          }
        });
        console.log(updatedData);
        setnewData(updatedData[0]);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchCountryData();
  }, [data2]);

  if (!newData) {
    return <NotFoundPage />;
  }
  const getNativeName = (nativeName) => {
    return nativeName.eng
      ? nativeName.eng.common
      : Object.values(nativeName)[0].common;
  };

  return (
    <>
      <BackButton />
      {loading ? (
        <Spinner loading={loading} />
      ) : (
        <div className="bg-lm-bg mx-[40px] sm:flex sm:justify-between sm:w-[100%] sm:mx-0 sm:px-[80px] sm:h-[45vh] text-lm-text dark:bg-dm-bg dark:text-white">
          <div className="h-[100%] sm:w-[50%] sm:h-[100%]">
            {newData && newData.flags && newData.flags.png ? (
              <img
                src={newData.flags.png}
                alt=""
                className="w-[100%] h-[100%]"
              />
            ) : (
              ""
            )}
          </div>
          <div
            className="sm:w-[45%] sm:flex sm:flex-col text-start sm:my-[2px] sm:h-auto"
            style={{ alignSelf: "center" }}
          >
            <div className="mt-[60px] sm:my-[20px] sm:mt-0">
              <p className="font-extrabold text-5xl sm:text-4xl">
                {newData && newData.name && newData.name.common
                  ? newData.name.common
                  : ""}
              </p>
            </div>
            <div className="sm:flex">
              <div className="mt-[45px] sm:flex-grow sm:mt-0">
                <p className="text-2xl font-light sm:text-base">
                  <span className="font-normal">Native Name: </span>
                  <span>
                    {newData && newData.name && newData.name.nativeName
                      ? getNativeName(newData.name.nativeName)
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
                    {newData && newData.tld && newData.tld[0]
                      ? newData.tld[0]
                      : ""}
                  </span>
                </p>
                <p className="text-2xl font-light mt-[25px] sm:mt-[10px] sm:text-base">
                  <span className="font-normal">Currencies: </span>
                  <span>
                    {newData && newData.currencies
                      ? Object.values(newData.currencies)
                          .map((currency) => currency.name)
                          .join(", ")
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
              <div className="w-[100%] mt-[25px] sm:mt-0 sm:pl-2 flex flex-wrap justify-start">
                {newData && newData.borders && newData.borders.length > 0 ? (
                  newData.borders.map((border, index) => {
                    const filteredItem = data2.find(
                      (item) => item.cca3 === border
                    );
                    return (
                      <button
                        key={index}
                        className="w-auto px-1 drop-shadow-md bg-pink-300 py-[12px] rounded-md m-1 dark:bg-dm-elements bg-lm-elements-dm-text"
                      >
                        {filteredItem ? filteredItem.name.common : ""}
                      </button>
                    );
                  })
                ) : (
                  <p>No Border Countries</p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SingleCountryDisplay;
