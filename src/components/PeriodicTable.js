import React, { useState } from 'react';
import { ElementTile } from './ElementTile';
import parse from 'html-react-parser';


export const PeriodicTable = (props) => {

    const [groupCounter, setGroupCounter] = useState(0);

    const renderTable = props.elements.map((element, index) => {
        if (element.type === "end"){
            return parse("</tr><tr>");
        } else {
            return (
                <ElementTile
                    element={element}
                    key={index}
                />  
            );
        }
    });

    return (
        <table
        className='element-table'>
            {renderTable}
        </table>
    );
}

export default PeriodicTable;