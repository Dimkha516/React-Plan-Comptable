import React from 'react';

const Class2Display = ( {compte2} ) => {
    return (
        <div className="class2">
            <div>
                <h3>{compte2.numero}: {compte2.intitule}</h3>
            </div>
        </div>
    );
};

export default Class2Display;