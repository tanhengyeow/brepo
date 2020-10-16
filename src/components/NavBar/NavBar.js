import React from "react";
import { Layout, Menu } from "antd";
import { HomeOutlined, PlusOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";
const { Sider } = Layout;

const NavBar = () => {
  const history = useHistory();
  const handleSelection = (key) => {
    switch (key) {
      case "1":
        history.push("/");
        break;
      case "2":
        history.push("/newBook");
        break;
      default:
        return undefined;
    }
    return undefined;
  };

  return (
    <Sider breakpoint="lg">
      <Menu
        theme="dark"
        selectedKeys={[]}
        onClick={({ key }) => handleSelection(key)}
      >
        <Menu.Item key="1" icon={<HomeOutlined />}>
          Home
        </Menu.Item>
        <Menu.Item key="2" icon={<PlusOutlined />}>
          Add book
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default NavBar;
