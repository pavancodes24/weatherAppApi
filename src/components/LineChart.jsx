import React  from 'react';
import Chart from "react-apexcharts";

export const LineChart=({data})=>{
    var today = new Date();
    var todayHour = today.getHours();
    var dailyHours =[];
    for(var i= todayHour; i<=todayHour+12;i++){
      dailyHours.push(i)
    }
    var dailyHoursData= [];
    for(var j=todayHour;j<todayHour+12;j++){
      dailyHoursData.push(Math.round(data[j].temp))
    }
    const series = [
        {
          name: "temp",
          data: dailyHoursData
        }
      ];
      const options = {
        xaxis: {
          categories: dailyHours
        },
        dataLabels:{enabled: false}
      };     
      return <Chart type="area" series={series} options={options}   />;
}