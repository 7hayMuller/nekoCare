import { describe, it, expect, vi } from 'vitest';
import UserFetcher from './UserFetcher';
import { render, screen, waitFor } from '@testing-library/react';

describe('UserFetcher Component', () => {
  it('should fetch and display user name', async () => {
    vi.stubGlobal('fetch', () => Promise.resolve({
      json: () => Promise.resolve({ name: 'John Doe' }),
    }));

    render(<UserFetcher />);
    
    expect(screen.getByText('Loading...')).toBeInTheDocument();
    
    await waitFor(() => expect(screen.getByText('John Doe')).toBeInTheDocument());
  });
});