import {
  UserOutlined,
  HomeOutlined,
  PlusCircleOutlined,
  ReadOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Layout, Menu, Avatar, Dropdown, theme } from "antd";
import { Outlet, useNavigate } from "react-router-dom";
const { Header, Content, Footer } = Layout;

const App = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const navigate = useNavigate();

  const navigateToProfile = () => navigate("/UserProfile");
  const navigateToLogIn = () => navigate("/LogIn");

  const profileMenu = (
    <Menu>
      <Menu.Item onClick={() => navigateToProfile()}>
        <UserOutlined></UserOutlined> Profile
      </Menu.Item>
      <Menu.Item key="logout">
        <LogoutOutlined /> Logout
      </Menu.Item>
    </Menu>
  );

  return (
    <Layout>
      <Header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1000,
          width: "100%",
          display: "flex",
          alignItems: "center",
          backgroundColor: "#1677FF", // Postavite željenu boju
        }}
      >
        <div className="demo-logo">
          {/* <Avatar
            icon={<ReadOutlined />}
            style={{
              backgroundColor: "transparent",
              color: "white",
              fontSize: "25px",
            }}
          /> */}
        </div>
        <h1
          style={{
            color: "white",
            fontSize: "25px",
            margin: "0",
            padding: "0",
            lineHeight: "1",
          }}
        >
          OfficeEats
        </h1>
        <div
          style={{ marginLeft: "auto", display: "flex", alignItems: "center" }}
        >
          <PlusCircleOutlined
            onClick={() => {
              navigate("/CreateAccount");
            }}
            style={{
              color: "white",
              fontSize: "25px",
              marginRight: "16px",
              backgroundColor: "#1677FF",
              borderRadius: "50%",
              padding: "4px",
              cursor: "pointer",
            }}
          />
          <Dropdown
           menu={profileMenu}
            trigger={["click"]}
            placement="bottom"
          >
            <Avatar
              icon={<UserOutlined />}
              style={{ marginRight: "16px", cursor: "pointer" }}
            />
          </Dropdown>
        </div>
      </Header>
      <Content
        style={{
          padding: "0 20px",
          backgroundColor:"white",
          height:"auto"
        }}
      >
        
          <Outlet />
      </Content>
      {/* <Footer
        style={{
          textAlign: "center",
          position: "relative",
          left: 0,
          bottom: 0,
          width: "100%",
          backgroundColor: "#1677FF",
          padding: "14px 50px",
        }}
      >
        <div className="demo-logo">
          {/* <Avatar
            icon={<ReadOutlined />}
            style={{
              backgroundColor: "transparent",
              color: "#76a5af",
              fontSize: "25px",
            }}
          /> */}
        {/* </div>
        <h1
          style={{
            color: "white",
            fontSize: "25px",
            margin: "0",
            padding: "0",
            lineHeight: "1",
          }}
        >
          OfficeEats
        </h1>
        <span
          style={{
            color: "white",
          }}
        >
          React Cortex Team1 | OfficeEats
        </span>
      </Footer> */} 
    </Layout>
  );
};
export default App;
