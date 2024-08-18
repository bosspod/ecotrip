import React, { useState, useEffect } from "react";
import { Modal, Image, Typography, Rate, Progress, Button } from "antd";
import BookingModal from "./BookingView";

const { Title, Text } = Typography;

export default function DetailsView({ hotel, onClose }) {
  const [currentPercent, setCurrentPercent] = useState(0);
  const [showBooking, setShowBooking] = useState(false);

  useEffect(() => {
    if (hotel) {
      const timer = setInterval(() => {
        setCurrentPercent((prevPercent) => {
          if (prevPercent >= hotel.ecoScore) {
            clearInterval(timer);
            return hotel.ecoScore;
          }
          return prevPercent + 1;
        });
      }, 6);

      return () => clearInterval(timer);
    }
  }, [hotel]);

  if (!hotel) return null;

  return (
    <>
      <Modal
        title={hotel.name}
        open={true}
        onCancel={onClose}
        footer={null}
      >
        <Image
          src={hotel.image}
          alt={hotel.name}
          style={{ width: "100%", marginBottom: 16 }}
        />
        <Rate disabled defaultValue={hotel.rating} />{" "}
        <Text>({hotel.ecoRating} Eco Rating)</Text>
        <p>
          {hotel.location} • {hotel.distance}
        </p>
        <div className="eco-pd">
          <Progress
            strokeColor="#4CAF50"
            type="circle"
            percent={currentPercent}
            format={(percent) => `${percent}%`}
          />
          <div>
            <Title level={5}>Overview Dashboard</Title>
            <ul>
              {hotel.features && hotel.features.length > 0 ? (
                hotel.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))
              ) : (
                <li>No features available</li>
              )}
            </ul>
          </div>
        </div>
        <Text>{hotel.description}</Text>
        <Button
          className="button-text"
          style={{
            backgroundColor: "white",
            color: "green",
            borderColor: "green",
            marginRight: "10px",
            width: "100%",
            marginTop: 23,
          }}
          onClick={() => setShowBooking(true)}
        >
          Select Room
        </Button>
      </Modal>

      {showBooking && (
        <BookingModal
          hotel={hotel}
          onClose={() => setShowBooking(false)}
        />
      )}
    </>
  );
}
