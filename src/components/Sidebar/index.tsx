import colors from "../../styles/colors";
import styled from "styled-components";
import { sideBarProcessList } from "../../constants/stubs";
import { Layout, Menu, Typography } from "antd";

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
`;

interface NumberIconProps {
  number: string;
}

const NumberIcon = ({ number }: NumberIconProps) => {
  return (
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
              icon={
                <RoundCircle>
                  <Text style={{ fontWeight: "700" }}>{item.id}</Text>
                </RoundCircle>
              }
              style={{
                padding: "0 0 0 12px",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontSize: "16px",
                  fontWeight: "600",
                  lineHeight: "22px",
                  textAlign: "center",
                }}
              >
                {item.title}
              </Text>
            </Menu.Item>
          );
        })}
      </Menu>
    </Sider>
  );
};

export default Sidebar;
