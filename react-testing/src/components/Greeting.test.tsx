import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Greeting from './Greeting';

describe('Greeting Component', () => {
  it('should render with the correct name', () => {
    render(<Greeting name="Thayná" />);
    
    expect(screen.getByText('Hello, Thayná!')).toBeInTheDocument();
  });
});
