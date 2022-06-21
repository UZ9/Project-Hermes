import { render, screen } from '@testing-library/react';
import App from './App';

test('navbar renders no matter what', async () => {
  render(<App />);

  expect(await screen.findByText(/PROJECT/)).toBeInTheDocument();
  expect(await screen.findByText(/HERMES/)).toBeInTheDocument();
});
