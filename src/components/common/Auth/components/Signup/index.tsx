import { Form, Input, Button, message } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  ADMIN_EMAIL,
  registerUser,
} from "../../../../../store/slices/authSlice";
import { type RootState } from "../../../../../store";
import type { SignUpFormValues } from "../../Types";
import { setOpenAuthModal } from "../../../../../store/slices/authSlice";

export const SignUpForm = () => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  const users = useSelector((state: RootState) => state.auth.registeredUsers);

  const onFinish = ({ name, email, password }: SignUpFormValues) => {
    email = email.trim();

    const exists = users.some(
      (value) => value.email.toLowerCase() === email.toLowerCase(),
    );
    if (exists) {
      return message.error("Email already registered");
    }

    dispatch(
      registerUser({
        name,
        email,
        password,
        role:
          email.toLowerCase() === ADMIN_EMAIL.toLowerCase()
            ? "admin"
            : "customer",
      }),
    );

    message.success("Account created");
    form.resetFields();
    dispatch(setOpenAuthModal(false));
  };

  return (
    <Form layout="vertical" onFinish={onFinish}>
      <Form.Item name="name" label="Full Name" rules={[{ required: true }]}>
        <Input />
      </Form.Item>

      <Form.Item
        name="email"
        label="Email"
        rules={[{ required: true, type: "email" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="password"
        label="Password"
        rules={[{ required: true, min: 6 }]}
      >
        <Input.Password />
      </Form.Item>
      {/* Use onClick instead of htmlType */}
      <Button type="primary" shape="round" htmlType="submit" block>
        Sign Up
      </Button>
    </Form>
  );
};
