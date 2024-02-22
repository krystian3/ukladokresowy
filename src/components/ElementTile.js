import React, { useState } from 'react';

export const ElementTile = (props) => {
    var id = props.id;
    var num = props.element.num;
    var symbol = props.symbol;
    var name = props.name;
    var mass = props.mass;
    var meltTemp = props.meltTemp;
    var boilTemp = props.boilTemp;
    var desc = props.desc;
    var discoveryYear = props.discoveryYear;
    var period = props.period;
    var group = props.group;
    var electroNegativity = props.electroNegativity;
    var imgUrl = props.imgUrl;
    var tableWidth = props.tableWidth;
    var type = props.type;

    var classes = `element-tile ${type}`

    return (
        <td className={classes} colSpan={tableWidth}>
            {num}
        </td>
    );


}