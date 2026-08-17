import { Tag, Typography } from "antd";
import type { ColumnsType } from "antd/es/table";
import {
  CheckCircleOutlined,
  ClockCircleOutlined,
  SyncOutlined,
} from "@ant-design/icons";
import { type Order } from "../../../../store/slices/orderSlice";
import OrderActions from "./orderActions";

const { Text, Link } = Typography;

const nextStatus: any = {
  Pending: "Baking",
  Baking: "Dispatched",
  Dispatched: "Delivered",
};

const actionLabel: any = {
  Pending: "Start Baking",
  Baking: "Mark Dispatched",
  Dispatched: "Mark Delivered",
};

const statusTags: any = {
  Pending: (
    <Tag icon={<ClockCircleOutlined />} color="warning">
      PENDING QUEUE
    </Tag>
  ),
  Baking: (
    <Tag icon={<SyncOutlined spin />} color="processing">
      IN OVEN / BAKING
    </Tag>
  ),
  Dispatched: (
    <Tag icon={<CheckCircleOutlined />} color="success">
      DISPATCHED
    </Tag>
  ),
  Delivered: (
    <Tag icon={<CheckCircleOutlined />} color="default">
      DELIVERED
    </Tag>
  ),
};

const STATUS_ORDER: Record<Order["status"], number> = {
  Pending: 0,
  Baking: 1,
  Dispatched: 2,
  Delivered: 3,
};

type Props = {
  onStatusChange: (id: string, status: Order["status"]) => void;
  onDelete: (id: string) => void;
};

export const getOrderColumns = ({
  onStatusChange,
  onDelete,
}: Props): ColumnsType<Order> => [
  {
    title: "ORDER ID",
    dataIndex: "id",
    sorter: (a, b) => a.id.localeCompare(b.id),
    render: (id) => <Link>{id}</Link>,
  },
  {
    title: "CUSTOMER",
    dataIndex: "customerName",
    sorter: (a, b) => a.customerName.localeCompare(b.customerName),
    render: (name) => <Text>{name}</Text>,
  },
  {
    title: "BOX SELECTION",
    dataIndex: "boxSize",
    sorter: (a, b) => a.boxSize.localeCompare(b.boxSize),
  },
  {
    title: "CONTENTS SUMMARY",
    dataIndex: "contents",
    ellipsis: true,
  },
  {
    title: "TOTAL",
    dataIndex: "totalPrice",
    sorter: (a, b) => a.totalPrice - b.totalPrice,
    render: (price) => <Text strong>Rs. {price}</Text>,
  },
  {
    title: "STATUS",
    dataIndex: "status",
    sorter: (a, b) => STATUS_ORDER[a.status] - STATUS_ORDER[b.status],
    filters: [
      { text: "Pending", value: "Pending" },
      { text: "Baking", value: "Baking" },
      { text: "Dispatched", value: "Dispatched" },
      { text: "Delivered", value: "Delivered" },
    ],
    onFilter: (value, record) => record.status === value,
    render: (status: Order["status"]) => statusTags[status],
  },
  {
    title: "ACTIONS",
    width: 200,
    render: (_, order) => (
      <OrderActions
        order={order}
        buttonLabel={actionLabel[order.status]}
        nextStatus={nextStatus[order.status]}
        onStatusChange={onStatusChange}
        onDelete={onDelete}
      />
    ),
  },
];