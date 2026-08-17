import { Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "../components/layout/AppLayout/Main";
import { AdminLayout } from "../components/layout/AdminLayout";
import Home from "../pages/customer/Home";
import AboutUs from "../pages/customer/AboutUs";
import Careers from "../pages/customer/Careers";
import CartPage from "../pages/customer/Cart";
import { CheckoutPage } from "../pages/customer/Checkout";
import TrackOrder from "../pages/customer/TrackOrder";
import ScrollToTop from "../utils/scrollToTop";
import CustomerProfile from "../pages/customer/Profile";
import { PageTransitionLoader } from "../components/common/PageTransitionLoader";
import ProtectedRoute from "./ProtectedRoute";
import { lazy, Suspense } from "react";
import { Spin } from "antd";
import BuyCooky from "../pages/customer/BuyCooky";
const AdminOverview = lazy(() => import("../pages/admin/Overview/index"));
const AdminInventory = lazy(() => import("../pages/admin/Inventory/index"));
const AdminOrders = lazy(() => import("../pages/admin/Orders"));
const UserHistory = lazy(() => import("../pages/admin/UserHistory"));

const AppRoute = () => {
  return (
    <>
      <ScrollToTop />
      <PageTransitionLoader>
        <Routes>
          {/* STOREFRONT LAYOUT GROUP */}
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="buy-cooky" element={<BuyCooky />} />
            <Route path="about" element={<AboutUs />} />
            <Route path="track-order" element={<TrackOrder />} />
            <Route path="careers" element={<Careers />} />
            <Route path="cart" element={<CartPage />} />
            <Route path="checkout" element={<CheckoutPage />} />
            <Route path="profile" element={<CustomerProfile />} />
          </Route>

          {/* ADMIN WORKSPACE LAYOUT GROUP */}
       <Route element={<ProtectedRoute role="admin" />}>
  <Route
    path="/admin"
    element={
      <Suspense fallback={<Spin size="large" style={{ display: "flex", justifyContent: "center", padding: 48 }} />}>
        <AdminLayout />
      </Suspense>
    }
  >
    <Route index element={<AdminOverview />} />
    <Route path="inventory" element={<AdminInventory />} />
    <Route path="orders" element={<AdminOrders />} />
    <Route path="history" element={<UserHistory />} />
  </Route>
</Route>

          {/* Catch-all fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </PageTransitionLoader>
    </>
  );
};

export default AppRoute;
