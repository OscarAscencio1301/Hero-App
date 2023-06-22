import { render, screen } from "@testing-library/react";
import SearchPage from "../../../src/pages/heroes/SearchPage";
import { MemoryRouter } from "react-router-dom";

describe('Testing a Search Page', () => {
    test('Snapshot ', () => {
        const { container } = render(
            <MemoryRouter>
                <SearchPage />
            </MemoryRouter>
        )
        expect(container).toMatchSnapshot()
    });

    test('Debe mostrar el resultado con el valor en el input ', () => {
        render(
            <MemoryRouter initialEntries={['/search?q=batman']}>
                <SearchPage />
            </MemoryRouter>
        )
        const img = screen.getByRole('img') as HTMLImageElement
        expect(img.src).toContain("/assets/heroes/dc-batman.jpg")

        const titleResult = screen.getByLabelText('text-results')
        expect(titleResult.style.display).toBe('none')


    
    });
})
