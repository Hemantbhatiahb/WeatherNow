import React from "react";
import { formatToLocalTime } from "../service/weatherService";

function TimeAndLocation({ weather: { dt, timezone, name, country } }) {
  return (
    <React.Fragment>
      <div className="flex items-center justify-center my-6">
        <p className="text-white text-xl font-extralight">
          {formatToLocalTime(dt,timezone)}
        </p>
      </div>
      <div className="flex items-center justify-center my-3">
        <p className="text-white text-3xl font-medium">{`${name}, ${country}`}</p>
      </div>
    </React.Fragment>
  );
}

export default TimeAndLocation;
