import React from 'react';

const Class3Display = ( {compte3} ) => {
    return (
        <div className="class3-display">
            <div>
                <h3>{compte3.numero}: {compte3.intitule}</h3>
            </div>
        </div>
    );
};

export default Class3Display;