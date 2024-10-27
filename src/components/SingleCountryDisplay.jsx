import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Spinner from "./Spinner";
import NotFoundPage from "../Pages/NotFoundPage";
import BackButton from "./BackButton";
import { fetchSingleCountryData } from "./util/UtilityFunctions";

const SingleCountryDisplay = ({ data }) => {
  const [singleCountryData, setSingleCountryData] = useState(null);
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  let updatedData = {};

  useEffect(() => {
    fetchSingleCountryData(data, id, setSingleCountryData, setLoading);
  }, [data]);

  if (!singleCountryData) {
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
          <div className="sm:w-[50%] sm:h-[100%]">
            {singleCountryData &&
            singleCountryData.flags &&
            singleCountryData.flags.png ? (
              <img
                src={singleCountryData.flags.png}
                alt=""
                className="w-[100%] sm:h-[100%] h-[300px]"
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
                {singleCountryData.name.common
                  ? singleCountryData.name.common
                  : ""}
              </p>
            </div>
            <div className="sm:flex">
              <div className="mt-[45px] sm:flex-grow sm:mt-0">
                <p className="text-2xl font-light sm:text-base">
                  <span className="font-normal">Native Name: </span>
                  <span>
                    {singleCountryData.name.nativeName
                      ? getNativeName(singleCountryData.name.nativeName)
                      : "NA"}
                  </span>
                </p>
                <p className="text-2xl font-light mt-[25px] sm:mt-[10px] sm:text-base">
                  <span className="font-normal">Population: </span>
                  <span>
                    {singleCountryData.population
                      ? singleCountryData.population
                      : ""}
                  </span>
                </p>
                <p className="text-2xl font-light mt-[25px] sm:mt-[10px] sm:text-base">
                  <span className="font-normal">Region: </span>
                  <span>
                    {singleCountryData.region ? singleCountryData.region : ""}
                  </span>
                </p>
                <p className="text-2xl font-light mt-[25px] sm:mt-[10px] sm:text-base">
                  <span className="font-normal">Sub Region: </span>
                  <span>
                    {singleCountryData.subregion
                      ? singleCountryData.subregion
                      : ""}
                  </span>
                </p>
                <p className="text-2xl font-light mt-[25px] sm:mt-[10px] sm:text-base">
                  <span className="font-normal">Capital: </span>
                  <span>
                    {singleCountryData.capital[0]
                      ? singleCountryData.capital[0]
                      : ""}
                  </span>
                </p>
              </div>

              <div className="mt-[50px] sm:w-auto sm:mt-0">
                <p className="text-2xl font-light sm:text-base">
                  <span className="font-normal">Top Level Domain: </span>
                  <span>
                    {singleCountryData.tld[0] ? singleCountryData.tld[0] : ""}
                  </span>
                </p>
                <p className="text-2xl font-light mt-[25px] sm:mt-[10px] sm:text-base">
                  <span className="font-normal">Currencies: </span>
                  <span>
                    {singleCountryData.currencies
                      ? Object.values(singleCountryData.currencies)
                          .map((currency) => currency.name)
                          .join(", ")
                      : ""}
                  </span>
                </p>
                <p className="text-2xl font-light mt-[25px] sm:mt-[10px] sm:text-base">
                  <span className="font-normal">Languages: </span>
                  <span>
                    {singleCountryData.languages
                      ? Object.values(singleCountryData.languages).join(", ")
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
                {singleCountryData.borders &&
                singleCountryData.borders.length > 0 ? (
                  singleCountryData.borders.map((border, index) => {
                    const filteredItem = data.find(
                      (item) => item.cca3 === border
                    );
                    return (
                      <button
                        key={index}
                        className="w-auto px-1 drop-shadow-md bg-lm-elements-dm-text py-[12px] rounded-md m-1 dark:bg-dm-elements bg-lm-elements-dm-text"
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
