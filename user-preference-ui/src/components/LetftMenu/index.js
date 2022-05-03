import React, { useState } from "react";
import { Button, Menu } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import withRouter from "tools/withRouter";
import { StyledMenu, StyledMenuItem } from "./styles";

const LeftMenu = ({ menuItems }) => {
  const [isMenuCollapsed, setMenuCollapsed] = useState(false);
  const navigate = useNavigate();
  const currPath = window.location.pathname;
  const toggleCollapsed = () => {
    setMenuCollapsed(!isMenuCollapsed);
  };

  return (
    <div>
      <Button
        type="primary"
        onClick={toggleCollapsed}
        style={{ backgroundColor: "black" }}
      >
        {React.createElement(
          isMenuCollapsed ? MenuUnfoldOutlined : MenuFoldOutlined
        )}
      </Button>
      <StyledMenu
        defaultSelectedKeys={[currPath]}
        defaultOpenKeys={[currPath]}
        mode="inline"
        theme="dark"
        inlineCollapsed={!isMenuCollapsed}
      >
        {menuItems.map((menu) => (
          <StyledMenuItem
            key={menu.path}
            icon={<menu.icon />}
            onClick={() => navigate(menu.path)}
          >
            <Button type="link" onClick={() => navigate(menu.path)}>
              {menu.title}
            </Button>
          </StyledMenuItem>
        ))}
        <StyledMenuItem
          key="logout"
          icon={<LogoutOutlined />}
          onClick={() => {
            localStorage.clear();
            navigate("/login");
          }}
        >
          <Button
            type="link"
            onClick={() => {
              localStorage.clear();
              navigate("/login");
            }}
          >
            Logout
          </Button>
        </StyledMenuItem>
      </StyledMenu>
    </div>
  );
};

export default withRouter(LeftMenu);
