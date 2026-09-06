'use client';

import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const POSITION: [number, number] = [43.8402392, 4.3564017];

const markerIcon = L.divIcon({
  className: '',
  html: '<div style="width:14px;height:14px;border-radius:9999px;background:#111827;border:3px solid #ffffff;box-shadow:0 0 0 1px #111827;"></div>',
  iconSize: [14, 14],
  iconAnchor: [7, 7],
});

export default function ContactMap() {
  return (
    <div className="site-map h-72 md:h-80">
      <MapContainer
        center={POSITION}
        zoom={15}
        scrollWheelZoom={false}
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>'
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        />
        <Marker position={POSITION} icon={markerIcon} />
      </MapContainer>
    </div>
  );
}
