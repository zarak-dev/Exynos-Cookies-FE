import React from "react";
import {
  Button,
  Result,
  Typography,
  Descriptions,
  Tag,
  Popconfirm,
  Space,
} from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import type { Order } from "../../../../store/slices/orderSlice";
import {
  CenteredContainer,
  SuccessCard,
  SuccessTitle,
  TrackingBox,
  TrackingLabel,
  TrackingNumber,
  TrackingSubtext,
} from "../styles";
import dayjs from "dayjs";

const { Paragraph } = Typography;

interface OrderConfirmedProps {
  orderId: string;
  order: Order;
  onBackToShop: () => void;
  onDelete: () => void;
}

export const OrderConfirmed: React.FC<OrderConfirmedProps> = ({
  orderId,
  order,
  onBackToShop,
  onDelete,
}) => {
  return (
    <CenteredContainer>
      <SuccessCard variant="borderless">
        <Result
          status="success"
          title={<SuccessTitle level={3}>Order Confirmed!</SuccessTitle>}
          subTitle={
            <>
              <Paragraph>
                Your cookie box is being prepared and will head your way
                shortly.
              </Paragraph>

              <TrackingBox vertical align="center">
                <TrackingLabel type="secondary">TRACKING NUMBER</TrackingLabel>
                <TrackingNumber copyable>{orderId}</TrackingNumber>
                <TrackingSubtext type="secondary">
                  Use this to track your order live.
                </TrackingSubtext>
              </TrackingBox>

              <Descriptions
                bordered
                size="small"
                column={1}
                style={{ textAlign: "left", marginTop: 16 }}
              >
                <Descriptions.Item label="Customer">
                  {order.customerName}
                </Descriptions.Item>
                <Descriptions.Item label="Email">
                  {order.customerEmail}
                </Descriptions.Item>
                <Descriptions.Item label="Box Size">
                  {order.boxSize}
                </Descriptions.Item>
                <Descriptions.Item label="Items">
                  {order.contents}
                </Descriptions.Item>
                <Descriptions.Item label="Total">
                  Rs. {order.totalPrice.toLocaleString()}
                </Descriptions.Item>
                <Descriptions.Item label="Status">
                  <Tag color="orange">{order.status}</Tag>
                </Descriptions.Item>
                <Descriptions.Item label="Placed At">
                  {dayjs(order?.timestamp).format("DD MMM, YYYY")}
                </Descriptions.Item>
              </Descriptions>
            </>
          }
          extra={[
            <Space key="actions">
              <Popconfirm
                title="Cancel Order"
                description="Are you sure you want to cancel this order?"
                onConfirm={onDelete}
                okText="Yes, Cancel"
                cancelText="Keep Order"
                okButtonProps={{ danger: true }}
              >
                <Button danger icon={<DeleteOutlined />} size="medium">
                  Cancel Order
                </Button>
              </Popconfirm>
              <Button size="medium" onClick={onBackToShop}>
                Back to Shop
              </Button>
            </Space>,
          ]}
        />
      </SuccessCard>
    </CenteredContainer>
  );
};
