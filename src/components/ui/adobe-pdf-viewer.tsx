'use client';

import { useEffect, useRef } from "react";
import * as BABYLON from "@babylonjs/core";
import "@babylonjs/loaders"; // GLTF loader
// import { ZoomIn, ZoomOut } from "lucide-react";

interface BabylonViewerProps {
  modelUrl: string; // GLTF/OBJ dosya URL
  width?: string;
  height?: string;
  onModelLoaded?: () => void;
}

export default function BabylonViewer({ modelUrl, width = "100%", height = "600px", onModelLoaded }: BabylonViewerProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const cameraRef = useRef<BABYLON.ArcRotateCamera | null>(null);
  const sceneRef = useRef<BABYLON.Scene | null>(null);

  // const zoomIn = () => {
  //   if (cameraRef.current) {
  //     cameraRef.current.radius = Math.max(cameraRef.current.radius - 1, 1);
  //     console.log('Zoom In - New radius:', cameraRef.current.radius);
  //   }
  // };

  // const zoomOut = () => {
  //   if (cameraRef.current) {
  //     cameraRef.current.radius = Math.min(cameraRef.current.radius + 1, 20);
  //     console.log('Zoom Out - New radius:', cameraRef.current.radius);
  //   }
  // };

  useEffect(() => {
    if (!canvasRef.current) return;

    const engine = new BABYLON.Engine(canvasRef.current, true);
    const scene = new BABYLON.Scene(engine);
    sceneRef.current = scene;

    // Arka plan rengi ayarla
    scene.clearColor = BABYLON.Color4.FromHexString("#18181B");

    // Kamera
    const camera = new BABYLON.ArcRotateCamera("camera", Math.PI / 2, Math.PI / 2.5, 5, BABYLON.Vector3.Zero(), scene);
    camera.attachControl(canvasRef.current, true);
    cameraRef.current = camera;
    console.log('Camera initialized with radius:', camera.radius);

    // Model yükleme
    BABYLON.SceneLoader.Append("", modelUrl, scene, function () {
      scene.createDefaultCameraOrLight(true, true, true);
      // Model yüklendiğinde callback'i çağır
      if (onModelLoaded) {
        onModelLoaded();
      }
    });

    engine.runRenderLoop(() => {
      scene.render();
    });

    // Resize
    window.addEventListener("resize", () => engine.resize());

    return () => {
      engine.dispose();
    };
  }, [modelUrl, onModelLoaded]);

  return (
    <div className="relative w-full h-full">
      <canvas ref={canvasRef} style={{ width, height }} />
    </div>
  );
}
