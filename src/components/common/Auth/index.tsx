import { useState } from "react";
import { Button, Modal, Space} from "antd";
import { useDispatch, useSelector } from "react-redux";
import { type RootState } from "../../../store";
import { setOpenAuthModal } from "../../../store/slices/authSlice";

import { LoginForm } from "./components/Login";
import { SignUpForm } from "./components/Signup";


export const AuthModal = () => {
  const dispatch = useDispatch();

  const isOpen = useSelector((state: RootState) => state.auth.isAuthModalOpen);

  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <Modal
      open={isOpen}
      footer={
        <>
          {isSignUp ? <SignUpForm /> : <LoginForm />}

          <Space align="center">
            {isSignUp ? "Already have an account? " : "New here? "}

            <Button type="link" onClick={() => setIsSignUp(!isSignUp)}>
              Click to {isSignUp ? "Login" : "Sign Up"}
            </Button>
          </Space>
        </>
      }
      centered
      closable={false}
      title={isSignUp ? "Create Account" : "Welcome Back"}
      onCancel={() => {
        dispatch(setOpenAuthModal(false));
        setIsSignUp(false);
      }}
    />
  );
};
