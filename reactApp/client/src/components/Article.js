import React from 'react';
import './Article.css';

function Article({ title, content }) {
  return (
    <div className="article-card">
      <h3 className="article-title">{title}</h3>
      <p className="article-content">{content}</p>
    </div>
  );
}

export default Article;