import React, { useState, useCallback } from 'react';
import Row from './Row';
import { useSheetContext } from './SheetContext';

const Sheet = () => {
    const { gridData, setGridData } = useSheetContext();
    const [selectedCell, setSelectedCell] = useState({ row: -1, column: -1 });

    const handleCellSelect = useCallback((row, column) => {
        setSelectedCell({ row, column });
    }, []);

    const handleCellEdit = useCallback((row, column, value) => {
        const updatedGridData = [...gridData];
        updatedGridData[row][column] = value;
        setGridData(updatedGridData);
    }, [gridData, setGridData]);

    const handleAddRow = useCallback(() => {
        const newRow = Array(gridData[0].length).fill('');
        setGridData([...gridData, newRow]);
    }, [gridData, setGridData]);

    const handleDeleteRow = useCallback(() => {
        if (gridData.length > 1) {
            const updatedGridData = gridData.slice(0, -1);
            setGridData(updatedGridData);
        }
    }, [gridData, setGridData]);

    return (
        <div className="sheet">
            {gridData.map((rowData, rowIndex) => (
                <Row
                    key={rowIndex}
                    rowData={rowData}
                    rowIndex={rowIndex}
                    selectedCell={selectedCell}
                    onSelect={handleCellSelect}
                    onEdit={handleCellEdit}
                />
            ))}
            <div className="delete-button">
                <button onClick={handleAddRow}>Add Row</button>
                <button onClick={handleDeleteRow}>Delete Row</button>
            </div>
        </div>
    );
};

export default Sheet;


