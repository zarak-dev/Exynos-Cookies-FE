import { Form, Input, Button, message } from "antd";
import { useDispatch } from "react-redux";
import {
  ADMIN_EMAIL,
  registerUser,
  setOpenAuthModal,
} from "@/store/slices/authSlice";
import type { SignUpFormValues } from "@/components/common/Auth/Types";

const { Password } = Input;

const assignRole = (email: string) =>
  email.toLowerCase() === ADMIN_EMAIL.toLowerCase() ? "admin" : "customer";

export const SignUpForm = () => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  const onFinish = ({ name, email, password }: SignUpFormValues) => {
    const trimmedEmail = email.trim();

    dispatch(
      registerUser({
        name,
        email: trimmedEmail,
        password,
        role: assignRole(trimmedEmail),
      }),
    );

    message.success("Account created");
    form.resetFields();
    dispatch(setOpenAuthModal(false));
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
        Sign Up
      </Button>
    </Form>
  );
};
