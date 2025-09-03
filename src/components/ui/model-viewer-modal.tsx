"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import BabylonViewer from "./adobe-pdf-viewer";

interface ModelViewerModalProps {
  modelUrl: string;
  modelName: string;
  onClose: () => void;
}

export default function ModelViewerModal({ modelUrl, modelName, onClose }: ModelViewerModalProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  // Reset loading state when modelUrl changes
  useEffect(() => {
    setIsLoading(true);
  }, [modelUrl]);

  const handleClose = useCallback(() => {
    onClose();
  }, [onClose]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleClose]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center"
      >
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          onClick={handleClose}
        />

        {/* Modal Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative bg-gray-900 rounded-2xl border border-gray-700 shadow-2xl w-full max-w-6xl h-[90vh] mx-4 overflow-hidden"
        >
          {/* Header */}
          <div className="flex items-center bg-[#0f0f0f]  justify-between b p-6 border-b border-gray-700">
            <div>
              <h2 className="text-2xl font-bold text-white">{modelName}</h2>
              <p className="text-gray-400 text-sm">3D Model Görüntüleyici</p>
            </div>
            <button
              onClick={handleClose}
              className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
            >
              <X className="w-6 h-6 text-gray-400" />
            </button>
          </div>

                     {/* Model Viewer */}
           <div className="relative h-[calc(100%-80px)]">
             {/* Loading Overlay */}
             {isLoading && (
               <div className="absolute inset-0 flex items-center justify-center bg-gray-900 z-10">
                 <div className="text-center">
                   <div className="w-16 h-16 border-4 border-gray-600 border-t-white rounded-full animate-spin mx-auto mb-4"></div>
                   <p className="text-gray-400 text-lg">3D model yükleniyor...</p>
                   <p className="text-gray-500 text-sm mt-2">Lütfen bekleyin</p>
                 </div>
               </div>
             )}

             <BabylonViewer
               modelUrl={modelUrl}
               width="100%"
               height="100%"
               onModelLoaded={() => setIsLoading(false)}
             />
           </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
