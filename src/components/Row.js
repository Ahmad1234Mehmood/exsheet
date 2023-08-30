import React from 'react';
import Cell from './Cell';

const Row = React.memo(({ rowData, rowIndex, selectedCell, onSelect, onEdit }) => {
    return (
        <div className="row">
            {rowData.map((cellData, columnIndex) => (
                <Cell
                    key={columnIndex}
                    value={cellData}
                    rowIndex={rowIndex}
                    columnIndex={columnIndex}
                    isSelected={selectedCell.row === rowIndex && selectedCell.column === columnIndex}
                    onSelect={onSelect}
                    onEdit={onEdit}
                />
            ))}
        </div>
    );
});

export default Row;



