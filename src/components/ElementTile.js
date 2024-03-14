import React, { useState } from 'react';

export const ElementTile = (props) => {
    var id = props.element.id;
    var num = props.element.num;
    var symbol = props.element.symbol;
    var name = props.element.name;
    var mass = props.element.mass;
    var meltTemp = props.element.meltTemp;
    var boilTemp = props.element.boilTemp;
    var desc = props.element.desc;
    var discoveryYear = props.element.discoveryYear;
    var period = props.element.period;
    var group = props.element.group;
    var electroNegativity = props.element.electroNegativity;
    var imgUrl = props.element.imgUrl;
    var tableWidth = props.element.tableWidth;
    var type = props.element.type;

    var classes = `element-tile ${type}`;

    return (
        <td className={classes} colSpan={tableWidth}>
            <span className='el-num el'>{num}</span>
            <span className='el-symbol el'>{symbol}</span>
            <span className='el-name el'>{name}</span>
            <span className='el-mass el'>{mass}</span>
        </td>
    );


}