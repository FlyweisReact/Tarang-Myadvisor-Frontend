/** @format */

import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import DashboardLayout from "../../Layout/UserDashboardLayout/DashboardLayout";
import { getApi } from "../../Repository/Api";
import endPoints from "../../Repository/apiConfig";

const Analysis = () => {
  const [report, setReport] = useState({
    data: {
      usersReport: [],
      applicationCounts: [],
      offerCounts: [],
    },
  });

  useEffect(() => {
    getApi(endPoints.adwizor.getReports, {
      setResponse: setReport,
    });
  }, []);


  const chartOptions = {
    series: [
      {
        name: "Student",
        data: report.data.usersReport.map((i) => i.count),
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
        categories: report.data.usersReport.map((i) => i.month),
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
  };

  const applicationOptions = {
    series: [
      {
        name: "Applications",
        data: report.data.applicationCounts.map((i) => i.count),
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
        categories: report.data.applicationCounts.map((i) => i.month),
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
        text: "Application Report",
        floating: true,
        offsetY: 480,
        align: "center",
        style: {
          color: "#444",
        },
      },
    },
  };

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
      <div className="boxShadow-container margin-div">
        <div>
          <div id="chart">
            <ReactApexChart
              options={applicationOptions.options}
              series={applicationOptions.series}
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

export default DashboardLayout(Analysis);
