import colors from "../../styles/colors";
import styled from "styled-components";
import { useState } from "react";
import { Layout, Input, Space, Typography, Divider, Avatar, Flex } from "antd";
import {
  convoslogo,
  chat,
  people,
  helo,
  line2,
  dashboard,
} from "../../Assets/icons/";

const { Header } = Layout;
// const { Title, Paragraph, Text, Link } = Typography;

const NavbarContainer = styled(Header)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${colors.white};
  position: static;
  width: 100%;
  height: 64px;
  z-index: 1000;
  margin: 0;
  padding: 0;
`;

const Wrapper = styled("span")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: center;
`;

const Navbar = () => {
  const [totalConnections, settotalConnections] = useState(0);
  const [totalMessages, setTotalMessages] = useState(0);
  return (
    <NavbarContainer>
      <Space.Compact>
        <img src={convoslogo} alt="logo" />
        <Space>
          <img src={people} alt="logo" />
          {totalConnections}
          <Divider type="vertical" />
          <img src={chat} alt="logo" />
          {totalMessages} in july
        </Space>
      </Space.Compact>

      <Input
        placeholder="Search Convos"
        style={{
          width: "448px",
          height: "40px",
          padding: "10px",
          borderRadius: "100px",
          textAlign: "center",
          backgroundColor: colors.WhiteLilac,
        }}
      />
      <Flex
        justify="space-between"
        style={{ width: "150px", marginRight: "10px" }}
      >
        <img src={helo} alt="logo" />
        <img src={dashboard} alt="logo" />
        <img src={line2} alt="logo" />
        <Avatar>H</Avatar>
      </Flex>
    </NavbarContainer>
  );
};

export default Navbar;
