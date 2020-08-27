import React, { createContext, useContext, useReducer } from 'react';

// preparing the data layer
export const StateContext = createContext();

// initial layer is what the data layer looks like when the app is loaded
// reducer listens to changes
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}             {/* children here refers to the App in index.js */}
    </StateContext.Provider>
);

// hook that allows us to pull information from the data layer
export const useStateValue = () => useContext(StateContext);