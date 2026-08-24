import { Form, Button, Input } from "antd";
import { useDispatch } from "react-redux";
import { loginRequest } from "@/store/slices/authSlice";
import type { LoginFormValues } from "../../Types";

const { Password } = Input;

export const LoginForm = () => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  const onFinish = ({ email, password }: LoginFormValues) => {
    dispatch(loginRequest({ email, password }));
    form.resetFields();
  };

  return (
    <Form form={form} layout="vertical" onFinish={onFinish}>
      <Form.Item
        name="email"
        label="Email"
        rules={[
          { required: true, type: "email", message: "Please enter your email" },
        ]}
      >
        <Input placeholder="Enter your email" />
      </Form.Item>

      <Form.Item
        name="password"
        label="Password"
        rules={[
          {
            required: true,
            min: 6,
            message: "Password must be at least 6 characters",
          },
        ]}
      >
        <Password placeholder="Enter your password" />
      </Form.Item>

      <Button type="primary" shape="round" block onClick={() => form.submit()}>
        Login
      </Button>
    </Form>
  );
};
