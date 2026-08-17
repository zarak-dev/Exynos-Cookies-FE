import styled from "styled-components";
import { Tabs, Typography, Flex } from "antd";

const { Text } = Typography;

export const ProfileContainer = styled.div`
  max-width: 1200px;
  margin: 30px auto;
  padding: 0 8px;
  min-height: 70vh;

  @media (max-width: 768px) {
    margin: 24px auto;
    padding: 0 16px;
  }
`;

export const SidebarTabs = styled(Tabs)`
  .ant-tabs-nav {
    width: 250px;
  }

  .ant-tabs-tab {
    font-size: 1.3rem;
    padding: 12px 0;
    color: #888;
    justify-content: flex-start;
  }

  .ant-tabs-tab-active .ant-tabs-tab-btn {
    color: #000 !important;
    font-weight: 600;
  }

  .ant-tabs-ink-bar {
    display: none;
  }

  @media (max-width: 768px) {
    .ant-tabs-nav {
      width: 100%;
    }

    .ant-tabs-tab {
      justify-content: center;
      padding: 12px 16px;
    }
  }
`;

export const ContentWrapper = styled(Flex)`
  flex-direction: column;
  gap: 0px;
  max-width: 650px;
  margin-bottom: 0px;
  padding-left: 4px;

  @media (max-width: 768px) {
    padding-left: 0;
    max-width: 100%;
    gap: 24px;
  }
`;

export const SectionContainer = styled(Flex)`
  flex-direction: column;
  gap: 0px;
  margin-bottom: 0px;
`;

export const SignOutWrapper = styled(Flex)`
  align-items: center;
  gap: 24px;
  margin-top: 16px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }
`;

export const SignOutLink = styled(Text)`
  color: #d4a373;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export const HeaderRow = styled(Flex)`
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0px;
`;