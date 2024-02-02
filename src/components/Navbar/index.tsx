// Navbar.tsx
import React from "react";
import { Layout, Input, Space } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import styled from "styled-components";

const { Header } = Layout;

const Logo = styled.div`
  width: 120px; // Adjust the size as needed
  height: 31px;
  background: #fff; // Your background color
  margin-right: 24px;
`;

const Navbar: React.FC = () => {
  return (
    <Header>
      <Logo />
      <Space size="large">
        {/* Start Icons */}
        {/* Place your start icons here */}

        {/* Search Bar */}
        <Input placeholder="Search..." prefix={<SearchOutlined />} />

        {/* End Icons */}
        {/* Place your end icons here */}
      </Space>
    </Header>
  );
};

export default Navbar;
