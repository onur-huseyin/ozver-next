"use client";

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { useLanguage } from '@/contexts/LanguageContext';

// Dynamic import to avoid SSR issues
const MapContainer = dynamic(() => import('react-leaflet').then((mod) => mod.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import('react-leaflet').then((mod) => mod.TileLayer), { ssr: false });
const Marker = dynamic(() => import('react-leaflet').then((mod) => mod.Marker), { ssr: false });
const Popup = dynamic(() => import('react-leaflet').then((mod) => mod.Popup), { ssr: false });

interface DarkMapProps {
  className?: string;
  height?: string;
}

export function DarkMap({ className = "", height = "h-64" }: DarkMapProps) {
  const [isClient, setIsClient] = useState(false);
  const [L, setL] = useState<any>(null);
  const { t } = useLanguage();

  useEffect(() => {
    setIsClient(true);
    
    // Dynamic import of Leaflet only on client side
    import('leaflet').then((leaflet) => {
      setL(leaflet.default);
      
      // Fix for default markers in Leaflet
      delete (leaflet.default.Icon.Default.prototype as unknown as { _getIconUrl: unknown })._getIconUrl;
      leaflet.default.Icon.Default.mergeOptions({
        iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
        iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
      });
    });
  }, []);

  if (!isClient || !L) {
    return (
      <div className={`${height} ${className} rounded-xl flex items-center justify-center`} style={{ backgroundColor: '#0C1324' }}>
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-gray-600 to-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
          </div>
          <p className="text-white font-medium">Harita Yükleniyor...</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`${height} ${className} rounded-xl overflow-hidden`} style={{ backgroundColor: '#0C1324' }}>
      <MapContainer
        center={[41.07543541528625, 28.640934576427586]} // Özver Mekatronik coordinates
        zoom={15}
        style={{ height: '100%', width: '100%', backgroundColor: '#0C1324' }}
        className="rounded-xl"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
        />
        <Marker 
          position={[41.07543541528625, 28.640934576427586]}
          icon={L.divIcon({
            className: 'custom-marker',
            html: `
              <div style="
                background: #2C308D;
                width: 30px;
                height: 30px;
                border-radius: 50% 50% 50% 0;
                transform: rotate(-45deg);
                border: 3px solid white;
                box-shadow: 0 2px 10px rgba(0,0,0,0.3);
                display: flex;
                align-items: center;
                justify-content: center;
              ">
                <div style="
                  transform: rotate(45deg);
                  color: white;
                  font-weight: bold;
                  font-size: 16px;
                ">Ö</div>
              </div>
            `,
            iconSize: [30, 30],
            iconAnchor: [15, 30]
          })}
        >
          <Popup>
            <div className="text-center p-2"> 
              <h3 className="font-bold text-gray-800 mb-2">Özver Mekatronik</h3>
              <p className="text-sm text-gray-600 mb-3">İstanbul, Türkiye</p>
              <a
                href="https://www.google.com/maps/place/%C3%96zver+Mekatronik+San.ve+Tic.Ltd.%C5%9Eti./@41.0754354,28.6409346,17z/data=!3m1!4b1!4m6!3m5!1s0x14b5594986af72fb:0x3758183031c7f13e!8m2!3d41.0754314!4d28.6435095!16s%2Fg%2F11fd454gjj?entry=ttu&g_ep=EgoyMDI1MDkwMy4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-medium px-3 py-2 rounded-lg transition-colors duration-200"
              >
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
                <span className="text-white">{t('contact.directions')}</span>
              </a>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}