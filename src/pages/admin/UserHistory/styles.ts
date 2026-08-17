import styled from "styled-components";
import { Card, Flex } from "antd";

export const HistoryCardWrapper = styled(Card)`
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);

  .ant-card-head-title {
    color: #00009c;
    font-weight: 700;
  }
`;

export const SearchWrapper = styled(Flex)`
  justify-content: flex-end;
  margin-bottom: 8px;

  .ant-input-affix-wrapper {
    width: 260px;
  }
`;
