import React, { useState } from 'react';

export const ElementPopup = (props) => {
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
    var type = props.element.type;

    return (
        <div className='popup'>
            {num}
        </div>
    );
}

export default ElementPopup;