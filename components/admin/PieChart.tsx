"use client";

import dynamic from "next/dynamic";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

export const PieChart = () => {
  const options = {
    labels: ["Desktop", "Mobile", "Tablet"],
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    colors: ["#1C3FB7", "#8b5cf6", "#f59e0b"],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  };
  const series = [65, 20, 15];
  return (
    <ReactApexChart options={options as any} series={series} type="donut" />
  );
};
