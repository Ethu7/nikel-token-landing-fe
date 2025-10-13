"use client";

import { useState } from "react";
import TeamMemberTab from "./team-member-tab.component";
import Image from "next/image";
import SectionContainer from "@/components/common/section-container.component";
import CustomHeader1 from "@/components/common/custom-header-1.component";

export default function Team() {
  const teamMemberDataList = [
    {
      id: 0,
      imgSrc: "/about-us/team/safi.jpg",
      name: "Safi Qurashi",
      title: "Chairman",
    },
    {
      id: 1,
      imgSrc: "/about-us/team/regine.jpg",
      name: "Regine Labrosse",
      title: "Managing Director",
    },
    {
      id: 3,
      imgSrc: "/about-us/team/elliot.jpg",
      name: "Elliot Bachmann",
      title: "Chief Strategy Officer and Treasurer",
    },
    {
      id: 7,
      imgSrc: "/about-us/team/lawyers.png",
      name: "Lawyers",
      title: "Saracens Solicitors",
    },
  ];

  const [selectedTeamMember, setSelectedTeamMember] = useState(
    teamMemberDataList[0]
  );

  let selectedTeamMemberDescription = <p></p>;
  switch (selectedTeamMember.id) {
    case 0:
      selectedTeamMemberDescription = (
        <p>
          Safi Qurashi, the Founder and Chairman, is the visionary behind the
          company. With over 27 years of entrepreneurial expertise, Safi is the
          driving force, bringing creativity and business acumen to the table.
          <br />
          <br />
          His corporate background in sales, marketing, and advertising, coupled
          with notable achievements such as launching one of the UK&apos;s first
          internet cafes, a thriving property company in Dubai, and a prominent
          armoured vehicle manufacturing venture in the UAE, solidify his
          reputation as an accomplished leader. Safi&apos;s strategic guidance
          propels the organization towards growth and innovation.
        </p>
      );
      break;
    case 1:
      selectedTeamMemberDescription = (
        <p>
          Regine Labrosse holds a pivotal role as a shareholder and the esteemed
          Managing Director of XCDM, where she serves as the driving force
          behind operational excellence. With an extensive background in
          Branding, Licensing, Patenting, Partnership, and Innovation
          management, Regine brings unparalleled industry expertise to the
          table.
          <br />
          <br />
          Her illustrious career spans over three decades, during which she held
          senior management positions with renowned entities such as Disney,
          Global Brand Group headquartered in NYC and CAA. Notably, Regine has
          collaborated with global powerhouses like Mercedes Benz, Jeep,
          Netflix, Michelin, Coca Cola, Sony, and Paramount Pictures, further
          augmenting her wealth of knowledge and valuable connections.
          <br />
          <br />
          Regine&apos;s profound understanding of brand extension strategies
          throughout Europe positions her as a true visionary in the field. As a
          proven entrepreneur and accomplished managing director, she excels in
          devising comprehensive strategies and adeptly implementing them to
          achieve organizational goals.
          <br />
          <br />
          With Regine Labrosse spearheading XCDM&apos;s leadership team, the
          company benefits from her exceptional management acumen, strategic
          acuity, and a profound understanding of the intricacies involved in
          building successful enterprises.
        </p>
      );
      break;
    case 2:
      selectedTeamMemberDescription = (
        <p>
          Samandar Tursunaliyev stands at the forefront of innovation as an
          esteemed entrepreneur and co-founder of numerous ventures over the
          past five years. His expertise spans technology and operational
          management, underpinned by a profound grasp of cutting-edge
          technologies essential for pioneering new and innovative business
          paradigms in the Web 3.0 era.
          <br />
          <br />
          Renowned for his work and success, Samandar continues to leave an
          indelible mark on the tech industry through his significant
          contributions and leadership. His role in sculpting the future of
          technology not only reflects his commitment to innovative solutions
          but also solidifies his reputation as a pioneer in the digital age
        </p>
      );
      break;
    case 3:
      selectedTeamMemberDescription = (
        <p>
          Elliott Bachmann, a director of XCDM, is a distinguished professional
          renowned for his exceptional operational and financial management
          acumen. With a career spanning over two decades, Elliott has amassed
          extensive expertise in diverse areas including Fixed Income, Risk
          Management, Fintech, and Compliance.
          <br />
          <br />
          His wealth of knowledge and experience empowers the company to not
          only embrace emerging technologies but also ensure their seamless
          integration within a secure operational framework that adheres to the
          most stringent standards. Elliott&apos;s strategic guidance and
          meticulous attention to detail enable XCDM to navigate the evolving
          landscape of technological advancements while maintaining the utmost
          commitment to security and operational excellence.
        </p>
      );
      break;
    case 4:
      selectedTeamMemberDescription = (
        <p>
          Dr. Kemal Chaudhri, a seasoned professional with more than four
          decades of distinguished proficiency in the medical and biotechnology
          sectors, serves as a director and shareholder.
          <br />
          <br />
          His extensive wealth of knowledge and expertise encompasses
          educational and research development frameworks, as well as
          establishing global connections with institutional investors, high net
          worth individuals, and family offices.
          <br />
          <br />
          Dr. Chaudhri's exceptional ability to engage in effective
          communication worldwide expedites the team's efforts, reducing both
          time and costs involved in accomplishing tasks.
        </p>
      );
      break;
    case 5:
      selectedTeamMemberDescription = (
        <p>
          Avazbek Sotvoldiev is a distinguished engineer with a fervent passion
          for programming, specializing in the art of crafting clean code,
          developing intricate architectures, and dynamic coding practices. His
          relentless drive and profound knowledge of cutting-edge technologies
          underscore his continuous pursuit of innovative methods to deliver
          complex solutions, establishing him as an invaluable asset to the
          team.
          <br />
          <br />
          With a versatile background spanning multiple industries—including
          Retail Platforms, Finance Management, Customer Service Solutions,
          AI-Powered Solutions, Media, Animation, and Educational
          Applications—Avazbek's breadth of experience has equipped him with a
          unique blend of skills. His expertise not only in software engineering
          but also in strategic problem-solving and cross-disciplinary
          collaboration positions him as a pivotal leader in the quest for the
          next groundbreaking solution.
          <br />
          <br />
          Avazbek's ability to navigate and integrate diverse technological
          landscapes, combined with his commitment to excellence and innovation,
          makes him a key contributor to any project. His track record of
          success in developing and implementing sophisticated solutions
          reflects his dedication to not just meeting but exceeding the evolving
          needs of the digital world.
        </p>
      );
      break;
    case 6:
      selectedTeamMemberDescription = (
        <p>
          Asror Nematov is a distinguished front-end developer, celebrated for
          his unwavering commitment to crafting user-centric digital
          experiences. His expertise lies in the art of bringing dynamic
          web-based applications to life, focusing on seamless functionality and
          engaging user interfaces. With a deep-seated passion for technology
          and a keen eye for design, Asror excels in transforming complex
          project requirements into intuitive and aesthetically pleasing web
          solutions.
          <br />
          <br />
          His profound understanding of modern development methodologies enables
          him to effectively manage complex, data-driven projects, ensuring
          optimal performance and innovation. Asror's proficiency in state
          management techniques further allows him to create highly responsive
          and interactive platforms, enhancing user satisfaction and engagement.
        </p>
      );
      break;
    case 7:
      selectedTeamMemberDescription = (
        <p>
          Saracens Solicitors are our legal advisors, led by the senior partner
          Fraz Butt. He has decades of experience in commercial law and a host
          of crypto projects. The firm covers a range of services that will help
          to support the NKL1 project in aspects such as regulation but also
          provide guidance on the legal framework for our partnerships, patents,
          intellectual property, blockchain and compliance.
        </p>
      );
      break;
    case 8:
      selectedTeamMemberDescription = (
        <p>
          Cubed Consultancy are our accountants led by the distinguished Mark
          Munnelly. He brings years of experience and will together with his
          team support the NKL1 project with financial management services.
          Alongside his team he has worked with a plethora of tech platforms /
          crypto projects and understands the complexities of an evolving
          business that will prove invaluable to us as we grow.
        </p>
      );
      break;
  }

  return (
    <SectionContainer className="w-full">
      <CustomHeader1>Our Team</CustomHeader1>
      <div className="w-full flex flex-col sm:flex-row gap-lg sm:gap-xl md:p-2xl max-w-[1400px]">
        <div className="flex-1 overflow-x-auto flex flex-row sm:flex-col gap-md">
          {teamMemberDataList.map((teamMember, index) => (
            <TeamMemberTab
              key={index}
              imgSrc={teamMember.imgSrc}
              name={teamMember.name}
              title={teamMember.title}
              selected={selectedTeamMember.id === teamMember.id}
              onClick={() => setSelectedTeamMember(teamMember)}
            />
          ))}
        </div>
        <div className="flex-1 flex flex-col gap-md text-onBackgroundSecondary">
          <div className="flex flex-wrap items-center gap-md sm:gap-lg">
            <Image
              className="object-cover min-h-[100px] h-[100px] min-w-[100px] w-[100px] sm:min-h-[150px] sm:h-[150px] sm:min-w-[150px] sm:w-[150px] rounded-full"
              src={selectedTeamMember.imgSrc}
              width={320}
              height={320}
              alt={"team_member"}
            />
            <h2 className="flex-1 text-3xl sm:text-5xl font-medium text-onBackground">
              {selectedTeamMember.name}
            </h2>
          </div>

          {selectedTeamMemberDescription}
        </div>
      </div>
    </SectionContainer>
  );
}
