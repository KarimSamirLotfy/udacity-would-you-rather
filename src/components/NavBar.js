import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Layout, Menu, Breadcrumb, Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import Title from "antd/lib/skeleton/Title";

const { Header, Content, Footer } = Layout;
const Nav = ({}) => {
  const location = useLocation();
  return (
    <div>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
        <Menu.Item>
          <Title>{location.pathname || "Home"}</Title>
        </Menu.Item>

        <Menu.Item>
          <Link to="/">Questions</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/AddQuestion">ADD You Question</Link>
        </Menu.Item>

      </Menu>
    </div>
  );
};

export default Nav;
