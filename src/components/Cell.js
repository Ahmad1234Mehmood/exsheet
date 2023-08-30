import React, { useState } from 'react';

const Cell = ({ value, rowIndex, columnIndex, isSelected, onSelect, onEdit }) => {
    const [editing, setEditing] = useState(false);
    const [cellValue, setCellValue] = useState(value);

    const handleClick = () => {
        onSelect(rowIndex, columnIndex);
    };

    const handleDoubleClick = () => {
        setEditing(true);
        onSelect(rowIndex, columnIndex);
    };

    const handleChange = (e) => {
        setCellValue(e.target.value);
    };

    const handleBlur = () => {
        setEditing(false);
        onEdit(rowIndex, columnIndex, cellValue);
    };

    return (
        <div
            className={`cell ${isSelected ? 'selected' : ''} ${editing ? 'editing' : ''}`}
            onClick={handleClick}
            onDoubleClick={handleDoubleClick}
        >
            {editing ? (
                <input
                    type="text"
                    value={cellValue}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    autoFocus
                />
            ) : (
                cellValue
            )}
        </div>
    );
};

export default Cell;



