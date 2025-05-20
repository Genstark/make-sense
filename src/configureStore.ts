import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './store';

export default function setupStore() {
    return configureStore({
        reducer: rootReducer,
        devTools: typeof window !== 'undefined' && (window as any).__REDUX_DEVTOOLS_EXTENSION__,
    });
}
