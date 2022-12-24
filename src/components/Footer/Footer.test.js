import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';
import Footer from './index';

describe('Testing a Footer Element', () => {
    it('show test the footer element', () => {
        render(<Footer />);

        const link = screen.getByRole("link");
        expect(link).toBeInTheDocument();       
        expect(link).toHaveProperty("href", "https://github.com/feliperucunha");       
       
    });   
})
