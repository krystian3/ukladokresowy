import React, { useState } from 'react';
import {ElementPopup} from './ElementPopup';

export const ElementTile = (props) => {
    var id = props.element.id;
    var num = props.element.num;
    var symbol = props.element.symbol;
    var name = props.element.name;
    var mass = props.element.mass;
    var tableWidth = props.element.tableWidth;
    var type = props.element.type;

    var classes = `element-tile ${type}`;

    return (
        <td className={classes} colSpan={tableWidth}>
            <span className='el'>
                <span className='el-num'>{num}</span>
                <span className='el-symbol'>{symbol}</span>
            </span>
            <span className='el'>
            <div className='el-name'>{name}</div>
            </span>
            <span className='el-mass el'>{mass}</span>
            <ElementPopup element={props.element}/>
        </td>
    );
}

export default ElementTile;