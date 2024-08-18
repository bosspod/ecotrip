import React, { useState } from 'react';
import { Layout, Menu, Drawer, Button } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { useLocation, Link } from "react-router-dom";
import "../dashboard.css";
import logo from "../assets/logo.png";
import ButtonConnect from './ButtonConnect';

const { Header } = Layout;

function Navigator() {
  const [drawerVisible, setDrawerVisible] = useState(false);
  const location = useLocation();

  const showDrawer = () => {
    setDrawerVisible(true);
  };

  const closeDrawer = () => {
    setDrawerVisible(false);
  };

  return (
    <Header
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        background: "rgba(255, 255, 255, 0.8)",
        borderRadius: "0 0 10px 10px",
        zIndex: 1000,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "15px",
        borderBottom: "0.5px solid lightgray"
      }}
    >
      <Link to="/main">
        <img src={logo} width={"80px"} style={{ marginTop: "25px" }} alt="Logo" />
      </Link>
      <div>
        <Button
          type="primary"
          style={{ fontWeight: "300", backgroundColor: "green" }}
          icon={<MenuOutlined />}
          onClick={showDrawer}
        >
        </Button>
        <Drawer
          title="Eco Trip"
          placement="left"
          onClose={closeDrawer}
          open={drawerVisible}
        >
          <Menu mode="vertical" selectedKeys={[location.pathname]}>
            <h2 style={{ fontWeight: "400" }}>Menu</h2>
            <Menu.Item key="/main">
              <Link to="/main">Home</Link>
            </Menu.Item>
            <Menu.Item key="/ecodashboard">
              <Link to="/ecodashboard">Eco Dashboard</Link>
            </Menu.Item>
            <Menu.Item key="/chatbot">
              <Link to="/chatbot">Chatbot</Link>
            </Menu.Item>
            <hr style={{border:"0.5px solid lightgray"}}></hr>
            <h2 style={{ fontWeight: "400" , marginTop: '40px'}}>Legal</h2>
            <Menu.Item key="/terms-conditions">
              <Link to="https://stationgroup.co.th/terms-conditions">Terms Conditions</Link>
            </Menu.Item>
            <Menu.Item key="/privacy-policy">
              <Link to="https://stationgroup.co.th/privacy-policy">Privacy Policy</Link>
            </Menu.Item>
            <hr style={{border:"0.5px solid lightgray"}}></hr>
            <h2 style={{ fontWeight: "400" , marginTop: '40px'}}>Web3 Wallet</h2>
            <div style={{ textAlign: "center", marginTop: "40px", marginBottom: "20px"}}>
              <ButtonConnect/>
            </div>
            <hr style={{border:"0.5px solid lightgray"}}></hr>
            <div style={{ fontWeight: "400" , marginTop: '40px', textAlign: 'center'}}>
            <p style={{marginBottom: '30px'}}>Developed by</p>
            <Link to="https://podsawee.com">Podsawee W.</Link> & <Link to="#">Nattgarni A.</Link>
            </div>
            <div style={{ fontWeight: "400" , marginTop: '40px', textAlign: 'center', marginBottom: '40px'}}>
            <p style={{marginBottom: '30px'}}>UX&UI Design by</p>
            <Link to="https://podsawee.com">Podsawee W.</Link> & <Link to="#">Naruebet A.</Link>
            </div>
            <hr style={{border:"0.5px solid lightgray"}}></hr>
            <div style={{ fontWeight: "400" , marginTop: '40px', textAlign: 'center'}}>
            <p>Copyright© 2024. The Ponzi.</p>
            </div>
          </Menu>
        </Drawer>
      </div>
    </Header>
  );
}

export default Navigator;
