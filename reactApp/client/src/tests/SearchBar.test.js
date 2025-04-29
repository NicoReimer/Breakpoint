// src/tests/SearchBar.test.js
import { render, screen } from '@testing-library/react';
import SearchBar from '../components/SearchBar';

describe('SearchBar', () => {
  test('zeigt das Suchfeld an', () => {
    render(<SearchBar />);
    
    const input = screen.getByPlaceholderText(/search/i);
    expect(input).toBeInTheDocument();
  });
});
