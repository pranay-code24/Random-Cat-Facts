import { useState } from 'react';
import './App.css';

function App() {
  const [fact, setFact] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchCatFact = async () => {
    setLoading(true);
    try {
      const res = await fetch('https://catfact.ninja/fact');
      const data = await res.json();
      setFact(data.fact);
    } catch (error) {
      setFact('Failed to fetch fact. Try again!');
    }
    setLoading(false);
  };

  return (
    <div className="wrapper">
      <div className="card">
        <h1>🐱 Random Cat Fact</h1>
        <button onClick={fetchCatFact} disabled={loading}>
          {loading ? 'Fetching...' : 'Get Cat Fact'}
        </button>
        <p className="fact">{fact}</p>
      </div>
    </div>
  );
}

export default App;
