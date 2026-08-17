import styled from "styled-components";
import { Typography, Card, Flex } from "antd";

const { Text } = Typography;

export const OrdersContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const OrdersCard = styled(Card)`
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);

  @media (max-width: 768px) {
    .ant-card-body {
      padding: 12px;
    }
  }
`;

export const CompleteText = styled(Text)`
  color: #8c8c8c;
  font-size: 0.85rem;
`;

export const SearchWrapper = styled(Flex)`
  justify-content: flex-end;
  margin-bottom: 8px;

  .ant-input-affix-wrapper {
    width: 260px;
  }
`;
