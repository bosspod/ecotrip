import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { hotels as hotelData } from '../data/hotelData';

// Import green marker icon from the public folder
import greenMarkerIcon from '../assets/green.svg';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

export default function MapView({ onMarkerClick }) {
  const jejuCenter = [33.45, 126.56];
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    // Simulate fetching data
    const fetchHotels = () => {
      setHotels(hotelData);
    };

    fetchHotels();
  }, []);

  // Define custom green marker icon
  const greenIcon = new L.Icon({
    iconUrl: greenMarkerIcon,
    shadowUrl: markerShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });

  return (
    <MapContainer 
      center={jejuCenter} 
      zoom={9} 
      style={{ height: '100%', width: '100%' }} 
      zoomControl={false} // Disable zoom control
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {hotels.map((hotel) => (
        <Marker 
          key={hotel.id} 
          position={hotel.position} 
          icon={greenIcon} // Use the custom green icon
          eventHandlers={{ click: () => onMarkerClick(hotel.id) }}
        >
          <Popup>{hotel.name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
