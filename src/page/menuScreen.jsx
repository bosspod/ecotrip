import React, { useState } from "react";
import {
  Card,
  Row,
  Col,
  Button,
  Avatar,
  Tag,
  Carousel,
  Input
} from "antd";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook
import "../index.css";
import { Link } from "react-router-dom";
import Navigator from "../components/Navgator";
import Chatbot from "../assets/chatbot.png";
import Ecodashboard from "../assets/dashboard.png";
import Certificate from "../assets/certificate.png";
import Contactus from "../assets/contactus.png";

const { Search } = Input;

const certificateData = [
  {
    title: "0x1Dd839F0da29171C7....",
    description: "Great Hotel !",
    expiry: "01/08/2024",
    imageUrl: "/assets/img/user/2.jpg",
  },
  {
    title: "0x2Ac334f0da34117A7....",
    description:
      "i can't believe , this application help me find a eco friendly hotels !",
    expiry: "02/08/2024",
    imageUrl: "/assets/img/user/1.jpg",
  },
];

const recommendHotelData = [
  {
    title: "Green-Oasis-Resort",
    description: "Eco-Friendly | Thailand",
    review: "4.5 (2k review)",
    imageUrl: "/assets/img/hotel/2/hotel.jpg",
  },
  {
    title: "Super-Premier-Hotel",
    description: "Eco-Friendly | Thailand",
    review: "4.8 (3k review)",
    imageUrl: "/assets/img/hotel/1/hotel.jpg",
  },
  {
    title: "Eco-Skyline-Hotel",
    description: "Eco-Friendly | Thailand",
    review: "4.7 (1.5k review)",
    imageUrl: "/assets/img/hotel/3/hotel.jpg",
  },
];

const MenuScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredHotels, setFilteredHotels] = useState(recommendHotelData);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSearch = (value) => {
    setSearchQuery(value);
    if (value.trim()) {
      navigate(`/chatbot?query=${encodeURIComponent(value.trim())}`); // Navigate to ChatbotScreen with the query
    }
  };

  return (
    <section>
      <Navigator />
      <div style={{ margin: "20px", paddingTop: "70px" }}>
        <div>
          <Search
            addonBefore="Eco-ChatBot"
            placeholder="Enter a prompt here."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onSearch={handleSearch}
            style={{ width: '100%' }}
          />
        </div>
        <div style={{ margin: "20px", paddingTop: "10px" }}>
          <Row gutter={16} style={{ textAlign: "center" }}>
            <Col className="gutter-row" span={6}>
              <Link to="/chatbot">
                <img
                  style={{ width: "50px", height: "50px" }}
                  src={Chatbot}
                ></img>
              </Link>
            </Col>
            <Col className="gutter-row" span={6}>
              <Link to="/ecodashboard">
                <img
                  style={{ width: "50px", height: "50px" }}
                  src={Ecodashboard}
                ></img>
              </Link>
            </Col>
            <Col className="gutter-row" span={6}>
              <Link to="#">
                <img
                  style={{ width: "50px", height: "50px" }}
                  src={Certificate}
                ></img>
              </Link>
            </Col>
            <Col className="gutter-row" span={6}>
              <a href="https://podsawee.com/">
                <img
                  style={{ width: "50px", height: "50px" }}
                  src={Contactus}
                ></img>
              </a>
            </Col>
          </Row>
        </div>
        <div>
          <h2 style={{ fontWeight: "300" }}>Recommend Hotels </h2>
          <Carousel autoplay autoplaySpeed={2000} dots={false}>
            {filteredHotels.map((hotel, index) => (
              <div key={index}>
                <Row gutter={[16, 16]}>
                  <Col span={24}>
                    <Card
                      cover={<img alt="example" src={hotel.imageUrl} />}
                      actions={[
                        // eslint-disable-next-line react/jsx-key
                        <Button
                          className="button-text"
                          type="primary"
                          style={{
                            backgroundColor: "green",
                            color: "white",
                            borderColor: "green",
                          }}
                          href={`/ecodashboard/${hotel.title.replace(/\s+/g, '-')}`}
                        >
                          See Eco Details
                        </Button>,
                      ]}
                    >
                      <Card.Meta
                        style={{ fontWeight: "200" }}
                        title={hotel.title}
                        description={hotel.description}
                      />
                      <div className="review">
                        <Tag color="green">{hotel.review}</Tag>
                      </div>
                    </Card>
                  </Col>
                </Row>
              </div>
            ))}
          </Carousel>
        </div>
        <div>
          <h2 style={{ fontWeight: "300" }}>Recent Review</h2>
          <Row gutter={[16, 16]}>
            {certificateData.map((item, index) => (
              <Col span={24} key={index}>
                <Card>
                  <Card.Meta
                    avatar={<Avatar src={item.imageUrl} />}
                    title={item.title}
                    description={
                      <>
                        <div>{item.description}</div>
                        <div>{item.expiry}</div>
                      </>
                    }
                  />
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </section>
  );
};

export default MenuScreen;
