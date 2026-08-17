import styled from "styled-components";
import { Card, Flex, Typography } from "antd";

export const MetricCard = styled(Card)`
  border-radius: 14px;
  border: none;
  border-top: 4px solid #00009c;
  box-shadow: 0 4px 20px rgba(0, 0, 56, 0.08);
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
  height: 100%;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 28px rgba(0, 0, 56, 0.15);
  }

  .ant-statistic-title {
    color: #666;
    font-size: 0.85rem;
    font-weight: 500;
  }

  .ant-statistic-content {
    color: #00009c;
    font-weight: 800;
    font-size: 1.8rem;
  }
`;
export const MetricIcon = styled(Flex)`
  width: 44px;
  height: 44px;
  border-radius: 10px;
  background: rgba(0, 0, 156, 0.08);
  align-items: center;
  justify-content: center;
  font-size: 20px;
  color: #00009c;
  margin-bottom: 16px;
`;
export const StyledChartCard = styled(Card)`
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  border-radius: 14px;
  margin-top: 8px;
  border: none;

  .ant-card-head-title {
    color: #00009c;
    font-weight: 700;
  }
`;

export const ChartWrapper = styled.div<{ height?: string }>`
  height: ${(props) => props.height || "320px"};
  width: 100%;
`;

export const StockListWrapper = styled.div`
  height: 320px;
  overflow-y: auto;
  padding-right: 8px;

  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #d9d9d9;
    border-radius: 4px;
  }
`;

export const StockItem = styled.div<{ $isLast: boolean }>`
  padding: 12px 0;
  border-bottom: ${(props) => (props.$isLast ? "none" : "1px solid #f0f0f0")};
`;

export const StockItemHeader = styled(Flex)`
  margin-bottom: 6px;
`;

export const StockTagsWrapper = styled(Flex)`
  align-items: center;
`;

export const StockCountText = styled(Typography.Text)`
  margin-right: 12px;
  font-size: 0.85rem;
`;
