import { Button, Popconfirm, Space, Switch } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import Text from "antd/es/typography/Text";
import { CookieImage, StatusTag } from "./styles";
import type { InventoryColumnsProps, InventoryColumns, CookieItem } from "./types";

export const getInventoryColumns = ({
  onToggle,
  onDelete,
}: InventoryColumnsProps): InventoryColumns => [
  {
    title: "IMAGE",
    dataIndex: "imageUrl",
    key: "imageUrl",
    width: 100,
    render: (url: string, record: CookieItem) => (
      <CookieImage src={url} alt={record.name} width={60} />
    ),
  },
  {
    title: "COOKIE NAME",
    dataIndex: "name",
    key: "name",
    sorter: (a, b) => a.name.localeCompare(b.name),
    render: (text: string) => <Text strong>{text}</Text>,
  },
  {
    title: "PRICE",
    dataIndex: "price",
    key: "price",
    sorter: (a, b) => a.price - b.price,
    render: (price: number) => <Text>Rs. {price}</Text>,
  },
  {
    title: "STATUS",
    dataIndex: "isAvailable",
    key: "isAvailable",
    sorter: (a, b) => Number(b.isAvailable) - Number(a.isAvailable),
    filters: [
      { text: "Available", value: true },
      { text: "Sold Out", value: false },
    ],
    onFilter: (value, record) => record.isAvailable === value,
    render: (isAvailable: boolean) => (
      <StatusTag color={isAvailable ? "success" : "error"}>
        {isAvailable ? "AVAILABLE" : "SOLD OUT"}
      </StatusTag>
    ),
  },
  {
    title: "ACTION",
    key: "action",
    width: 180,
    render: (_: unknown, record: CookieItem) => (
      <Space>
        <Switch
          checkedChildren="ON"
          unCheckedChildren="OFF"
          checked={record.isAvailable}
          onChange={(checked) => onToggle(record.id, checked)}
        />
        <Popconfirm
          title="Delete this cookie?"
          description="It will be removed from inventory permanently."
          okText="Delete"
          okType="danger"
          cancelText="Cancel"
          onConfirm={() => onDelete(record.id)}
        >
          <Button type="text" danger icon={<DeleteOutlined />} />
        </Popconfirm>
      </Space>
    ),
  },
];