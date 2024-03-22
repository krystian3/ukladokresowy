import React, { useState } from 'react';
import {ElementPopup} from './ElementPopup';

export const ElementTile = (props) => {
    var num = props.element.num;
    var symbol = props.element.symbol;
    var name = props.element.name;
    var mass = props.element.mass;
    var tableWidth = props.element.tableWidth;
    var type = props.element.type;

    var classes = `element-tile ${type}`;

    if (type==="period_tile"){
        return (
            <td className={type}><div className='period_tile_num'>{num}</div></td>
        );
    } else if (type==="group_tile"){
        return (
            <td className={type}><div className='group_tile_num'>{num}</div></td>
        );
    } else if (type==="corner_tile"){
        return (
            <td className={type}></td>
        );
    } else if (type!=="gap" && type!=="half_gap"){
        return (
            <td className={classes} colSpan={tableWidth}>
                <span className='el-num'>{num}</span>
                <span className='el'>
                    
                    <span className='el-symbol'>{symbol}</span>
                </span>
                <span className='el'>
                <div className='el-name'>{name}</div>
                </span>
                <span className='el-mass el'>{mass}</span>
            </td>
        );
    } else{
        return (
            <td className={type} colSpan={tableWidth}></td>
        );
    } 
}

export default ElementTile;