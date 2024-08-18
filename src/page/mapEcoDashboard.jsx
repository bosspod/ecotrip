import React, { useState, useEffect } from 'react';
import '../dashboard.css';
import { useParams } from 'react-router-dom';
import MapView from '../components/MapView';
import Navigator from '../components/Navgator';
import DetailsView from '../components/DetailsView';
import { hotels } from '../data/hotelData';

function MapEcoDashboard() {
  const [selectedHotel, setSelectedHotel] = useState(null);
  const { hotelName } = useParams();

  useEffect(() => {
    if (hotelName) {
      const hotel = hotels.find(h => h.name === hotelName);
      console.log(hotel)
      setSelectedHotel(hotel);
    }
  }, [hotelName]);

  const handleMarkerClick = (hotelId) => {
    const hotel = hotels.find(h => h.id === hotelId);
    console.log(hotel)
    setSelectedHotel(hotel);
  };

  return (
    <section>
      <div style={{ height: '100vh', width: '100vw', position: 'relative' }}>
        <Navigator />
        <MapView onMarkerClick={handleMarkerClick} />
        {selectedHotel ? (
          <DetailsView
            hotel={selectedHotel}
            onClose={() => setSelectedHotel(null)}
          />
        ) : (
          <div style={{ textAlign: 'center', paddingTop: '20px' }}>
            <h2>Please select a hotel to view details</h2>
          </div>
        )}
      </div>
    </section>
  );
}

export default MapEcoDashboard;
