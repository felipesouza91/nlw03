import React from 'react';

import './styles.css';
import mapMarker from '../../images/map-marker.svg';
import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';
import { Map, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const OrphanagesMaps: React.FC = () => {
  return (
    <div id="page-maps">
      <aside>
        <header>
          <img src={mapMarker} alt="   Happy" />
          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita </p>
        </header>
        <footer>
          <strong>Rio de janeiro</strong>
          <span>Rio de janeiro</span>
        </footer>
      </aside>
      <Map
        center={[-22.9070902, -43.2037672]}
        zoom={15}
        style={{ width: '100%', height: '100%' }}
      >
        <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      </Map>
      <Link to="" className="create-orphanage">
        <FiPlus size={32} color="#FFF" />
      </Link>
    </div>
  );
};

export default OrphanagesMaps;
