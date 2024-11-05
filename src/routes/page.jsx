import React from 'react';
import { useLocation } from 'react-router-dom';

export default function MainPage() {
  const location = useLocation();
  console.log('메인:', location);
  return (
    <div>
      <h1>This is my MainPage</h1>
      <p>MainPage입니다.</p>
    </div>
  );
}
