/**
 * # App
 */

/**
 * ## Imports
 */
import { Provider } from 'react-redux';
import store from './store/store';
import Search from './components/organisms/Search';
import styles from './App.module.scss';

/**
 * ## Component
 */
const App = () => {
    return (
        <Provider store={store}>
            <div className={styles['app']}>
                <Search />
            </div>
        </Provider>
    );
};

/**
 * ## Exports
 */
export default App;
