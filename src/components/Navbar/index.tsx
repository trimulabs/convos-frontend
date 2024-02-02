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
const { Text } = Typography;

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

const RoundCircle = styled("div")`
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.WhiteLilac};
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
          <Text style={{ fontSize: "12px" }}>{totalConnections}</Text>
          <Divider type="vertical" />
          <img src={chat} alt="logo" />
          <Text style={{ fontSize: "12px" }}>{totalMessages} in july</Text>
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
        style={{ width: "250px", marginRight: "10px", gap: "10px" }}
      >
        <img src={helo} alt="logo" />
        <img src={dashboard} alt="logo" />
        <RoundCircle>
          <img src={line2} alt="logo" />
        </RoundCircle>
        <Avatar size={40}>H</Avatar>
      </Flex>
    </NavbarContainer>
  );
};

export default Navbar;
