import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import { AuthModal } from "../../../common/Auth";
import { CartDrawer } from "../../../common/CartDrawer";
import { LayoutWrapper, ContentArea } from "./styles";
import InfoBar from "../../../common/InfoBar";

const MainLayout: React.FC = () => {
  return (
    <LayoutWrapper>
      <Header />
      <ContentArea>
        {/* Dynamically renders whatever page you are currently on */}
        <Outlet />
      </ContentArea>
      <AuthModal />
      <CartDrawer />
      <InfoBar />
      <Footer />
    </LayoutWrapper>
  );
};

export default MainLayout;
