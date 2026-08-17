import styled from "styled-components";
import { Card } from "antd";

export const InfoBarWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto 48px;
  padding: 0 20px;
  position: relative;
  z-index: 1;
`;
export const InfoBarCard = styled(Card)<{ $clickable?: boolean }>`
  border-radius: 16px;
  box-shadow: 0 4px 16px rgba(0, 0, 56, 0.08);
  cursor: ${({ $clickable }) => ($clickable ? "pointer" : "default")};
  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease;
  height: 100%;

  .ant-card-body {
    display: flex;
    align-items: flex-start;
    gap: 16px;
    padding: 20px;
  }

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 12px 32px rgba(0, 0, 56, 0.15);
  }
`;

export const InfoBarIcon = styled.div`
  font-size: 28px;
  color: #00009c;
  flex-shrink: 0;
  margin-top: 2px;
`;

export const InfoBarText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
