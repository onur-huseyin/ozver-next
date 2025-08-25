'use client';

import React, { useEffect, useRef, useState } from 'react';
import { RotateCw, Fullscreen, Info } from 'lucide-react';

interface AdobePDFViewerProps {
  pdfUrl: string;
  title: string;
  clientId?: string;
  width?: string | number;
  height?: string | number;
  className?: string;
}

declare global {
  interface Window {
    AdobeDC: {
      View: {
        new (config: { clientId: string; divId: string }): {
          previewFile: (content: unknown, options: Record<string, unknown>) => void;
        };
        enableFilePreviewEvents: () => void;
      };
    };
  }
}

export default function AdobePDFViewer({
  pdfUrl,
  title,
  clientId = '59d82101ca7c4ef3aac48c9a6a3029e9', // Adobe PDF Embed API Client ID'nizi buraya ekleyin
  width = '100%',
  height = '600px',
  className = ''
}: AdobePDFViewerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isEmbedded, setIsEmbedded] = useState(false);

  useEffect(() => {
    // Adobe PDF Embed API script'i layout'ta yüklendi, sadece bekleyelim
    const waitForAdobeDC = () => {
      if (window.AdobeDC) {
        initializeViewer();
        return;
      }

      // Script yüklenene kadar bekle
      const checkAdobeDC = setInterval(() => {
        if (window.AdobeDC) {
          clearInterval(checkAdobeDC);
          initializeViewer();
        }
      }, 100);

      // 10 saniye sonra timeout
      setTimeout(() => {
        clearInterval(checkAdobeDC);
        setError('Adobe PDF Embed API yüklenemedi. Lütfen sayfayı yenileyin.');
        setIsLoading(false);
      }, 10000);
    };

    waitForAdobeDC();
  }, [pdfUrl, clientId]);

  const initializeViewer = () => {
    if (!containerRef.current || !window.AdobeDC) {
      setError('Adobe PDF Embed API henüz yüklenmedi.');
      setIsLoading(false);
      return;
    }

    try {
      // Adobe PDF Embed API'yi başlat
      window.AdobeDC.View.enableFilePreviewEvents();
      
      const adobeDCView = new window.AdobeDC.View({
        clientId: clientId,
        divId: containerRef.current.id || 'adobe-dc-view'
      });

             // 3D PDF'i yükle - Sadece 3D model görüntüleme için optimize edildi
       adobeDCView.previewFile({
         content: { location: { url: pdfUrl } },
         metaData: { fileName: title }
       }, {
         embedMode: 'SIZED_CONTAINER',
         showDownloadPDF: false,
         showPrintPDF: false,
         showLeftHandPanel: false,
         showAnnotationTools: false,
         showBookmarks: false,
         showThumbnails: false,
         showFullScreen: true,
         showZoomControl: true,
         showPageControls: true,
         showSearch: false,
         showSecondaryToolbar: false,
         showToolbar: true,
         showViewerPreferences: false,
         showDocumentActions: false,
         showDownload: false,
         showPrint: false,
         showShare: false
       });

      setIsEmbedded(true);
      setIsLoading(false);
    } catch (err) {
      console.error('Adobe PDF Viewer başlatılırken hata:', err);
      setError('PDF viewer başlatılamadı. Lütfen tekrar deneyin.');
      setIsLoading(false);
    }
  };

  const handleFullscreen = () => {
    if (containerRef.current) {
      if (!document.fullscreenElement) {
        containerRef.current.requestFullscreen();
      } else {
        document.exitFullscreen();
      }
    }
  };

  if (isLoading) {
    return (
      <div className={`flex items-center justify-center ${className}`} style={{ width, height }}>
        <div className="text-center">
          <div className="w-32 h-32 bg-gradient-to-br from-[#464646] to-[#18181B] rounded-full flex items-center justify-center mx-auto mb-6">
            <RotateCw className="w-16 h-16 text-white animate-spin" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-4">3D Model Yükleniyor</h3>
          <p className="text-gray-400 mb-6">3D model hazırlanıyor...</p>
          <div className="flex justify-center space-x-4">
            <div className="w-3 h-3 bg-[#464646] rounded-full animate-bounce"></div>
            <div className="w-3 h-3 bg-[#464646] rounded-full animate-bounce delay-100"></div>
            <div className="w-3 h-3 bg-[#464646] rounded-full animate-bounce delay-200"></div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={`flex items-center justify-center ${className}`} style={{ width, height }}>
        <div className="text-center">
          <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <Info className="w-8 h-8 text-red-400" />
          </div>
          <h3 className="text-xl font-bold text-white mb-2">3D Model Yüklenemedi</h3>
          <p className="text-gray-400 mb-4">{error}</p>
          <div className="space-y-2">
            <p className="text-sm text-gray-500">
              3D model içeren PDF dosyası yüklenemedi. Lütfen dosyayı kontrol edin.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`${className}`} style={{ width, height }}>
      {/* 3D Model Header */}
      <div className="flex items-center justify-between mb-4 p-4 bg-[#18181B] rounded-lg border border-[#464646]">
        <div className="flex items-center space-x-4">
          <h3 className="text-lg font-semibold text-white">{title}</h3>
          <span className="text-sm text-gray-400">3D Model Viewer</span>
        </div>

        <div className="flex items-center space-x-2">
          <button
            onClick={handleFullscreen}
            className="p-2 bg-[#464646] text-white rounded-lg hover:bg-[#5a5a5a] transition-colors duration-300"
            title="Tam Ekran 3D Görüntüleme"
          >
            <Fullscreen className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Adobe PDF Embed Container */}
      <div 
        ref={containerRef}
        id="adobe-dc-view"
        className="w-full h-full bg-white rounded-lg overflow-hidden border border-[#464646]"
        style={{ minHeight: '500px' }}
      >
        {!isEmbedded && (
          <div className="flex items-center justify-center h-full">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#464646] rounded-full flex items-center justify-center mx-auto mb-4">
                <Info className="w-8 h-8 text-white" />
              </div>
              <p className="text-gray-600">PDF yükleniyor...</p>
            </div>
          </div>
        )}
      </div>

      {/* 3D Model Info */}
      <div className="mt-4 p-4 bg-[#18181B] rounded-lg border border-[#464646]">
        <div className="flex items-center justify-between">
          <div>
            <h4 className="text-lg font-semibold text-white mb-2">3D Model Kontrolleri</h4>
            <p className="text-gray-400 text-sm">
              • Mouse ile 3D modeli döndürün • Scroll ile zoom yapın • Sağ tık ile pan yapın • 
              Tam ekran modunda daha detaylı inceleyin
            </p>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-500 mb-1">3D Model Viewer</p>
            <p className="text-xs text-gray-600">Adobe PDF Embed API</p>
          </div>
        </div>
      </div>
    </div>
  );
}
