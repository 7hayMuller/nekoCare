import { router } from '@/routes';
import { render, screen } from '@testing-library/react';
import { RouterProvider } from 'react-router-dom';
import { describe, expect, it } from 'vitest';

describe('NekoCare routes', () => {
  it('should render the homepage', () => {
    render(<RouterProvider router={router} />);
    expect(screen.getByText(/NekoCare/i)).toBeInTheDocument();
  });
});
