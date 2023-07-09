import React, { useState } from "react";
import InputDate from "./InputDate";
import moment from "moment";
import inputLabelAndId from "../Constants/Constants"; // an array of object [{label:string,id:string}]

import "moment/locale/en-gb"; // Import the locale you prefer

export default function DatePicker() {
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");

  // it will update the toDate whenever year,month,day, hours and minute input value changes
  const handleDurationChange = (e) => {
    const duration = parseInt(e.target.value);
    const calculatedToDate = moment(fromDate).add(duration, e.target.id); //to add value in fromDate

    setToDate(calculatedToDate.format("YYYY-MM-DDTHH:mm"));
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#2575BE",
        width: "50%",
        margin: "auto",
        borderRadius: "20px",
      }}
    >
      <h1 style={{ fontFamily: "nunito", fontWeight: "400", color: "#FFFFFF" }}>
        Date Picker
      </h1>
      <InputDate
        date={fromDate}
        disabled={false}
        setFromDate={setFromDate}
        label="From Date"
      />

      <h3
        id="duration"
        style={{ fontFamily: "nunito", fontWeight: "200", color: "#FFF" }}
      >
        Duration:
      </h3>

      <div
        style={{
          display: "flex",
          gap: "10px",
          margin: "auto",
          marginBottom: "20px",
        }}
      >
        {/** for input of year , months, day, hours and minutes */}
        {inputLabelAndId.map((item, index) => {
          return (
            <div
              key={String(index)}
              style={{ display: "flex", flexDirection: "column" }}
            >
              <label
                htmlFor={item.id}
                style={{
                  fontFamily: "nunito",
                  fontWeight: "200",
                  color: "#FFF",
                }}
              >
                {item.label}
              </label>
              <input
                id={item.id}
                type="text"
                onChange={handleDurationChange}
                style={{ width: "100px" }}
              />
            </div>
          );
        })}
      </div>
      <InputDate disabled={true} date={toDate} label="To Date" />
    </div>
  );
}
