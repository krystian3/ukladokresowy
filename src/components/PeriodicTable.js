import React, { useState } from 'react';
import { ElementTile } from './components/ElementTile';

export const PeriodicTable = (props) => {
    const renderTable = props.elements.map((element) => {
        return (
            <ElementTile
                element={element}
                key={element.id}
            />
        );
    })
}

export default PeriodicTable;