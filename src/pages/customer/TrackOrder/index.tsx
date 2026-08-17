import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { type RootState } from "../../../store";
import { type Order, deleteOrder } from "../../../store/slices/orderSlice";
import {
  Input,
  Steps,
  Result,
  message,
  Badge,
  Space,
  Descriptions,
  Button,
  Popconfirm,
} from "antd";
import {
  SearchOutlined,
  LoadingOutlined,
  SmileOutlined,
  CarOutlined,
  SolutionOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import {
  TrackContainer,
  PageTitle,
  PageSubtitle,
  SearchCard,
  ResultCard,
  ResultHeader,
  OrderTitle,
  OrderIdText,
  OrderDateText,
  BadgeText,
  DetailsCard,
} from "./styles";

const TRACKING_STEPS = [
  {
    title: "Order Placed",
    icon: <SolutionOutlined />,
  },
  {
    title: "Baking",
    icon: <LoadingOutlined />,
  },
  {
    title: "Dispatched",
    icon: <CarOutlined />,
  },
  {
    title: "Delivered",
    icon: <SmileOutlined />,
  },
];

const STEP_INDEX = {
  Pending: 0,
  Baking: 1,
  Dispatched: 2,
  Delivered: 3,
} as const;

export const TrackOrder: React.FC = () => {
  const [orderId, setOrderId] = useState("");
  // Initialize the hook to get the API and the context element
  const [messageApi, contextHolder] = message.useMessage();
  const [searchedOrder, setSearchedOrder] = useState<Order | null>(null);
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteOrder(searchedOrder!.id));
    setSearchedOrder(null);
    setOrderId("");
    messageApi.success("Order cancelled successfully.");
  };

  // Grab live orders from our global Redux store
  const orders = useSelector((state: RootState) => state.orders.orders);

  const handleSearch = () => {
    const normalizedOrderId = orderId.trim().toUpperCase();
    if (!normalizedOrderId) {
      messageApi.warning("Please enter an Order ID to track!");
      return;
    }
    // Search for the order in our global Redux state
    const foundOrder = orders.find(
      (order) => order.id.toUpperCase() === normalizedOrderId,
    );

    if (foundOrder) {
      setSearchedOrder(foundOrder);
      messageApi.success("Order status retrieved successfully!");
    } else {
      setSearchedOrder(null);
      messageApi.error("Order ID not found. Please check your spelling.");
    }
  };
  const formattedDate = searchedOrder?.timestamp
    ? new Date(searchedOrder.timestamp).toLocaleString()
    : "Just now";

  return (
    <TrackContainer>
      {contextHolder}
      {/*  Renders the hidden context holder so the messages can access the theme */}
      <PageTitle level={1}>TRACK YOUR BAKE</PageTitle>
      <PageSubtitle>
        Enter your unique Order ID to track your custom cookie box live.
      </PageSubtitle>
      {/* SEARCH BAR */}
      <SearchCard variant="borderless">
        <Space align="center">
          <Input
            style={{ width: 600, borderRadius: 20 }}
            allowClear
            placeholder="Enter your Order ID (e.g., EXNS-12345)"
            value={orderId}
            onChange={(e) => setOrderId(e.target.value)}
            onPressEnter={handleSearch}
          />
          <Button
            type="primary"
            disabled={!orderId.trim()}
            shape="round"
            icon={<SearchOutlined />}
            onClick={handleSearch}
          >
            Search
          </Button>
        </Space>
      </SearchCard>
      {/* TRACKING RESULTS */}
      {searchedOrder ? (
        <ResultCard variant="borderless">
          <ResultHeader>
            <Space direction="vertical" size={2}>
              <OrderTitle level={5}>
                Order: <OrderIdText>{searchedOrder.id}</OrderIdText>
              </OrderTitle>
              <OrderDateText>Placed: {formattedDate}</OrderDateText>
            </Space>

            <Space>
              <Badge
                status="processing"
                text={<BadgeText strong>{searchedOrder.status}</BadgeText>}
              />
              <Popconfirm
                title="Cancel Order"
                description="Are you sure you want to cancel this order?"
                onConfirm={handleDelete}
                okText="Yes, Cancel"
                cancelText="Keep Order"
                okButtonProps={{ danger: true }}
              >
                <Button
                  disabled={searchedOrder.status !== "Baking"}
                  danger
                  icon={<DeleteOutlined />}
                  size="small"
                >
                  Cancel Order
                </Button>
              </Popconfirm>
            </Space>
          </ResultHeader>

          {/* STEP PROGRESS */}
          <Steps
            current={STEP_INDEX[searchedOrder.status] ?? 0}
            items={TRACKING_STEPS}
          />

          <DetailsCard type="inner" title="Order details">
            <Descriptions
              bordered
              column={1}
              labelStyle={{ fontWeight: 600 }}
              size="small"
              items={[
                {
                  label: "Customer",
                  children: searchedOrder.customerName,
                },
                {
                  label: "Box Size",
                  children: searchedOrder.boxSize,
                },
                {
                  label: "Cookies Selected",
                  children: searchedOrder.contents,
                },
                {
                  label: "Total to be Paid",
                  children: `Rs. ${searchedOrder.totalPrice}`,
                },
              ]}
            />
          </DetailsCard>
        </ResultCard>
      ) : (
        <Result
          status="info"
          title="No Live Tracking Session"
          subTitle="Place an order to watch its preparation. The kitchen is standing by!"
        />
      )}
    </TrackContainer>
  );
};

export default TrackOrder;
