// src/components/WikiArticle.js
import React from 'react';
import PropTypes from 'prop-types';
import styles from './WikiArticle.module.css';

function WikiArticle({ title, content }) {
  return (
    <div className={styles.card}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.content}>{content}</p>
    </div>
  );
}

WikiArticle.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
};

export default WikiArticle;
