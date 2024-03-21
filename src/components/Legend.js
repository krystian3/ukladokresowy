import React, { useState } from 'react';

export const Legend = (props) => {
    return (
        <>
        <div className='legend-el'><span></span><button className='non_metal example'>Niemetale</button></div>
        <div className='legend-el'><span></span><button className='alkali_metal example'>Metale Alkaliczne</button></div>
        <div className='legend-el'><span></span><button className='alkaline_earth_metal example'>Metale Ziem Alkalicznych</button></div>
        <div className='legend-el'><span></span><button className='transition_metal example'>Metale Przejściowe</button></div>
        <div className='legend-el'><span></span><button className='post_transition_metal example'>Metale Postrzejściowe</button></div>
        <div className='legend-el'><span></span><button className='semi_metal example'>Metalloidy</button></div>
        <div className='legend-el'><span></span><button className='halogen example'>Halogeny</button></div>
        <div className='legend-el'><span></span><button className='noble_gas example'>Gazy Szlachetne</button></div>
        <div className='legend-el'><span></span><button className='lanthanide example'>Lantanowce</button></div>
        <div className='legend-el'><span></span><button className='actinoid example'>Aktynowce</button></div>
        </>
    );
}


export default Legend;