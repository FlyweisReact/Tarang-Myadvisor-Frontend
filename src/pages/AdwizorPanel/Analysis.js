import React, { useState } from "react";
import AdwizorLayout from "../../Layout/AdwizorPanelLayout/AdwizorLayout";
import ReactApexChart from "react-apexcharts";

const Analysis = () => {
  const [chartOptions, setChartOptions] = useState({
    series: [
      {
        name: "Student",
        data: [10, 3.1, 4.0, 10.1, 4.0, 3.6, 3.2, 2.3, 1.4, 0.8, 0.5, 0.2],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "bar",
      },
      plotOptions: {
        bar: {
          borderRadius: 10,
          dataLabels: {
            position: "top", // top, center, bottom
          },
        },
      },
      dataLabels: {
        enabled: true,
        formatter: function (val) {
          return val;
        },
        offsetY: -20,
        style: {
          fontSize: "12px",
          colors: ["#304758"],
        },
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
        position: "top",
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        crosshairs: {
          fill: {
            type: "gradient",
            gradient: {
              colorFrom: "#D8E3F0",
              colorTo: "#BED1E6",
              stops: [0, 100],
              opacityFrom: 0.4,
              opacityTo: 0.5,
            },
          },
        },
        tooltip: {
          enabled: true,
        },
      },
      yaxis: {
        max: 100,
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        labels: {
          show: true,
          formatter: function (val) {
            return val;
          },
        },
      },
      title: {
        text: "Assigned Student Report",
        floating: true,
        offsetY: 480,
        align: "center",
        style: {
          color: "#444",
        },
      },
    },
  });

  const reportData = {
     usersReport : [
      {
        month: "Jan",
        count: 10,
      },
      {
        month: "Feb",
        count: 0,
      },
      {
        month: "Mar",
        count: 20,
      },
      {
        month: "Apr",
        count: 40,
      },
      {
        month: "May",
        count: 50,
      },
      {
        month: "Jun",
        count: 60,
      },
      {
        month: "Jul",
        count: 0,
      },
      {
        month: "Aug",
        count: 90,
      },
      {
        month: "Sep",
        count: 0,
      },
      {
        month: "Oct",
        count: 50,
      },
      {
        month: "Nov",
        count: 40,
      },
      {
        month: "Dec",
        count: 0,
      },
    ],
}

  return (
    <section className="adwizor-panel">
      <div className="section-heading">
        <p className="title">Analysis of Application</p>
      </div>

      <div className="boxShadow-container margin-div">
        <div>
          <div id="chart">
            <ReactApexChart
              options={chartOptions.options}
              series={chartOptions.series}
              type="bar"
              height={500}
            />
          </div>
          <div id="html-dist"></div>
        </div>
      </div>
    </section>
  );
};

export default AdwizorLayout(Analysis);
