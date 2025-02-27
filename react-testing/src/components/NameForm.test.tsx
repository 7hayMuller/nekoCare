import { render, screen, fireEvent } from '@testing-library/react';
import NameForm from './NameForm';
import { describe, it, expect } from 'vitest';

describe('NameForm Component', () => {
  it('should update the text when typing in the input', () => {
    render(<NameForm />);
    
    const input = screen.getByPlaceholderText('Enter your name');

    fireEvent.change(input, { target: { value: 'Thayná' } });
    expect(screen.getByText('Name: Thayná')).toBeInTheDocument();
  });
});
