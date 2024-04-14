/**
 * # Search Form Molecule
 * - Searches for Github users
 */

/**
 * ## Imports
 */
import React, { memo, useCallback } from 'react';
import styles from './SearchForm.module.scss';
import Input from '../../atoms/Input';
import Button from '../../atoms/Button';

/**
 * ## Types / Interfaces
 */
type SearchFormProps = {
    onSearch: (query: string, searchResultAmount: number) => void;
    searchQuery: string;
    setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
};

/**
 * ## Component
 */
// eslint-disable-next-line react-refresh/only-export-components
const SearchForm = ({ onSearch, searchQuery, setSearchQuery }: SearchFormProps) => {
    /**
     * ### Handlers
     */
    const handleSearch = useCallback(async () => {
        await onSearch(searchQuery, 5);
    }, [onSearch, searchQuery]);

    const onFormSubmit = useCallback(
        (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            handleSearch();
        },
        [handleSearch]
    );

    /**
     * ### Render
     */
    return (
        <form onSubmit={onFormSubmit} className={styles['form']}>
            <h2 className="sr-only">Search for Github Users</h2>
            <fieldset className={styles['body']}>
                <Input
                    placeholder="Search for Github Users"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    classList={styles['form__input']}
                />
                <Button type="submit" classList={styles['form__button']} disabled={!searchQuery}>
                    {'Search'}
                </Button>
            </fieldset>
        </form>
    );
};

/**
 * ## Exports
 */
const SearchFormComponent = memo(SearchForm);
export default SearchFormComponent;
