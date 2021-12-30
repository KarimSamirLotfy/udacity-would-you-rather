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
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["questions"]}>
        <Menu.Item key="questions">
          <Link to="/">Questions</Link>
        </Menu.Item>
        <Menu.Item key="add">
          <Link to="/AddQuestion">ADD You Question</Link>
        </Menu.Item>
        <Menu.Item key="leaderboards">
          <Link to="/leaderboard">LeaderBoard</Link>
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default Nav;
