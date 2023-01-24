import React from 'react';
import { useParams } from 'react-router-dom';
import './Display.css';

export default function Display() {
  const { r, g, b } = useParams();
  return (
    <div className="display-container" style={{ backgroundColor: `rgb(${r}, ${g}, ${b}` }}>
      <p>
        rgb({r}, {g}, {b})
      </p>
    </div>
  );
}
