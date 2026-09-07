import React from 'react';

export type GrainientProps = {
  color1?: string;
  color2?: string;
  color3?: string;
  timeSpeed?: number;
  colorBalance?: number;
  warpStrength?: number;
  warpFrequency?: number;
  warpSpeed?: number;
  warpAmplitude?: number;
  blendAngle?: number;
  blendSoftness?: number;
  rotationAmount?: number;
  noiseScale?: number;
  grainAmount?: number;
  grainScale?: number;
  grainAnimated?: boolean;
  contrast?: number;
  gamma?: number;
  saturation?: number;
  centerX?: number;
  centerY?: number;
  zoom?: number;
};

export const Grainient: React.FC<GrainientProps> = ({
  color1 = "#ccc3c0",
  color2 = "#706760",
  color3 = "#eed5b9",
  grainAmount = 0.1,
  timeSpeed = 0.25,
}) => {
  // Use timeSpeed to calculate animation duration. 
  // Lower timeSpeed = longer duration. Default 0.25 = 20s.
  const duration = 5 / (timeSpeed || 0.25);

  return (
    <div style={{
      position: 'absolute',
      inset: 0,
      backgroundColor: color1,
      overflow: 'hidden',
      zIndex: -1,
    }}>
      {/* Container for the blurred blobs */}
      <div style={{
        position: 'absolute',
        inset: '-20%', // bleed out to prevent hard edges when blurred
        filter: 'blur(100px)',
        transform: 'translateZ(0)', // Force GPU acceleration
      }}>
        {/* Blob 1 */}
        <div style={{
          position: 'absolute',
          top: '20%',
          left: '20%',
          width: '60vw',
          height: '60vw',
          backgroundColor: color2,
          borderRadius: '50%',
          opacity: 0.8,
          animation: `blobMove1 ${duration * 1.5}s ease-in-out infinite alternate`,
        }} />
        
        {/* Blob 2 */}
        <div style={{
          position: 'absolute',
          top: '50%',
          right: '10%',
          width: '50vw',
          height: '50vw',
          backgroundColor: color3,
          borderRadius: '50%',
          opacity: 0.8,
          animation: `blobMove2 ${duration}s ease-in-out infinite alternate`,
        }} />
        
        {/* Blob 3 (mix of color1 & color2 to add complexity) */}
        <div style={{
          position: 'absolute',
          bottom: '10%',
          left: '30%',
          width: '70vw',
          height: '70vw',
          backgroundColor: color2,
          borderRadius: '50%',
          opacity: 0.6,
          animation: `blobMove3 ${duration * 1.2}s ease-in-out infinite alternate`,
        }} />
      </div>

      {/* Noise grain overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        opacity: grainAmount * 1.5,
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.2' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        pointerEvents: 'none',
        mixBlendMode: 'multiply'
      }} />

      <style>
        {`
          @keyframes blobMove1 {
            0% { transform: translate(0, 0) scale(1); }
            33% { transform: translate(10vw, 15vh) scale(1.2); }
            66% { transform: translate(-15vw, 5vh) scale(0.9); }
            100% { transform: translate(5vw, -10vh) scale(1.1); }
          }
          @keyframes blobMove2 {
            0% { transform: translate(0, 0) scale(1); }
            33% { transform: translate(-20vw, -10vh) scale(1.1); }
            66% { transform: translate(10vw, 15vh) scale(1.3); }
            100% { transform: translate(-5vw, -5vh) scale(1); }
          }
          @keyframes blobMove3 {
            0% { transform: translate(0, 0) scale(1); }
            33% { transform: translate(15vw, -20vh) scale(0.9); }
            66% { transform: translate(-10vw, -10vh) scale(1.2); }
            100% { transform: translate(10vw, 5vh) scale(1.1); }
          }
        `}
      </style>
    </div>
  );
}
