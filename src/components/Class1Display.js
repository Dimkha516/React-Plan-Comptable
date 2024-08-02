import React from 'react';

const class1Display = ( {compte1} ) => {
    return (
        <div className="class1-list">
            <h3>{compte1.numero}: {compte1.intitule}</h3>            
        </div>
    );
};

export default class1Display;