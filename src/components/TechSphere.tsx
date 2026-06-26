"use client";

import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

// A simple deterministic pseudo-random generator to keep rendering pure
function seededRandom(seed: number) {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

function FiberOptics() {
  const pointsRef = useRef<THREE.Points>(null);
  const [count, setCount] = React.useState(2000); // Default for SSR
  
  React.useEffect(() => {
    setCount(window.innerWidth < 768 ? 1500 : 3000);
  }, []);
  
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
        pos[i * 3] = (seededRandom(i * 3 + 1) - 0.5) * 20; // X
        pos[i * 3 + 1] = (seededRandom(i * 3 + 2) - 0.5) * 20; // Y
        pos[i * 3 + 2] = (seededRandom(i * 3 + 3) - 0.5) * 10; // Z
    }
    return pos;
  }, [count]);

  const velocities = useMemo(() => {
    const v = new Float32Array(count);
    for (let i = 0; i < count; i++) {
        v[i] = 0.02 + seededRandom(i + 4) * 0.05;
    }
    return v;
  }, [count]);

  useFrame(() => {
    if (pointsRef.current) {
        const attr = pointsRef.current.geometry.attributes.position;
        for (let i = 0; i < count; i++) {
            let y = attr.getY(i);
            y -= velocities[i];
            if (y < -10) y = 10;
            attr.setY(i, y);
        }
        attr.needsUpdate = true;
        pointsRef.current.rotation.y += 0.001;
    }
  });

  return (
    <Points ref={pointsRef} positions={positions} stride={3}>
      <PointMaterial
        transparent
        color="#22d3ee"
        size={0.05}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.3}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

export function TechSphere() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-[#050505]">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <color attach="background" args={["#050505"]} />
        <ambientLight intensity={0.5} />
        
        <FiberOptics />
        
        {/* Glow Layers */}
        <mesh position={[0, 0, -2]}>
            <planeGeometry args={[20, 20]} />
            <meshBasicMaterial color="#a855f7" transparent opacity={0.03} />
        </mesh>

        <fog attach="fog" args={["#050505", 2, 12]} />
      </Canvas>
    </div>
  );
}
