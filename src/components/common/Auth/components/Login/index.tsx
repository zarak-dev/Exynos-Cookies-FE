import { Form, Button, message, Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  ADMIN_EMAIL,
  loginUser,
  setOpenAuthModal,
} from "../../../../../store/slices/authSlice";
import { type RootState } from "../../../../../store";
import type { LoginFormValues } from "../../Types";

const SECRET_ADMIN_PASS = "123456";

export const LoginForm = () => {
  const dispatch = useDispatch();

  const users = useSelector((state: RootState) => state.auth.registeredUsers);

  const onFinish = ({ email, password }: LoginFormValues) => {
    email = email.trim();

    if (email.toLowerCase() === ADMIN_EMAIL.toLowerCase()) {
      if (password !== SECRET_ADMIN_PASS) {
        return message.error("Invalid admin password");
      }

      dispatch(loginUser({ name: "System Admin", email }));
      dispatch(setOpenAuthModal(false));

      return message.success("Logged in");
    }

    const user = users.find(
      (user) =>
        user.email.toLowerCase() === email.toLowerCase() &&
        user.password === password,
    );

    if (!user) {
      return message.error("Invalid email or password");
    }

    dispatch(loginUser(user));
    dispatch(setOpenAuthModal(false));

    message.success(`Welcome back, ${user.name}!`);
  };

  return (
    <Form layout="vertical" onFinish={onFinish}>
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

      <Button type="primary" shape="round" htmlType="submit" block>
        Login
      </Button>
    </Form>
  );
};
