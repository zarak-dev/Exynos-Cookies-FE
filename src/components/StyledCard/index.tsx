import { Card } from "antd";
import styled from "styled-components";

interface ReusableCardProps {
  $isAvailable?: boolean;
}

export const StyledCard = styled(Card)<ReusableCardProps>`
  overflow: visible;
  box-shadow: none;
  transition: all 0.3s ease;
  opacity: ${({ $isAvailable = true }) => ($isAvailable ? 1 : 0.5)};

  .ant-card-body {
    padding: 12px;
  }

  @media (max-width: 768px) {
    .ant-card-body {
      padding: 12px;
    }
  }
`;
