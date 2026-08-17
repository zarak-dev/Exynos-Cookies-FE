import { Avatar, Button, Flex, Popconfirm, Tag, Typography } from "antd";
import { DeleteOutlined, UserOutlined } from "@ant-design/icons";
import type { ColumnsType } from "antd/es/table";
import type { UserHistoryRow } from "../../../../../store/slices/userHistorySlice";

const { Text } = Typography;

export const getUserHistoryColumns = (
  onDelete: (uuid: string) => void,
): ColumnsType<UserHistoryRow> => [
  {
    title: "Avatar",
    width: 80,
    render: (_, user) => (
      <Avatar src={user.thumbnail} icon={<UserOutlined />} size={40} />
    ),
  },
  {
    title: "Name",
    sorter: (a, b) => a.name.localeCompare(b.name),
    render: (_, user) => (
      <Flex vertical>
        <Text strong>{user.name}</Text>
        <Text type="secondary" style={{ fontSize: "0.8rem" }}>
          {user.gender}
        </Text>
      </Flex>
    ),
  },
  {
    title: "Email",
    dataIndex: "email",
    sorter: (a, b) => a.email.localeCompare(b.email),
  },
  {
    title: "Phone",
    dataIndex: "phone",
  },
  {
    title: "Location",
    dataIndex: "country",
    sorter: (a, b) => a.country.localeCompare(b.country),
    filters: [],
    render: (country: string) => <Tag color="blue">{country}</Tag>,
  },
  {
    title: "Action",
    width: 80,
    render: (_, user) => (
      <Popconfirm
        title="Delete this customer?"
        description="This action cannot be undone."
        okText="Delete"
        okType="danger"
        cancelText="Cancel"
        onConfirm={() => onDelete(user.uuid)}
      >
        <Button type="text" danger icon={<DeleteOutlined />} />
      </Popconfirm>
    ),
  },
];
