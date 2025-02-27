import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

import Counter from './Counter';

describe('Counter Component', () => {
  it('deve iniciar com contador em 0', () => {
    render(<Counter />);
    expect(screen.getByText('Contador: 0')).toBeInTheDocument();
  });

  it('deve incrementar o contador ao clicar no botão', () => {
    render(<Counter />);
    const button = screen.getByText('Incrementar');

    fireEvent.click(button);
    expect(screen.getByText('Contador: 1')).toBeInTheDocument();

    fireEvent.click(button);
    expect(screen.getByText('Contador: 2')).toBeInTheDocument();
  });
});
