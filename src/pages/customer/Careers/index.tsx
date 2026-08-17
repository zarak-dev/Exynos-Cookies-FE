import React, { useState } from "react";
import { Button, Card, Flex, Tag, Typography, message } from "antd";

import { OPEN_POSITIONS } from "./constants";
import type { JobOpening } from "./types";

import JobApplicationModal from "./components/JobApplicationModal";
import {
  CareersContainer,
  ValueGrid,
  JobCollapse,
  JobMeta,
  JobLabelWrapper,
  JobTitleText,
  JobContentWrapper,
  JobDescriptionText,
} from "./components/styles";
import { StyledTitle } from "../../../components/StyledTitle";
import { PicCenterOutlined } from "@ant-design/icons";

const { Text } = Typography;

const CORE_VALUES = [
  {
    title: "Quality Obsessed",
    description:
      "Every single cookie requires meticulous precision. We don't compromise on the perfect frost swirl or bake consistency.",
  },
  {
    title: "Energetic Culture",
    description:
      "Our kitchens run fast and our energy is contagious. We collaborate tightly and back each other up on every shift.",
  },
  {
    title: "Sweet Growth",
    description:
      "We promote heavily from within. Starting as a baker opens clear developmental channels to management roles.",
  },
];

 const Careers: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState<JobOpening | null>(null);

  const handleOpenModal = (job: JobOpening) => {
    setSelectedJob(job);
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setSelectedJob(null);
  };

  const handleSubmitApplication = () => {
    message.success(
      `Success! Your application for ${selectedJob?.title} has been received.`,
    );
    setIsModalOpen(false);
    setSelectedJob(null);
  };

  const jobItems = OPEN_POSITIONS.map((job) => ({
    key: job.id,
    label: (
      <JobLabelWrapper>
        <JobTitleText>{job.title}</JobTitleText>
        <JobMeta>
          <Tag color="blue">{job.department}</Tag>
          <Tag>{job.location}</Tag>
          <Tag color="purple">{job.type}</Tag>
        </JobMeta>
      </JobLabelWrapper>
    ),
    children: (
      <JobContentWrapper>
        <JobDescriptionText>{job.description}</JobDescriptionText>
        <Button
          type="primary"
          shape="round"
          onClick={() => handleOpenModal(job)}
          icon={<PicCenterOutlined />}
        >
          Apply For Position
        </Button>
      </JobContentWrapper>
    ),
  }));

  return (
    <CareersContainer>
      <Flex align="center" vertical>
        <StyledTitle level={1}>Join the Cookie Crew</StyledTitle>
        <Text>
          Help us bake happiness and bring premium sweet replicas to food
          lovers.
        </Text>
        <Text>Discover your next opportunity below.</Text>
      </Flex>

      <StyledTitle level={2}>Our Core Ingredients</StyledTitle>

      <ValueGrid>
        {CORE_VALUES.map((value) => (
          <Card
            key={value.title}
            title={value.title}
            variant="borderless"
            extra={
              <Tag color="purple" variant="solid">
                And More
              </Tag>
            }
          >
            {value.description}
          </Card>
        ))}
      </ValueGrid>

      <StyledTitle level={2}>Open Positions</StyledTitle>

      <JobCollapse accordion expandIconPlacement="end" items={jobItems} />

      <JobApplicationModal
        open={isModalOpen}
        jobTitle={selectedJob?.title}
        onCancel={handleCancel}
        onSubmit={handleSubmitApplication}
      />
    </CareersContainer>
  );
};

export default Careers;
