import styled from "styled-components";
import { Layout, Flex, Typography, Button } from "antd";

const { Header, Sider, Content } = Layout;
const { Text } = Typography;

export const AdminLayoutWrapper = styled(Layout)`
  height: 100vh;
  overflow: hidden;
`;

export const StyledSider = styled(Sider)`
  background: #00009c !important;
  height: 100vh;
  position: fixed !important;
  left: 0;
  top: 0;
  bottom: 0;
  z-index: 1000;
  display: flex;
  flex-direction: column;

  .ant-layout-sider-children {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  .ant-menu {
    background: transparent;
    margin-top: 8px;
    flex: 1;
  }

  .ant-menu-item {
    border-radius: 10px;
    margin: 4px 8px;
    width: calc(100% - 16px);
    font-weight: 600;
    letter-spacing: 0.3px;
    transition: background 0.2s ease;
  }

  .ant-menu-item-selected {
    background: rgba(255, 255, 255, 0.2) !important;
  }

  .ant-menu-item:hover {
    background: rgba(255, 255, 255, 0.1) !important;
  }
`;

export const AdminLogo = styled(Flex)`
  height: 64px;
  background: #000080;
  color: #ffffff;
  font-weight: 900;
  font-size: 1.1rem;
  letter-spacing: 1px;
  text-transform: uppercase;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  flex-shrink: 0;
  padding: 0 16px;
`;

export const SiderFooter = styled(Flex)`
  padding: 16px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  flex-shrink: 0;
`;

export const CollapseButton = styled(Button)`
  width: 100%;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.15);
  color: #fff;
  border-radius: 10px;
  font-weight: 600;

  &:hover {
    background: rgba(255, 255, 255, 0.18) !important;
    color: #fff !important;
    border-color: rgba(255, 255, 255, 0.3) !important;
  }
`;

export const MainContentWrapper = styled(Layout)<{ $collapsed: boolean }>`
  margin-left: ${(props) => (props.$collapsed ? "80px" : "200px")};
  transition: all 0.2s ease-in-out;
  height: 100vh;
`;

export const StyledHeader = styled(Header)`
  background: #ffffff !important;
  padding: 0 24px !important;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #e8e8e8;
`;

export const HeaderLeft = styled(Flex)`
  align-items: center;
`;

export const HeaderTitle = styled(Text)`
  text-transform: uppercase;
  letter-spacing: 0.5px;
  font-weight: 700;
  color: #00009c;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const HeaderSubtitle = styled(Text)`
  font-size: 0.85rem;
  color: #8c8c8c;
  white-space: nowrap;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const StyledContent = styled(Content)`
  background: #f5f5f5;
  overflow-y: auto;
  flex: 1;
`;

export const AdminNameText = styled(Text)`
  color: #00009c;
`;
