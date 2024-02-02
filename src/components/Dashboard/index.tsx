import { useState } from "react";
import styled from "styled-components";
import colors from "../../styles/colors";
import { BoxModalList } from "../../constants/stubs";
import { BoxModalProps } from "../../constants/types";
import { Button, Divider, Flex, Modal, Typography } from "antd";

const { Text } = Typography;

const RoundCircle = styled("span")`
  border-radius: 50%;
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.BlackRussian};
  color: ${colors.white};
`;

const BoxModal = ({ icon, title }: BoxModalProps) => {
  return (
    <Flex
      vertical
      align="center"
      gap={"10px"}
      style={{
        width: "612px",
        padding: "24px 16px 24px 16px",
        borderRadius: "16px",
        backgroundColor: colors.WhiteLilac,
      }}
    >
      <Text style={{ color: colors.Comet }}>{icon}</Text>
      <Text
        style={{
          fontFamily: "Source Sans Pro",
          fontSize: "16px",
          fontWeight: "700",
          lineHeight: "19px",
          color: colors.Comet,
        }}
      >
        {title}
      </Text>
    </Flex>
  );
};

const Dashboard = () => {
  const [open, setOpen] = useState(true);

  return (
    <>
      <Button type="primary" onClick={() => setOpen(true)}>
        Open Modal
      </Button>
      <Modal
        title="Phone Number Setup / Setup"
        centered
        open={open}
        closeIcon={false}
        width={720}
        onCancel={() => setOpen(false)}
        footer={null}
      >
        <Divider />
        <Flex gap={"12px"}>
          <RoundCircle>
            <Text
              style={{
                fontSize: "24px",
                fontWeight: "500",
                lineHeight: "28px",
                color: colors.white,
              }}
            >
              1
            </Text>
          </RoundCircle>
          <Flex vertical gap={"12px"} style={{ width: "612px" }}>
            <Text
              style={{
                fontSize: "24px",
                fontWeight: "500",
              }}
            >
              Are you getting a new number or enabling your existing one?
            </Text>

            {BoxModalList.map((item) => {
              return <BoxModal icon={item.icon} title={item.title} />;
            })}

            <Divider />
            <Flex>
              <Text style={{ textAlign: "center" }}>
                If you’re moving from MyRepChat to Convos, click “I want to
                text-enable my existing phone number”. Keeping your MyRepChat
                account and adding Convos features on top? Link MyRepChat
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Modal>
    </>
  );
};

export default Dashboard;
