import SectionContainer from "@/components/common/section-container.component";
import RoadmapItem from "./roadmap-item.component";

export default function Roadmap() {
  const roadmapData = [
    {
      year: 2022,
      color: "#aeff33",
      q1: [
        "Concept Creation and Business Plan Drafted",
        "Concept Creation and Business Plan Drafted",
      ],
      q2: ["Business plan refined", "Concept development started"],
      q3: [
        "Technical Architecture and Solution Launch",
        "Business Plan Creation",
        "First Whitepaper Created",
        "First Website Launched",
      ],
      q4: [
        "Hire of Marketing Consultants",
        "Hire of Technical Consultants",
        "Finance, Legal, Accounting Structures Developed",
      ],
    },
    {
      year: 2023,
      color: "#ff451a",
      q1: [
        "Review of Business Roadmap and Adjustments Made",
        "Directors Appointed",
        "Token Development Evaluation",
      ],
      q2: [
        "Finance Advisor Appointed",
        "CTO and Tech Staff Hired Full-time",
        "Digital Wallet Development Commenced",
        "Tech Platform Architecture Commenced",
      ],
      q3: [
        "Phase 1 of Tech Platform Build Begins",
        "Short Listing of Innovation Begins",
      ],
      q4: ["3 Innovations Short Listed"],
    },
    {
      year: 2024,
      color: "#fea526",
      q1: [
        "Website Launch",
        "Mauritius Company Registration Begins and Pre Approval Obtained",
        "Technology Platform Phase 2 Begins",
        "Social Media Marketing Team Appointed",
      ],
      q2: [
        "Public Sale Planned",
        "Exchange Listing Plan",
        "Marketing Begins",
        "Launch of Platform Beta Version",
      ],
      q3: [
        "Malaga Tech office Opening Planned",
        "Launch of fully Functional Platform",
        "Marketing Begins",
      ],
      q4: ["Development of Short Listed Innovations Begins"],
    },
  ];

  const tableRows = roadmapData.map((yearItem) => (
    <tr key={yearItem.year}>
      <td className="text-start py-2 px-4 border-[1px] border-onBackground">
        <p style={{ color: yearItem.color }} className="font-bold">
          {yearItem.year}
        </p>
      </td>
      <td className="text-start py-2 px-4 border-[1px] border-onBackground">
        {yearItem.q1.map((actionItem) => (
          <RoadmapItem
            key={actionItem}
            text={actionItem}
            color={yearItem.color}
          />
        ))}
      </td>
      <td className="text-start py-2 px-4 border-[1px] border-onBackground">
        {yearItem.q2.map((actionItem) => (
          <RoadmapItem
            key={actionItem}
            text={actionItem}
            color={yearItem.color}
          />
        ))}
      </td>
      <td className="text-start py-2 px-4 border-[1px] border-onBackground">
        {yearItem.q3.map((actionItem) => (
          <RoadmapItem
            key={actionItem}
            text={actionItem}
            color={yearItem.color}
          />
        ))}
      </td>
      <td className="text-start py-2 px-4 border-[1px] border-onBackground">
        {yearItem.q4.map((actionItem) => (
          <RoadmapItem
            key={actionItem}
            text={actionItem}
            color={yearItem.color}
          />
        ))}
      </td>
    </tr>
  ));

  return (
    <SectionContainer className="max-w-[1600px] w-full">
      <div className="w-full overflow-x-auto">
        <table className="border-[2px] mx-auto border-onBackground min-w-0 text-sm md:text-xl">
          <thead>
            <tr>
              <th className="text-start py-2 px-4 border-[2px] border-onBackground text-2xl font-bebasNeue font-thin">
                Year
              </th>
              <th className="text-start py-2 px-4 border-[2px] border-onBackground text-2xl font-bebasNeue font-thin">
                Q1
              </th>
              <th className="text-start py-2 px-4 border-[2px] border-onBackground text-2xl font-bebasNeue font-thin">
                Q2
              </th>
              <th className="text-start py-2 px-4 border-[2px] border-onBackground text-2xl font-bebasNeue font-thin">
                Q3
              </th>
              <th className="text-start py-2 px-4 border-[2px] border-onBackground text-2xl font-bebasNeue font-thin">
                Q4
              </th>
            </tr>
          </thead>
          <tbody>{tableRows}</tbody>
        </table>
      </div>
    </SectionContainer>
  );
}
