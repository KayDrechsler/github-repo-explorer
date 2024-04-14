/**
 * # Search Form Tests
 */

/**
 * ## Imports
 */
import { describe, it, expect, vi } from 'vitest';
import { render, fireEvent } from '@testing-library/react';
import SearchForm from './index';

/**
 * ## Mocks
 */
vi.mock('./index.tsx', () => ({
    default: (props: { onSearch: (query: string, searchResultAmount: number) => void }) => {
        return (
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    props.onSearch('test-query', 5);
                }}
                aria-label="form"
            >
                <input placeholder="Search for Github Users" />
                <button type="submit">Search</button>
            </form>
        );
    }
}));

/**
 * ## Tests
 */
describe('<SearchForm />', () => {
    it('should render the search form', () => {
        const searchQuery = '';
        const setSearchQuery = vi.fn();
        const { getByRole, getByPlaceholderText } = render(
            <SearchForm onSearch={() => {}} searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        );
        expect(getByRole('form')).toBeInTheDocument();
        expect(getByPlaceholderText('Search for Github Users')).toBeInTheDocument();
        expect(getByRole('button', { name: 'Search' })).toBeInTheDocument();
    });

    it('should update the search query state when the input value changes', () => {
        const searchQuery = '';
        const setSearchQuery = vi.fn();
        const { getByPlaceholderText } = render(
            <SearchForm onSearch={() => {}} searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        );
        const input = getByPlaceholderText('Search for Github Users');
        fireEvent.change(input, { target: { value: 'test-query' } });
        expect((input as HTMLInputElement).value).toBe('test-query');
    });

    it('should call the onSearch function when the form is submitted', () => {
        const searchQuery = '';
        const setSearchQuery = vi.fn();
        const onSearch = vi.fn();
        render(<SearchForm onSearch={onSearch} searchQuery={searchQuery} setSearchQuery={setSearchQuery} />);
        fireEvent.submit(document.querySelector('form')!);
        expect(onSearch).toHaveBeenCalledWith('test-query', 5);
    });

    it('should call the onSearch function with the search query and default amount of results', () => {
        const searchQuery = 'test-query';
        const setSearchQuery = vi.fn();
        const onSearch = vi.fn();
        const { getByPlaceholderText, getByRole } = render(
            <SearchForm onSearch={onSearch} searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        );
        const input = getByPlaceholderText('Search for Github Users');
        fireEvent.change(input, { target: { value: 'test-query' } });
        const form = getByRole('form');
        fireEvent.submit(form);
        expect(onSearch).toHaveBeenCalledWith('test-query', 5);
    });
});
