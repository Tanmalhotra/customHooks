import { useState } from 'react';
import useCounter from './hooks/useCounter';
import useBoolean from './hooks/useBoolean';
import useCycle from './hooks/useCycle';
import useClickAnywhere from './hooks/useClickAnywhere';
import './App.css';

export default function App() {
  // Crystals (points)
  const { count: crystals, increment, decrement, reset } = useCounter(0);

  // Day/Night
  const { value: nightMode, toggle: toggleNight } = useBoolean(false);

  // Environments
  const environments = [
    { name: 'Forest', emoji: '🌲', desc: 'Mysterious trees full of hidden life.' },
    { name: 'Desert', emoji: '🏜️', desc: 'Endless dunes under a scorching sun.' },
    { name: 'Ocean', emoji: '🌊', desc: 'Waves, corals, and deep secrets.' },
    { name: 'Mountain', emoji: '⛰️', desc: 'High peaks with fresh cold air.' },
  ];
  const [envIndex, cycleEnvironment] = useCycle(0, 1, 2, 3);
  const environment = environments[envIndex];

  // Steps → walking progress
  const [steps, setSteps] = useState(0);
  const maxSteps = 20; // one "map" length
  useClickAnywhere(() => setSteps((prev) => (prev + 1) % (maxSteps + 1)));

  return (
    <div className={`app ${nightMode ? 'night' : 'day'}`}>
      <header className="header">
        <h1>🧭 Adventure Dashboard</h1>
        <button className="toggle-btn" onClick={toggleNight}>
          {nightMode ? '☀️ Day Mode' : '🌙 Night Mode'}
        </button>
      </header>

      <main>
        {/* Environment */}
        <section className="card environment-card">
          <h2>{environment.emoji} {environment.name}</h2>
          <p>{environment.desc}</p>
          <button onClick={cycleEnvironment}>Travel to Next Land ➡️</button>
        </section>

        {/* Crystals */}
        <section className="card crystals-card">
          <h2>⭐ Crystals</h2>
          <p className="crystals">
            {Array.from({ length: Math.max(crystals, 0) }).map((_, i) => (
              <span key={i}>💎</span>
            ))}
          </p>
          <div className="controls">
            <button onClick={increment}>+ Collect</button>
            <button onClick={decrement}>- Spend</button>
            <button onClick={reset}>Reset</button>
          </div>
        </section>

        {/* Steps with Map Progress */}
        <section className="card steps-card">
          <h2>Exploration Map</h2>
          <div className="map">
            {Array.from({ length: maxSteps }).map((_, i) => (
              <span
                key={i}
                className={`tile ${i < steps ? 'active' : ''}`}
              >
                {i < steps ? '👣' : '·'}
              </span>
            ))}
          </div>
          <p>{steps}/{maxSteps} steps</p>
          <small>(click anywhere to walk)</small>
        </section>
      </main>
    </div>
  );
}
