//fetch countries data from API
import config from "../../config.js"
async function fetchData(setCountriesData, setCountryData) {
  try {
    let data = await fetch(config.apiUrl);
    let jsonFormat = await data.json();
    setCountriesData(jsonFormat);
    setCountryData(jsonFormat);
  } catch (error) {
    console.log(error);
  }
}

// funstion to display the countries based on the region selected
async function fetchRegionData(
  data,
  selectRegionData,
  setSearchCountryData,
  setSubRegionData,
  setCountryData,
  setRegionData
) {
  let updatedData = data;
  let regionDataSet = new Set();
  let regionData = [];
  try {
    if (selectRegionData !== "" && selectRegionData !== "Filter by Region") {
      updatedData = data.filter((item) => {
        if (item.region === selectRegionData) {
          regionDataSet.add(item.subregion);
          return item;
        }
      });
      regionData = Array.from(regionDataSet);
    }
    setSearchCountryData("");
    setSubRegionData(regionData);
    setCountryData(updatedData);
    setRegionData(updatedData);
  } catch (error) {
    console.log(error);
  }
}

// fetch country nased on the country name entered in search field
async function fetchCountryData(data, searchCountryData, setCountryData) {
  let updatedData = data;
  try {
    if (searchCountryData !== "") {
      updatedData = data.filter((item) => {
        return (
          item.name.common.toLowerCase() === searchCountryData.toLowerCase()
        );
      });
    }

    setCountryData(updatedData);
  } catch (error) {
    console.log(error);
  }
}

// fetch country based on subregion selected
async function fetchSubRegionData(
  data,
  regionData,
  selectSubRegionData,
  setCountryData
) {
  try {
    let updatedData = regionData;

    if (
      selectSubRegionData !== "" &&
      selectSubRegionData !== "Filter by SubRegion"
    ) {
      updatedData = data.filter(
        (item) => item.subregion === selectSubRegionData
      );
    }

    setCountryData(updatedData);
  } catch (error) {
    console.log(error);
  }
}

// sort data based on the area or population
async function sortData(countryData, sortCountry, setCountryData) {
  try {
    let updatedData = countryData;

    if (sortCountry === "area-up") {
      updatedData = updatedData.toSorted((a, b) => a.area - b.area);
    } else if (sortCountry === "area-down") {
      updatedData = updatedData.toSorted((a, b) => b.area - a.area);
    } else if (sortCountry === "population-up") {
      updatedData = updatedData.toSorted((a, b) => a.population - b.population);
    } else if (sortCountry === "population-down") {
      updatedData = updatedData.toSorted((a, b) => b.population - a.population);
    }

    setCountryData(updatedData);
  } catch (error) {
    console.log(error);
  }
}

// fetch country details
async function fetchSingleCountryData(
  data,
  id,
  setSingleCountryData,
  setLoading
) {
  try {
    const updatedData = data.filter((item) => item.name.common === id);
    setSingleCountryData(updatedData[0]);
  } catch (error) {
    console.log(error);
  } finally {
    setLoading(false);
  }
}

export {
  fetchData,
  fetchRegionData,
  fetchCountryData,
  fetchSubRegionData,
  sortData,
  fetchSingleCountryData,
};
