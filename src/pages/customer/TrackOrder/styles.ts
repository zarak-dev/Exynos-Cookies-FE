import styled from "styled-components";
import { Card, Typography, Flex } from "antd";

const { Title, Text, Paragraph } = Typography;

export const TrackContainer = styled.div`
  padding: 40px 24px;
  max-width: 800px;
  margin: 0 auto;
  min-height: 80vh;
`;

export const PageTitle = styled(Title)`
  &.ant-typography {
    color: #00009c;
    font-weight: 800;
    margin-bottom: 8px;
    text-align: center;
  }
`;

export const PageSubtitle = styled(Paragraph)`
  &.ant-typography {
    text-align: center;
    color: #666;
    margin-bottom: 32px;
  }
`;

export const SearchCard = styled(Card)`
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  margin-bottom: 24px;
`;

export const SearchWrapper = styled(Flex)`
  gap: 12px;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

export const ResultCard = styled(Card)`
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
`;

export const ResultHeader = styled(Flex)`
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 24px;

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 12px;
  }
`;

export const OrderTitle = styled(Title)`
  &.ant-typography {
    margin: 0;
  }
`;

export const OrderIdText = styled(Text)`
  color: #00009c;
`;

export const OrderDateText = styled(Paragraph)`
  &.ant-typography {
    color: #888;
    margin: 4px 0 0 0;
  }
`;

export const BadgeText = styled(Text)`
  color: #00009c;
`;

export const DetailsCard = styled(Card)`
  margin-top: 24px;
`;

export const DetailRow = styled(Paragraph)<{ $isLast?: boolean }>`
  &.ant-typography {
    margin-bottom: ${(props) => (props.$isLast ? "0" : "1em")};
  }
`;
