import { render, screen } from '@testing-library/react';
import NavbarItems, { navMappings } from './NavbarItems';
import { MemoryRouter } from 'react-router-dom';


test.each(Object.keys(navMappings))("nav element %s is visible", (key) => {
    render(<NavbarItems />, {wrapper: MemoryRouter});


    expect(screen.getByText(navMappings[key])).toBeInTheDocument();
})