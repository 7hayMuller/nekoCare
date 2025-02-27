import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';


import Button from './Button';

describe('Button Component', () => {
  it('deve renderizar corretamente com o texto passado', () => {
    render(<Button text="Clique aqui" />);
    expect(screen.getByText('Clique aqui')).toBeInTheDocument();
  });

  it('deve chamar a função ao ser clicado', () => {
    const mockFn = vi.fn(); // Criar uma função mock
    render(<Button text="Clique aqui" onClick={mockFn} />);
    
    const button = screen.getByText('Clique aqui');
    fireEvent.click(button);

    expect(mockFn).toHaveBeenCalledTimes(1);
  });
});
