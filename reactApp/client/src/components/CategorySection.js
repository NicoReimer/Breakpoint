import React from 'react';
import './CategorySection.css';

const categories = [
  { name: 'Games', icon: '🎮' },
  { name: 'Filme', icon: '🎬' },
  { name: 'Serien', icon: '📺' },
  { name: 'Technologie', icon: '💻' },
];

function CategorySection() {
  return (
    <div className="category-section">
      <h2>Kategorien</h2>
      <div className="category-list">
        {categories.map((category) => (
          <div key={category.name} className="category-card">
            <div className="category-icon">{category.icon}</div>
            <p>{category.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategorySection;