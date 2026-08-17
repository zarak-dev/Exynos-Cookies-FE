import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Dropdown, Badge, message, Image, Typography, Tooltip } from "antd";
import {
  UserOutlined,
  ShoppingOutlined,
  MenuOutlined,
  AimOutlined,
} from "@ant-design/icons";

import {
  setOpenAuthModal,
  logoutUser,
} from "../../../../store/slices/authSlice";
import { type RootState } from "../../../../store";
import logoSvg from "../../../../assets/images/exynos-favicon.png";

import {
  StyledHeader,
  LogoContainer,
  LogoWrapper,
  LeftMenu,
  LeftMenuWrapper,
  RightMenu,
  RightMenuWrapper,
  MobileMenuButton,
  IconActions,
  ActionIcon,
  CartIcon,
  TrackIcon,
  StyledDrawer,
  MobileDrawerMenu,
} from "./styles";

const { Text } = Typography;

const Header: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const totalCartCount = useSelector(
    (state: RootState) => state.cart.items.length,
  );
  const { isLoggedIn, user } = useSelector((state: RootState) => state.auth);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  const userMenu = {
    items: [
      {
        key: "profile-info",
        label: (
          <Text>
            Hi, <Text strong>{user?.name}</Text>
          </Text>
        ),
        disabled: true,
      },
      { type: "divider" as const },
      ...(user?.role === "admin"
        ? [
            {
              key: "admin-dashboard",
              label: <Text>Admin Dashboard</Text>,
              onClick: () => navigate("/admin"),
            },
          ]
        : [
            {
              key: "customer-profile",
              label: "👤 My Profile & Orders",
              onClick: () => navigate("/profile"),
            },
          ]),
      { type: "divider" as const },
      {
        key: "logout",
        label: "Log Out",
        danger: true,
        onClick: () => {
          dispatch(logoutUser());
          message.info("Logged out!");
          navigate("/");
        },
      },
    ],
  };

  const leftNavItems = [
    { key: "/", label: "Home" },
    { key: "/buy-cooky", label: "Buy Cooky" },
  ];

  const rightNavItems = [
    { key: "/about", label: "Our Story" },
    { key: "/careers", label: "Careers" },
  ];

  const handleNavClick = (path: string) => {
    navigate(path);
    setIsMobileMenuOpen(false);
  };

  return (
    <StyledHeader>
      <MobileMenuButton
        icon={<MenuOutlined />}
        onClick={() => setIsMobileMenuOpen(true)}
      />

      <LeftMenuWrapper>
        <LeftMenu
          mode="horizontal"
          selectedKeys={[location.pathname]}
          items={leftNavItems}
          onClick={(info) => handleNavClick(info.key)}
          disabledOverflow
        />
      </LeftMenuWrapper>

      <LogoWrapper>
        <LogoContainer to="/">
          <Image
            src={logoSvg}
            alt="logo"
            preview={false}
            width={140}
            style={{ maxWidth: "110px" }}
          />
        </LogoContainer>
      </LogoWrapper>

      <RightMenuWrapper>
        <RightMenu
          mode="horizontal"
          selectedKeys={[location.pathname]}
          items={rightNavItems}
          onClick={(info) => handleNavClick(info.key)}
          disabledOverflow
        />
      </RightMenuWrapper>

      <IconActions>
        <Tooltip title="Track Order">
          <TrackIcon onClick={() => navigate("/track-order")}>
            <AimOutlined />
          </TrackIcon>
        </Tooltip>

        <Badge
          count={totalCartCount}
          size="small"
          offset={[2, 0]}
          color="#fa8c16"
        >
          <CartIcon onClick={() => navigate("/cart")}>
            <ShoppingOutlined />
          </CartIcon>
        </Badge>

        {isLoggedIn ? (
          <Dropdown
            menu={userMenu}
            placement="bottomRight"
            arrow
            trigger={["click"]}
          >
            <ActionIcon>
              <UserOutlined />
            </ActionIcon>
          </Dropdown>
        ) : (
          <ActionIcon onClick={() => dispatch(setOpenAuthModal(true))}>
            <UserOutlined />
          </ActionIcon>
        )}
      </IconActions>

      <StyledDrawer
        title={<Text strong>Menu</Text>}
        placement="left"
        onClose={() => setIsMobileMenuOpen(false)}
        open={isMobileMenuOpen}
        size={250}
      >
        <MobileDrawerMenu
          mode="vertical"
          selectedKeys={[location.pathname]}
          items={[...leftNavItems, ...rightNavItems]}
          onClick={(info) => handleNavClick(info.key)}
        />
      </StyledDrawer>
    </StyledHeader>
  );
};

export default Header;
