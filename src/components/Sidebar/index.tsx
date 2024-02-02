// Sidebar.tsx
import React from "react";
import { Layout, Menu } from "antd";
import {
  PhoneOutlined,
  PlayCircleOutlined,
  UsergroupAddOutlined,
  MessageOutlined,
} from "@ant-design/icons";

const { Sider } = Layout;

const Sidebar: React.FC = () => {
  return (
    <Sider width={200} theme="light">
      <Menu mode="vertical" theme="light">
        <Menu.Item key="1" icon={<PhoneOutlined />}>
          Phone Number Setup
        </Menu.Item>
        <Menu.Item key="2" icon={<PlayCircleOutlined />}>
          Opt-in Flow Setup
        </Menu.Item>
        <Menu.Item key="3" icon={<UsergroupAddOutlined />}>
          Add & Import Contacts
        </Menu.Item>
        <Menu.Item key="4" icon={<MessageOutlined />}>
          Send Your First Text!
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default Sidebar;
