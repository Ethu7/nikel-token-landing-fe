import CustomPieChart from "@/components/common/custom-pie-chart.component";
import SectionContainer from "@/components/common/section-container.component";

export default function Graph() {
  const tokenAllocationData = {
    labels: [
      "Initial Investors (SAFT)",
      "Private Investors",
      "Future Fundraising Rounds",
      "Founding Team",
      "NTC Rewards & Incentives Pool",
      "NTC Staking Pool",
      "NTC Marketing & Operational",
    ],
    datasets: [
      {
        data: [150, 50, 300, 200, 200, 70, 30],
        backgroundColor: [
          "#596ec8",
          "#a0df7e",
          "#f6ca55",
          "#f26563",
          "#6fc0e5",
          "#3ea173",
          "#ca34d0",
        ],
        hoverBackgroundColor: [
          "#596ec8",
          "#a0df7e",
          "#f6ca55",
          "#f26563",
          "#6fc0e5",
          "#3ea173",
          "#ca34d0",
        ],
        borderWidth: 0, // Remove borders
      },
    ],
  };

  const totalAmount = tokenAllocationData.datasets[0].data.reduce(
    (partialSum: number, value: number) => partialSum + value
  );
  const tableRows = [];
  for (let i = 0; i < tokenAllocationData.labels.length; i++) {
    const color = tokenAllocationData.datasets[0].backgroundColor[i];
    tableRows.push(
      <tr key={i}>
        <td className="text-start py-2 px-4 border-[1px] border-onBackground">
          {tokenAllocationData.labels[i]}
        </td>
        <td className="text-start py-2 px-4 border-[1px] border-onBackground">{`${(
          tokenAllocationData.datasets[0].data[i] / totalAmount
        ).toFixed(2)}%`}</td>
        <td className="text-start py-2 px-4 border-[1px] border-onBackground">
          {tokenAllocationData.datasets[0].data[i].toLocaleString("en-US", {
            minimumFractionDigits: 0,
          })}
          M
        </td>
        <td className="text-start py-2 px-4 border-[1px] border-onBackground">
          <div
            style={{ backgroundColor: color }}
            className="m-auto w-[10px] h-[10px]"
          />
        </td>
      </tr>
    );
  }

  return (
    <SectionContainer className="w-full">
      <div className="w-full overflow-x-auto">
        <table className="border-[2px] mx-auto border-onBackground text-sm md:text-xl">
          <thead>
            <tr>
              <th className="text-start py-2 px-4 border-[2px] border-onBackground text-2xl font-bebasNeue font-thin">
                Name
              </th>
              <th className="text-start py-2 px-4 border-[2px] border-onBackground text-2xl font-bebasNeue font-thin">
                Percentage
              </th>
              <th className="text-start py-2 px-4 border-[2px] border-onBackground text-2xl font-bebasNeue font-thin">
                Amount
              </th>
              <th className="text-start py-2 px-4 border-[2px] border-onBackground text-2xl font-bebasNeue font-thin">
                Color
              </th>
            </tr>
          </thead>
          <tbody>{tableRows}</tbody>
        </table>
      </div>
      <div className="w-[300px] h-[300px] sm:w-[600px] sm:h-[560px]">
        <CustomPieChart data={tokenAllocationData} />
      </div>
    </SectionContainer>
  );
}
