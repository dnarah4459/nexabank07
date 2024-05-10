import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
ChartJS.register(ArcElement, Tooltip, Legend);
import React from "react";
import { accountsDummyData } from "@/app/(root)/dummyData";

declare interface DoughnutChartProps {
  accounts: Account[];
}

const finalData = {
  datasets: [
    {
      label: 'Banks',
      data: [1250, 2500, 3750],
      backgroundColor: ["#8B8C7A", "#F54021", "#B44C43", "#D36E70"],
    },
  ],
  labels: ['Bank 1', 'Bank 2', 'Bank 3']
};

const DoughnutChart = ({ accounts }: DoughnutChartProps) => {
  return (
    <div style={{ width: '400px', height: '400px' }}>
      <Doughnut data={finalData} options={{
        cutout: '60%',
        aspectRatio: 1, // This makes the chart perfectly square
        plugins: {
          legend: {
            display: false
          }
        }
      }}/>
    </div>
  );
};

export default DoughnutChart;
