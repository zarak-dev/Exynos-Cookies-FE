import { Breadcrumb, Flex, Typography, Divider } from "antd";
import { Link } from "react-router-dom";
import styled from "styled-components";

const { Title } = Typography;

const HeaderWrapper = styled(Flex)`
  margin-bottom: 24px;
  background: #fff;
  padding: 20px 24px 0px;
  box-shadow: 0 2px 8px rgba(0, 0, 56, 0.07);
  flex-direction: column;
  gap: 4px;
`;

const StyledTitle = styled(Title)`
  &.ant-typography {
    margin: 0;
    color: #00009c;
    font-weight: 800;
    letter-spacing: 0.5px;
  }
`;

export interface BreadcrumbItem {
  title: string;
  href?: string;
  to?: string;
}

export interface StyledPageHeaderProps {
  title: string;
  breadcrumbs?: BreadcrumbItem[];
  extra?: React.ReactNode;
  children?: React.ReactNode;
}

const StyledPageHeader = ({
  title,
  breadcrumbs = [],
  extra,
  children,
}: StyledPageHeaderProps) => {
  return (
    <HeaderWrapper>
      <Flex justify="space-between" align="center" wrap="wrap" gap={12}>
        <Flex vertical gap={4}>
          {breadcrumbs.length > 0 && (
            <Breadcrumb
              items={breadcrumbs.map((item) => ({
                title: item.to ? (
                  <Link to={item.to}>{item.title}</Link>
                ) : item.href ? (
                  <a href={item.href}>{item.title}</a>
                ) : (
                  item.title
                ),
              }))}
            />
          )}
          <StyledTitle level={3}>{title}</StyledTitle>
          {children}
        </Flex>
        {extra && <Flex>{extra}</Flex>}
      </Flex>
      <Divider style={{ margin: "12px 0 0" }} />
    </HeaderWrapper>
  );
};

export default StyledPageHeader;
