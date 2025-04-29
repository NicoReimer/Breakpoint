// src/tests/ArticleCard.test.js
import { render, screen } from '@testing-library/react';
import ArticleCard from '../components/ArticleCard';

describe('ArticleCard', () => {
  test('zeigt Titel und Inhalt korrekt an', () => {
    render(<ArticleCard title="Testtitel" content="Testinhalt" />);
    
    expect(screen.getByText('Testtitel')).toBeInTheDocument();
    expect(screen.getByText('Testinhalt')).toBeInTheDocument();
  });
});
