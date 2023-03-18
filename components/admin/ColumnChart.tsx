"use client";

import dynamic from "next/dynamic";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

export const ColumnChart = () => {
  const options = {
    chart: {
        foreColor: '#fff',
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "55%",
        endingShape: "rounded",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
    //   colors: ["transparent"],
    },
    xaxis: {
      categories: [
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
      ],
    },
    yaxis: {
      title: {
        text: "$ (thousands)",
      },
    },
    fill: {
      opacity: 1,
    },
  };
  const series = [
    {
      name: "This year",
      data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
    },
    {
      name: "Last year",
      data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
    },
  ];
  return <ReactApexChart options={options as any} series={series} type="bar" />;
};
