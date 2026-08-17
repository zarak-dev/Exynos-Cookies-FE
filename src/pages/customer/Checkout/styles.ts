import styled from "styled-components";
import { Layout, Card, Typography, Flex, Button, Radio } from "antd";

const { Content } = Layout;
const { Text, Title } = Typography;

export const CheckoutContainer = styled(Content)`
  padding: 40px 24px;
  max-width: 1200px;
  margin: 0 auto;
  background: transparent;
`;

export const CenteredContainer = styled(Content)`
  padding: 60px 24px;
  display: flex;
  justify-content: center;
  background: transparent;
`;

export const StyledCard = styled(Card)`
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  margin-bottom: 24px;

  .ant-card-head-title {
    color: #00009c;
    font-weight: 700;
  }
`;

export const OrderSummarySticky = styled(StyledCard)`
  position: sticky;
  top: 24px;
`;

export const SuccessCard = styled(Card)`
  max-width: 600px;
  width: 100%;
  text-align: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
`;

export const SectionTitle = styled(Title)`
  color: #00009c !important;
  font-weight: 800 !important;
  margin-bottom: 24px !important;
`;

export const SuccessTitle = styled(Title)`
  color: #00009c !important;
  margin: 0 !important;
`;

export const TotalText = styled(Title)`
  color: #00009c !important;
  margin: 0 !important;
`;

export const BrandButton = styled(Button)`
  background: #00009c;
  font-weight: 700;
`;

export const SubmitButton = styled(BrandButton)`
  height: 50px;
`;

export const TrackingBox = styled(Flex)`
  background: #f0f2f5;
  padding: 16px;
  border-radius: 8px;
  margin: 24px 0;
  border: 1px dashed #00009c;
`;

export const TrackingLabel = styled(Text)`
  font-size: 0.9rem;
  margin-bottom: 4px;
`;

export const TrackingNumber = styled(Text)`
  font-size: 1.4rem;
  color: #00009c;
  letter-spacing: 1px;
  font-weight: 800;
`;

export const TrackingSubtext = styled(Text)`
  font-size: 0.8rem;
  margin-top: 8px;
`;

export const SummaryRow = styled(Flex)`
  margin-bottom: 12px;
`;

export const TotalRow = styled(Flex)`
  margin-bottom: 24px;
`;

export const FullWidthRadioGroup = styled(Radio.Group)`
  width: 100%;
`;

export const PaymentMethodCard = styled(Card)<{ $isActive: boolean }>`
  border-color: ${(props) => (props.$isActive ? "#00009c" : "#f0f0f0")};
`;

export const PaymentLabel = styled(Text)`
  margin-left: 8px;
`;
