import React, { Component }  from 'react';
import Chart from "react-apexcharts";

export const LineChart=()=>{
    const series = [
        {
          name: "Guests",
          data: [19, 22, 20, 26]
        }
      ];
      const options = {
        xaxis: {
          categories: ["2019-05-01", "2019-05-02", "2019-05-03", "2019-05-04"]
        }
      };
      return <Chart type="line" series={series} options={options} />;
}