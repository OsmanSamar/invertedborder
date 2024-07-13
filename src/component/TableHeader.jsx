import React, { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

const containerStyle = {
  width: "100%",
  height: "200px",
};

const center = {
  lat: -3.745,
  lng: -38.523,
};

const TableHeader = () => {
  //   const [checkInDate, setCheckInDate] = useState(null);
  //   const [checkOutDate, setCheckOutDate] = useState(null);
  const [priceRange, setPriceRange] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [searchLocation, setSearchLocation] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    // Handle search logic
  };

  return (
    <>
      <div className="p-4 rounded-lg shadow-2xl bg-white -mt-20 relative max-w-3xl lg:mx-auto  mx-10 mb-6  ">
        <form className="max-w-md mx-auto" onSubmit={handleSearch}>
          <div className="relative  ">
            <div className="absolute inset-y-0 left-0 flex items-center bottom-6 pl-3  pointer-events-none">
              <FaLocationDot size={18} className="text-gray-500" />
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-orange-600 focus:border-orange-600 "
              placeholder="Search destinations"
              value={searchLocation}
              onChange={(e) => setSearchLocation(e.target.value)}
              required
            />
            <button
              type="submit"
              className="text-white absolute right-2.5 bottom-8 bg-orange-600 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-6 py-2  "
            >
              Search
            </button>
              
          </div>

          {/* <div classNameName="flex flex-col md:flex-row  justify-between space-y-4 md:space-y-0 md:space-x-4  mb-4">
            <div classNameName="flex flex-col">
              <label htmlFor="check-in" classNameName="text-gray-700 mb-2">
                Check-in
              </label>
              <DatePicker
                id="check-in"
                selected={checkInDate}
                onChange={(date) => setCheckInDate(date)}
                classNameName="block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-orange-600 focus:border-orange-600 "
                placeholderText="Select check-in date"
              />
            </div>
            <div classNameName="flex flex-col">
              <label htmlFor="check-out" classNameName="text-gray-700 mb-2">
                Check-out
              </label>
              <DatePicker
                id="check-out"
                selected={checkOutDate}
                onChange={(date) => setCheckOutDate(date)}
                classNameName="block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-orange-600 focus:border-orange-600 "
                placeholderText="Select check-out date"
              />
            </div>
          </div> */}
          <div className="flex flex-col md:flex-row justify-between space-y-4 md:space-y-0 md:space-x-4 mb-4">
            {/* Price Range */}
            <div className="flex flex-col">
              <label htmlFor="price-range" className="text-gray-700 mb-2">
                Price Range
              </label>
              <div className="relative  rounded-lg shadow-sm">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <span className="text-gray-500 sm:text-sm">$</span>
                </div>
                <input
                  id="price-range"
                  type="text"
                  value={priceRange}
                  onChange={(e) => setPriceRange(e.target.value)}
                  className="block w-full sm:text-sm sm:leading-6 text-gray-900 
                  py-1.5 pl-7 pr-15
                  border border-gray-300 rounded-lg bg-gray-50 focus:ring-orange-600 focus:border-orange-600"
                  placeholder="0.00"
                />

                <div className="absolute inset-y-0 right-0 flex items-center">
                  <label htmlFor="currency" className="sr-only">
                    Currency
                  </label>
                  <select
                    id="currency"
                    name="currency"
                    className="h-full rounded-lg border-0 bg-transparent py-0 pl-2 pr-1.5 text-gray-700 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm"
                  >
                    <option>USD</option>
                    <option>CAD</option>
                    <option>EUR</option>
                  </select>
                </div>
              </div>
            </div>
            {/* End Price Range */}
            {/*  Property Type */}
            <div className="flex flex-col">
              <label htmlFor="property-type" className="text-gray-700 mb-2">
                Property Type
              </label>
              <div className="relative  rounded-lg shadow-sm">
                <div class=" relative w-full">
                  <select
                    id="property-type"
                    aria-describedby="helper-text-explanation"
                    className="block w-full lg:w-[190px] h-[38px] sm:text-sm sm:leading-6 text-gray-900 
                  py-1.5 pl-3 pr-15
                  border border-gray-300 rounded-lg bg-gray-50 focus:ring-orange-600 focus:border-orange-600
                  focus:ring-2 focus:ring-inset
                  
                  
                  "
                  >
                    <option selected value="Villa">
                      Villa
                    </option>
                    <option value="Family house">Family house</option>
                    <option value="Apartment">Apartment</option>
                    <option value="Luxe House">Luxe House</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </form>

        <LoadScript googleMapsApiKey="GOOGLE_MAPS_API_KEY">
          {/* Visit the Google Cloud Console. */}
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
          >
            <Marker position={center} />
          </GoogleMap>
        </LoadScript>
      </div>
    </>
  );
};

export default TableHeader;
