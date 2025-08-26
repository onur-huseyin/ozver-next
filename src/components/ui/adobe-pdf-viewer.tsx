'use client';

import { useEffect, useRef } from "react";
import * as BABYLON from "@babylonjs/core";
import "@babylonjs/loaders"; // GLTF loader

interface BabylonViewerProps {
  modelUrl: string; // GLTF/OBJ dosya URL
  width?: string;
  height?: string;
}

export default function BabylonViewer({ modelUrl, width = "100%", height = "600px" }: BabylonViewerProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const engine = new BABYLON.Engine(canvasRef.current, true);
    const scene = new BABYLON.Scene(engine);

    // Kamera
    const camera = new BABYLON.ArcRotateCamera("camera", Math.PI / 2, Math.PI / 2.5, 5, BABYLON.Vector3.Zero(), scene);
    camera.attachControl(canvasRef.current, true);

    // Işık
    const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0), scene);

    // Model yükleme
    BABYLON.SceneLoader.Append("", modelUrl, scene, function () {
      scene.createDefaultCameraOrLight(true, true, true);
    });

    engine.runRenderLoop(() => {
      scene.render();
    });

    // Resize
    window.addEventListener("resize", () => engine.resize());

    return () => {
      engine.dispose();
    };
  }, [modelUrl]);

  return <canvas ref={canvasRef} style={{ width, height }} />;
}
