"use client";

import { MapPin } from "lucide-react";
import React from "react";
import GooglePlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-google-places-autocomplete";

const GoogleAddressSearch = ({ setSelectedAddress, setCoordinates }) => {
  return (
    <div className="flex items-center w-full">
      <MapPin className="h-10 w-10 p-2 rounded-l-lg text-primary bg-purple-100" />
      <GooglePlacesAutocomplete
        apiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY}
        selectProps={{
          placeholder: "Search Property Address",
          isClearable: true,
          className: "w-full",
          onChange: (place) => {
            setSelectedAddress(place);
            geocodeByAddress(place.label)
              .then((res) => getLatLng(res[0]))
              .then(({ lat, lng }) => {
                setCoordinates({ lat, lng });
              });
          },
        }}
      />
    </div>
  );
};

export default GoogleAddressSearch;
