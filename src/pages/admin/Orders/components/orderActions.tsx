import { Button, Popconfirm, Space, Tag } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { type Order } from "../../../../store/slices/orderSlice";

type Props = {
  order: Order;
  buttonLabel?: string;
  nextStatus?: Order["status"];
  onStatusChange: (id: string, status: Order["status"]) => void;
  onDelete: (id: string) => void;
};

const OrderActions = ({
  order,
  buttonLabel,
  nextStatus,
  onStatusChange,
  onDelete,
}: Props) => (
  <Space>
    {order.status === "Delivered" ? (
      <Tag color="green">Order Complete</Tag>
    ) : (
      <Button
        type="primary"
        size="small"
        shape="round"
        onClick={() => onStatusChange(order.id, nextStatus!)}
      >
        {buttonLabel}
      </Button>
    )}

    <Popconfirm
      title="Delete Order"
      description={`Delete order ${order.id}?`}
      onConfirm={() => onDelete(order.id)}
      okText="Delete"
      cancelText="Cancel"
      okButtonProps={{ danger: true }}
    >
      <Button
        shape="round"
        type="link"
        danger
        size="small"
        icon={<DeleteOutlined />}
      />
    </Popconfirm>
  </Space>
);

export default OrderActions;
