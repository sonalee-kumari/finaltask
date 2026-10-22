import React from 'react';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main style={{ padding: '40px 24px', textAlign: 'center' }}>
        <h1>Welcome to My App</h1>
        <p style={{ marginTop: '12px', color: '#6b7280' }}>
          Resize your browser window to test Desktop, Tablet, and Mobile layouts.
        </p>
      </main>
    </div>
  );
}

export default App;