import styled from "styled-components";
import { Layout } from "antd";

const { Content } = Layout;

export const LayoutWrapper = styled(Layout)`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #ffffff;
`;

export const ContentArea = styled(Content)`
  flex: 1;
  width: 100%;
`;