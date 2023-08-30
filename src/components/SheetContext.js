import { createContext, useContext, useState } from 'react';

const SheetContext = createContext();

export const useSheetContext = () => {
    return useContext(SheetContext);
};

export const SheetProvider = ({ children }) => {
    const [gridData, setGridData] = useState([
        ['#', 'A', 'B', 'C', 'D'],
        ['1', '', '', ' ', ' '],
        ['2', '', '', ' ', ' '],
        ['3', '', '', ' ', ' '],
        ['4', '', '', ' ', ' '],
        ['5', '', '', ' ', ' '],
        ['6', '', '', ' ', ' '],
        ['7', '', '', ' ', ' '],
        ['8', '', '', ' ', ' '],
        ['9', '', '', ' ', ' '],
        ['10', '', '', ' ', ' '],

    ]);

    return (
        <SheetContext.Provider value={{ gridData, setGridData }}>
            {children}
        </SheetContext.Provider>
    );
};
