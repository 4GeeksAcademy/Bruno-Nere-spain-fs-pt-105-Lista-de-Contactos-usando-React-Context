import React, { useState } from "react";
import { initialStore, storeReducer } from "../store.js";
import { actions as buildActions } from "../actions.js";

export const AppContext = React.createContext(null);

export const AppProvider = ({ children }) => {
    const [store, setStoreState] = useState(initialStore());

    const setStore = updated => {
        setStoreState(prev => ({ ...prev, ...updated }));
    };

    const actions = buildActions(store, setStore);

    return (
        <AppContext.Provider value={{ store, actions }}>
            {children}
        </AppContext.Provider>
    );
};
