"use client";

import GoogleAddressSearch from "@/app/_components/GoogleAddressSearch";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";

const page = () => {
  const [selectedAddress, setSelectedAddress] = useState();
  const [coordinates, setCoordinates] = useState();

  const nextHandler = () => {
    console.log(selectedAddress, coordinates);
  };
  return (
    <div className="mt-10 md:mx-56 lg:mx-96">
      <div className="p-10 flex flex-col gap-2 items-center justify-center">
        <h2 className="font-bold text-2xl">Add New Listing</h2>

        <div className="p-10 w-full px-10 lg:px-36 rounded-lg border shadow-md flex flex-col gap-5">
          <h2 className="font-medium text-gray-500">
            Enter Address which you want to list
          </h2>
          <GoogleAddressSearch
            setSelectedAddress={setSelectedAddress}
            setCoordinates={setCoordinates}
          />
          <Button onClick={nextHandler}>Next</Button>
        </div>
      </div>
    </div>
  );
};

export default page;
