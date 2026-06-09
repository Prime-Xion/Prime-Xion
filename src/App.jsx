import { useState } from 'react';
import './App.css';

function App() {
  const [view, setView] = useState('home');

  const getDownloadLink = (viewName, version) => {
    switch (viewName) {
      case 'FPS':
        return version === 1 ? "/FPS%20VBL.json" : "/ffs%20v5.json";
      case 'PING':
        return version === 1 ? "/ffs%20v4.2.json" : "/ffs%20v3.json";
      case 'Prime Xion':
        return version === 1 ? "/specflag.json" : "/FFlags.json"; 
      case 'Extreme':
        return version === 1 ? "/Crrusher.json" : "/ryuk.json";
      default:
        return "#";
    }
  };

  return (
    <div className="main-wrapper">
      <nav className="navbar">
        <h1 className="logo" onClick={() => setView('home')} style={{cursor: 'pointer'}}>Prime Xion</h1>
        <ul className="nav-links">
          <li className="nav-item" onClick={() => setView('home')}>الرئيسية</li>
        </ul>
      </nav>

      {view !== 'home' && (
        <div className="back-container">
          <button className="back-btn" onClick={() => setView('home')}>← العودة للرئيسية</button>
        </div>
      )}
      
      <main className="content">
        {view === 'home' ? (
          <>
            <h2 className="welcome-text">مرحباً بك في منصة Prime Xion</h2>
            <div className="card-full" onClick={() => setView('ROBLOX')}>
              <h3>تطبيقات Roblox</h3>
              <p>استكشف أفضل الأدوات لتحسين تجربة اللعب</p>
            </div>
            <div className="card-grid">
              <div className="card" onClick={() => setView('FPS')}><h3>FastFlag - زيادة FPS</h3></div>
              <div className="card" onClick={() => setView('PING')}><h3>FastFlag - تخفيف PING</h3></div>
              <div className="card" onClick={() => setView('Prime Xion')}><h3>FastFlag - Prime Xion</h3></div>
              <div className="card" onClick={() => setView('Extreme')}><h3>FastFlag - Extreme</h3></div>
            </div>
          </>
        ) : view === 'ROBLOX' ? (
          <div className="card-grid">
            <div className="card">
              <h3>Bloxstrap</h3>
              <a href="https://bloxstraplabs.com" target="_blank" rel="noreferrer" className="download-btn">للتحميل</a>
            </div>
            <div className="card">
              <h3>Fishstrap</h3>
              <a href="https://www.fishstrap.app" target="_blank" rel="noreferrer" className="download-btn">للتحميل</a>
            </div>
          </div>
        ) : (
          <>
            <h2 className="welcome-text">إعدادات {view}</h2>
            <div className="card-grid">
              <div className="card">
                <h3>{view} - ملف 1</h3>
                <a href={getDownloadLink(view, 1)} download className="download-btn">تحميل</a>
              </div>
              <div className="card">
                <h3>{view} - ملف 2</h3>
                <a href={getDownloadLink(view, 2)} download className="download-btn">تحميل</a>
              </div>
            </div>
          </>
        )}
      </main>

      <footer className="footer">
        <p>حقوق النشر محفوظة لدى Prime Xion &copy; 2026</p>
      </footer>
    </div>
  );
}

export default App;