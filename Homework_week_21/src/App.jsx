import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import "./index.css";

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

export default function App() {
  const data = {
    labels: [
      "Гладить кота",
      "Играть в Playstation",
      "Смотреть мемы",
      "Кодить (иногда)",
      "Спать",
    ],
    datasets: [
      {
        label: "Мой день",
        data: [30, 25, 20, 15, 10],
        backgroundColor: [
          "#FCA5A5",
          "#FCD34D",
          "#A5F3FC",
          "#C4B5FD",
          "#FDE68A",
        ],
        borderColor: "#fff",
        borderWidth: 2,
        hoverOffset: 15,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: true,
        position: "top",
        labels: {
          color: "#4B5563",
          padding: 20,
          font: {
            size: 14,
          },
        },
      },
      tooltip: {
        enabled: true,
      },
      datalabels: {
        formatter: (value) => `${value}%`,
        color: "#374151",
        font: {
          weight: "bold",
          size: 16,
        },
      },
    },
  };

  return (
    <div className="app-container">
      <h2 className="app-title">Мой день</h2>
      <div className="chart-wrapper">
        <Pie data={data} options={options} />
      </div>
      <p className="app-description">
        Где-то между этого всего затесалась еще и работа, но это не точно!
      </p>
    </div>
  );
}
