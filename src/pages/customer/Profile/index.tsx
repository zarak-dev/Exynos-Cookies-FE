import React from "react";
import { Switch, Table, Empty, Grid, Flex, Button } from "antd";
import {
  EditOutlined,
  EnvironmentOutlined,
  MailOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { type RootState } from "../../../store";
import { logoutUser } from "../../../store/slices/authSlice";
import {
  ProfileContainer,
  SidebarTabs,
  ContentWrapper,
  SectionContainer,
  SignOutWrapper,
  SignOutLink,
  HeaderRow,
} from "./styles";
import Text from "antd/es/typography/Text";
import { StyledCard } from "../../../components/StyledCard";
import { StyledTitle } from "../../../components/StyledTitle";

const { useBreakpoint } = Grid;

const ORDER_COLUMNS = [
  {
    title: "Order ID",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Date",
    dataIndex: "timestamp",
    key: "timestamp",
    render: (value: string) =>
      value ? new Date(value).toLocaleDateString() : "N/A",
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
  },
  {
    title: "Total",
    dataIndex: "totalPrice",
    key: "totalPrice",
    render: (value: number) => `Rs. ${value}`,
  },
];

const CustomerProfile: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const screens = useBreakpoint();

  const user = useSelector((state: RootState) => state.auth.user);
  const orders = useSelector((state: RootState) => state.orders.orders);
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);

  const customerOrders = user
    ? orders.filter((order) => order.customerEmail === user.email)
    : [];

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate("/");
  };

  if (!isLoggedIn) {
    return null;
  }

  return (
    <ProfileContainer>
      <SidebarTabs
        tabPosition={screens.md ? "left" : "top"} //
        items={[
          {
            key: "orders",
            label: "Orders",
            children: (
              <ContentWrapper>
                {customerOrders.length ? (
                  <Table
                    rowKey="id"
                    columns={ORDER_COLUMNS}
                    dataSource={customerOrders}
                    pagination={false}
                    scroll={{ x: 600 }}
                  />
                ) : (
                  <Empty description="You haven't placed any orders yet" />
                )}
              </ContentWrapper>
            ),
          },

          {
            key: "profile",
            label: "Profile",
            children: (
              <ContentWrapper>
                <SectionContainer>
                  <HeaderRow>
                    <StyledTitle level={5}>Contact</StyledTitle>
                    <Button icon={<EditOutlined />} disabled>
                      {" "}
                      Edit
                    </Button>
                  </HeaderRow>

                  <StyledCard>
                    <Flex justify="space-between" align="center">
                      <Text strong>Email</Text>
                      <Text>{user?.email}</Text>
                    </Flex>
                  </StyledCard>
                </SectionContainer>

                <SectionContainer>
                  <Flex justify="space-between" align="center">
                    <StyledTitle level={5}>Addresses</StyledTitle>
                    <Button disabled icon={<PlusOutlined />}>
                      Add
                    </Button>
                  </Flex>

                  <StyledCard>
                    <Flex align="center" gap={5}>
                      <EnvironmentOutlined />
                      <Text>No addresses added</Text>
                    </Flex>
                  </StyledCard>
                </SectionContainer>

                <SectionContainer>
                  <Flex justify="space-between" align="center">
                    <StyledTitle level={5}>Marketing preferences</StyledTitle>
                  </Flex>

                  <StyledCard>
                    <Flex justify="space-between" align="center">
                      <Flex align="center" gap={5}>
                        <MailOutlined />
                        <Text type="secondary">Email</Text>
                      </Flex>
                      <Switch />
                    </Flex>
                  </StyledCard>
                </SectionContainer>

                <SignOutWrapper>
                  <Button size="large" onClick={handleLogout}>
                    Sign out
                  </Button>

                  <SignOutLink onClick={handleLogout}>
                    Sign out of all devices
                  </SignOutLink>
                </SignOutWrapper>
              </ContentWrapper>
            ),
          },
        ]}
      />
    </ProfileContainer>
  );
};

export default CustomerProfile;
