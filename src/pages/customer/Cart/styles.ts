import styled from "styled-components";
import { Layout, Typography, Flex, Radio, Divider } from "antd";

const { Content } = Layout;
const { Text } = Typography;

export const CartContainer = styled(Content)`
  padding: 40px 24px;
  max-width: 1200px;
  margin: 0 auto;
  background: transparent;
`;

export const EmptyCartContainer = styled(Flex)`
  padding: 60px 24px;
  background: #ffffff;
  border-radius: 8px;
`;

export const SummaryRow = styled(Flex)`
  margin-bottom: 12px;
`;

export const TotalRow = styled(Flex)`
  margin-bottom: 24px;
`;

export const RadioGroupWrapper = styled(Flex)`
  margin-bottom: 20px;
`;

export const StyledRadioGroup = styled(Radio.Group)`
  width: 100%;
  display: flex;

  .ant-radio-button-wrapper {
    flex: 1;
    text-align: center;
    border-color: #00009c;
  }
`;

export const QuantityControl = styled(Flex)`
  border: 1px solid #d9d9d9;
  border-radius: 6px;
  padding: 4px;
  width: fit-content;
  margin: 0 auto;
`;

export const BoxCapacityText = styled(Text)<{ $isFull: boolean }>`
  color: ${(props) => (props.$isFull ? "#52c41a" : "#fa8c16")};
`;

export const SpacedDivider = styled(Divider)`
  margin: 16px 0;
`;
