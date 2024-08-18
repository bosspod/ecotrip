import React, { useState } from 'react';
import { Modal, Card, Typography } from 'antd';
import PaymentButton from './PaymentButton';

const { Title, Text } = Typography;

function BookingModal({ hotel, onClose }) {
  const [selectedRoom, setSelectedRoom] = useState(null);

  const selectHandle = (room) => {
    console.log(room);
    setSelectedRoom(room.type);
  };

  return (
    <Modal
      title="Booking"
      open={true}
      onCancel={onClose}
      footer={null}
      width={400}
    >
      <Title level={3}>{hotel.name}</Title>
      {hotel.rooms.map((room, index) => (
        <Card
          key={index}
          style={{
            marginBottom: 16,
            cursor: 'pointer',
            border: selectedRoom === room.type ? '2px solid green' : '1px solid #f0f0f0',
            boxShadow: selectedRoom === room.type ? '0 0 10px rgba(0, 0, 0, 0.2)' : 'none'
          }}
          onClick={() => selectHandle(room)}
        >
          <img
            src={room.image} // Assuming room object has an image property
            alt={room.type}
            style={{ width: '100%', marginBottom: 8 }}
          />
          <Title level={4}>{room.type}</Title>
          <Text>${room.price}</Text>
          <Text style={{ float: 'right' }}>{room.people} People</Text>
          {room.type === 'Superior Room' && (
            <Text type="success" style={{ display: 'block' }}>Recommend</Text>
          )}
        </Card>
      ))}
      <PaymentButton selectedRoom={selectedRoom} />
    </Modal>
  );
}

export default BookingModal;
