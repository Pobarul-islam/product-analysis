import {} from "bootstrap";
import React, { useState } from "react";
import { Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";

const DashBoard = () => {
  const data = [
    {
      name: "January",
      Investment: 4000,
      Price: 24400,
      Profit: 2400,
    },
    {
      name: "February",
      Price: 3000,
      Investment: 11398,
      Profit: 5210,
    },
    {
      name: "March",
      Price: 300,
      Investment: 9800,
      Profit: 2690,
    },
    {
      name: "April",
      Price: 80,
      Investment: 396,
      Profit: 700,
    },
    {
      name: "May",
      Price: 940,
      Investment: 4400,
      Profit: 181,
    },
    {
      name: "June",
      Price: 2390,
      Investment: 38600,
      Profit: 2500,
    },
    {
      name: "July",
      Price: 1000,
      Investment: 5000,
      Profit: 500,
    },
  ];

    return (
      
    <LineChart width={500} height={500} data={data}>
      <Line dataKey={"Price"}></Line>
      <Line dataKey={"name"}></Line>
      <Line dataKey={"Investment"}></Line>
      <Line dataKey={"Profit"}></Line>
      <XAxis dataKey={"name"}></XAxis>
      <Tooltip></Tooltip>
      <YAxis></YAxis>
    </LineChart>
  );
};


export default DashBoard;
