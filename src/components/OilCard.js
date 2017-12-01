import React from 'react';

const OilCard = ({ oil }) => (
    <div key={ oil.id } className="OilsCard">
        <h3>Name: { oil.name }</h3>
        <p>Description: { oil.description }</p>
        <p>Oil Uses: { oil.uses }</p>
        <p>Scent Profile: { oil.fragrance_profile }</p>
        <p>Medical Properties: { oil.medical_properties }</p>
    </div>
);

export default OilCard;