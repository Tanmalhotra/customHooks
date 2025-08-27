🧭 Adventure Dashboard

A small React + TypeScript playground showcasing custom hooks (useCounter, useBoolean, useCycle, useClickAnywhere) inside a fun interactive adventure theme.

Instead of boring hook demos, the hooks power a mini game-like dashboard:

⭐ Crystals (useCounter) → Collect or spend crystals as your treasure.

🌙 Day/Night Mode (useBoolean) → Toggle between day and night worlds.

🌲🏜️🌊⛰️ Environments (useCycle) → Travel across Forest, Desert, Ocean, and Mountains.

👣 Exploration Map (useClickAnywhere) → Every click anywhere on the page moves you forward on your journey.

🚀 Features

useCounter → Counts your crystals, with +, -, and reset.

useBoolean → Toggles day/night mode.

useCycle → Cycles through environments with unique emoji and descriptions.

useClickAnywhere → Tracks global clicks and turns them into steps on a map.

🛠️ Installation & Running

Clone the repo and install dependencies:

git clone https://github.com/your-username/adventure-dashboard.git
cd adventure-dashboard
npm install
npm start


Or open directly in GitHub Codespaces → run npm start.
The dev server will open in your browser.

📂 Project Structure
src/
 ├── hooks/
 │    ├── useBoolean.ts
 │    ├── useClickAnywhere.ts
 │    ├── useCounter.ts
 │    └── useCycle.ts
 ├── App.tsx        # main interactive dashboard
 ├── App.css        # styles
 └── index.tsx

🎮 How to Play

Collect Crystals → Press + Collect to gather treasures.

Spend or Reset → Use crystals wisely.

Travel Environments → Click Travel to move between Forest, Desert, Ocean, Mountain.

Day/Night Mode → Toggle 🌙/☀️ to change world atmosphere.

Explore Map → Click anywhere on the page to walk forward on the map.

Each step adds 👣 footprints.

Reach the end of the path → start a new journey.

🔮 Demo Preview

Forest 🌲 → “Mysterious trees full of hidden life.”

Desert 🏜️ → “Endless dunes under a scorching sun.”

Ocean 🌊 → “Waves, corals, and deep secrets.”

Mountain ⛰️ → “High peaks with fresh cold air.”

🧩 Hooks API
useCounter(initialValue?: number)

Manages numeric state with increment, decrement, reset.

useBoolean(initialValue?: boolean)

Boolean toggle with toggle, setTrue, setFalse.

useCycle(...values)

Cycles through a list of values, returning [current, next].

useClickAnywhere(handler)

Calls handler whenever a click happens anywhere in the document.

✨ Future Ideas

Different map styles per environment (green forest path, yellow desert trail, etc).

Simple animations (bouncing crystals, fading environments).

Save progress in localStorage.
