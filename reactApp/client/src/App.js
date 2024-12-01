import React, { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Article from './components/Article';
import Footer from './components/Footer';
import CategorySection from './components/CategorySection';
import Login from './components/Login';  // Importiere die Login-Komponente
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Zustand, ob der Benutzer eingeloggt ist

  return (
    <div className="App">
      <Header />
      <div className="App-content">
        <Sidebar />
        <main>
          {isLoggedIn ? (
            // Wenn der Benutzer eingeloggt ist, zeige die Artikel-Seite
            <>
              <CategorySection />
              <Article />
              <button className="create-article-btn">Artikel erstellen</button>
            </>
          ) : (
            // Wenn der Benutzer nicht eingeloggt ist, zeige das Login-Formular
            <Login setIsLoggedIn={setIsLoggedIn} />
          )}
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;