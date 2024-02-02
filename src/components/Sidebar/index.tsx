import colors from "../../styles/colors";
import styled from "styled-components";
import { sideBarProcessList } from "../../constants/stubs";
import { Flex, Layout, Menu, Typography } from "antd";

const { Sider } = Layout;
const { Text } = Typography;

const RoundCircle = styled("span")`
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.Mischka};
  margin-right: 12px;
`;

interface SideBarItemProps {
  number: string;
  title: string;
}

const SideBarItem = ({ number, title }: SideBarItemProps) => {
  return (
    <Flex>
      <RoundCircle>
        <Text
          style={{
            fontFamily: "Calps",
            fontSize: "14px",
            fontWeight: "700",
            textAlign: "center",
          }}
        >
          {number}
        </Text>
      </RoundCircle>
      <Text
        style={{
          fontSize: "16px",
          fontWeight: "600",
          lineHeight: "22px",
          textAlign: "center",
        }}
      >
        {title}
      </Text>
    </Flex>
  );
};

const Sidebar = () => {
  return (
    <Sider width={240} theme="light">
      <Menu mode="vertical" theme="light">
        {sideBarProcessList.map((item) => {
          return (
            <Menu.Item
              key={item.id}
              style={{
                padding: "0 0 0 12px",
                alignItems: "center",
              }}
            >
              <SideBarItem number={item.id} title={item.title} />
            </Menu.Item>
          );
        })}
      </Menu>
    </Sider>
  );
};

export default Sidebar;
