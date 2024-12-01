import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Article from '../components/Article';
import Footer from '../components/Footer';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <Sidebar />
      <div className="main-content">
        <Header />
        <div className="articles-section">
          <Article title="Getting Started with the Wiki" content="This article will guide you on how to use the Wiki system..." />
          <Article title="Advanced Wiki Features" content="Learn about advanced features available in this Wiki..." />
          <Article title="Editing Permissions" content="Understand the permissions required for editing..." />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Home;