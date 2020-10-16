import React, { useEffect, useState } from 'react';

import './styles.css';
import mapMarker from '../../images/map-marker.svg';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiPlus } from 'react-icons/fi';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

import happyMapIcon from '../../utils/mapIcon'
import api from '../../services/api';

interface Image {
  id: number;
  url: string;
}
interface OrphanagesDTO {
  id: number;
  about: string;
  instructions: string;
  latitude: number;
  longitude: number;
  name: string;
  open_on_weekends: boolean;
  opening_hours: string;
  images: Image[]
}

const OrphanagesMaps: React.FC = () => {
  const [orphanages, setOrphanages ] = useState<OrphanagesDTO[]>([]);

  useEffect(() => {
    async function loadOrphanages() {
      const response = await api.get('/orphanages');
      setOrphanages(response.data)
    }
    loadOrphanages();
  }, [])

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
        {orphanages.map(orphanage => (
          <Marker 
            position={[orphanage.latitude, orphanage.longitude]} 
            icon={happyMapIcon} 
            key={orphanage.id}>
            <Popup
              closeButton={false}
              minWidth={240}
              maxWidth={240}
              className="map-popup"s
            >
              {orphanage.name}
              <Link to={`/orphanage/${orphanage.id}`}>
                <FiArrowRight size={20} color="#FFF" />
              </Link>
            </Popup>
          </Marker>
        ))}
       
        </Map>
      <Link to="/orphanage/create" className="create-orphanage">
        <FiPlus size={32} color="#FFF" />
      </Link>
    </div>
  );
};

export default OrphanagesMaps;
