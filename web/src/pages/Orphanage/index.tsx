import React, { useEffect, useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { FiClock, FiInfo } from 'react-icons/fi';
import { Map, Marker, TileLayer } from 'react-leaflet';

import happyMapIcon from '../../utils/mapIcon'


import './styles.css';
import SideBar from '../../components/SideBar/inde';
import api from '../../services/api';
import { useParams } from 'react-router-dom';
import { imageOverlay } from 'leaflet';

interface OrphanagesParams {
  id: string;
}

interface Image {
  id: number;
  url: string;
}
interface Orphanage {
  about: string;
  instructions: string;
  latitude: number;
  longitude: number;
  name: string;
  open_on_weekends: boolean;
  opening_hours: string;
  images: Image[]
}

const Orphanage: React.FC = () => {
  const [orphanage, setOrphanage] = useState<Orphanage>();
  const params = useParams<OrphanagesParams>();
  

  useEffect(() => {
    async function loadOrphanage() {
      const response = await api.get(`/orphanages/${params.id}`);
      setOrphanage(response.data);
    }
    loadOrphanage();
  }, [params.id])

  if(!orphanage) {
    return <p>Carregando</p>
  } else {
    return (
      <div id="page-orphanage">
        <SideBar />
  
        <main>
          <div className="orphanage-details">
            <img
              src={orphanage.images[0].url}
              alt={orphanage.name}
              />
  
            <div className="images">
              {orphanage.images.map(image => (
                 <button className="active" type="button" key={image.id}>
                 <img
                   src={image.url}
                   alt={orphanage.name}
                 />
               </button>
              ))} 
            </div>
  
            <div className="orphanage-details-content">
              <h1>{orphanage.name}</h1>
              <p>
                {orphanage.about}
              </p>
  
              <div className="map-container">
                <Map
                  center={[orphanage.longitude,orphanage.latitude]}
                  zoom={16}
                  style={{ width: '100%', height: 280 }}
                  dragging={false}
                  touchZoom={false}
                  zoomControl={false}
                  scrollWheelZoom={false}
                  doubleClickZoom={false}
                >
                  <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />

                  <Marker
                    interactive={false}
                    icon={happyMapIcon}
                    position={[orphanage.longitude,orphanage.latitude]}
                  />
                </Map>
  
                <footer>
                  <a href="">Ver rotas no Google Maps</a>
                </footer>
              </div>
  
              <hr />
  
              <h2>Instruções para visita</h2>
              <p>
                {orphanage.instructions}
              </p>
  
              <div className="open-details">
                <div className="hour">
                  <FiClock size={32} color="#15B6D6" />
                  Segunda à Sexta <br />
                  {orphanage.opening_hours}
                </div>
               {orphanage.open_on_weekends ? (
                  <div className="open-on-weekends">
                    <FiInfo size={32} color="#39CC83" />
                    Atendemos <br />
                    fim de semana
                  </div>
               ) : (
                <div className="open-on-weekends dont-open">
                  <FiInfo size={32} color="#FF669D" />
                  Não Atendemos <br />
                  fim de semana
                </div>
               )}
              </div>
  
              <button type="button" className="contact-button">
                <FaWhatsapp size={20} color="#FFF" />
                Entrar em contato
              </button>
            </div>
          </div>
        </main>
      </div>
    );
  }

  
};

export default Orphanage;
