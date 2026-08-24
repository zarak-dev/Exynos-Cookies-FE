import { Form, Input, Button } from "antd";
import { useDispatch } from "react-redux";
import { ADMIN_EMAIL, registerRequest } from "@/store/slices/authSlice";
import type { SignUpFormValues } from "@/components/common/Auth/Types";

const { Password } = Input;

const normalizeEmail = (email: string) => email.toLowerCase();

const assignRole = (email: string) =>
  normalizeEmail(email) === normalizeEmail(ADMIN_EMAIL) ? "admin" : "customer";

export const SignUpForm = () => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  const onFinish = ({ name, email, password }: SignUpFormValues) => {
    const trimmedEmail = email.trim();

    dispatch(
      registerRequest({
        name,
        email: trimmedEmail,
        password,
        role: assignRole(trimmedEmail),
      }),
    );

    form.resetFields();
  };

  return (
    <Form form={form} layout="vertical" onFinish={onFinish}>
      <Form.Item
        name="name"
        label="Full Name"
        rules={[{ required: true, message: "Please enter your full name" }]}
      >
        <Input placeholder="Enter your full name" />
      </Form.Item>

      <Form.Item
        name="email"
        label="Email"
        rules={[
          {
            required: true,
            type: "email",
            message: "Please enter a valid email",
          },
        ]}
      >
        <Input placeholder="Enter your email" />
      </Form.Item>

      <Form.Item
        name="password"
        label="Password"
        rules={[{ required: true, message: "Please enter your password" }]}
      >
        <Password placeholder="Enter your password" />
      </Form.Item>

      <Button type="primary" shape="round" block onClick={() => form.submit()}>
        Sign Up
      </Button>
    </Form>
  );
};
