import React, { useState } from 'react';
import { ElementTile } from './ElementTile';
import parse from 'html-react-parser';


export const PeriodicTable = (props) => {

    const [groupCounter, setGroupCounter] = useState(0);

    const renderTable = props.elements.map((element, index) => {
        // var newRow = (groupCounter>=18);
        // if (newRow){
        //     //setGroupCounter(element.tableWidth);
        // } else {
        //     setGroupCounter(groupCounter + element.tableWidth);
        // }
        // //setGroupCounter((newRow ? element.tableWidth : groupCounter + element.tableWidth));
        

        // var normal = (
        //     <ElementTile
        //         element={element}
        //         key={index}
        //     />
        // );

        // var rowEnd = (
        //     <ElementTile
        //         element={element}
        //         key={index}
        //     />      
        // );
        // return (newRow ? rowEnd : normal)
        if (element.type == "end"){
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
        <table>
            {renderTable}
        </table>
    );
}

export default PeriodicTable;