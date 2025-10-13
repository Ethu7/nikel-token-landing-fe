"use client";

import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend, ChartData } from "chart.js";

// Register required components
Chart.register(ArcElement, Tooltip, Legend);

export default function CustomPieChart({ data }: { data: ChartData<any> }) {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          font: {
            size: 20,
          },
          color: "#ECECEC",
        },
      },
      tooltip: {
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        titleFont: { size: 20, weight: "bold" },
        bodyFont: { size: 16 },
        displayColors: false,
      },
    },
    animation: {
      animateRotate: true,
      animateScale: true,
    },
  } as any;
  return <Doughnut data={data} options={options} />;
}
