import styled from "styled-components";
import { Flex, Image, Tag, Typography } from "antd";
import { StyledCard } from "../../../components/StyledCard";

export const PageLayout = styled(Flex)`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
  gap: 32px;
  align-items: flex-start;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 24px 16px;
  }
`;

export const MainContent = styled(Flex)`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
  flex-direction: column;
  gap: 24px;
`;

export const LoadMoreWrapper = styled(Flex)`
  justify-content: center;
  padding-top: 16px;
`;
export const EqualCard = styled(StyledCard)`
  height: 100%;
  display: flex;
  flex-direction: column;

  .ant-card-body {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`;

export const CardFooter = styled(Flex)`
  margin-top: auto;
  flex-direction: column;
  gap: 8px;
`;

export const ModalImage = styled(Image)`
  width: 100% !important;
  height: 100% !important;
  object-fit: cover !important;
  border-radius: 12px 0 0 12px !important;
`;

export const ModalLeft = styled(Flex)`
  width: 200px;
  flex-shrink: 0;
  min-height: 280px;

  @media (max-width: 576px) {
    width: 100%;
    min-height: 180px;
  }
`;

export const ModalRight = styled(Flex)`
  flex: 1;
  flex-direction: column;
  gap: 12px;
  padding: 8px 0;
`;

export const ModalCookieName = styled(Typography.Title)`
  &.ant-typography {
    color: #00009c;
    font-weight: 800;
    margin: 0;
  }
`;

export const BlinkingTag = styled(Tag)`
  position: absolute;
  top: 16px;
  right: 16px;
  background: #00009c;
  color: #fff;
  border: none;
  border-radius: 20px;
  padding: 4px 14px;
  font-weight: 700;
  font-size: 0.85rem;
  animation: blink 1.2s step-start infinite;

  @keyframes blink {
    0%,
    100% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
  }
`;
