import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { type RootState } from "../store";
import { type UserRole } from "../store/slices/authSlice";

interface ProtectedRouteProps {
  role?: UserRole;
}

const ProtectedRoute = ({ role }: ProtectedRouteProps) => {
  const { isLoggedIn, user } = useSelector((state: RootState) => state.auth);

  if (!isLoggedIn) return <Navigate to="/" replace />;
  if (role && user?.role !== role) return <Navigate to="/" replace />;

  return <Outlet />;
};

export default ProtectedRoute;
