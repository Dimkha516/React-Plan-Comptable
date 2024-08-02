import React from 'react';

const AllClassDisp = ( {comptes} ) => {
    return (
        <div className="list-comptes">
            <div className="intitul">
                <h3>{comptes.numero}: {comptes.intitule}</h3>
            </div>
            
        </div>
    );
};

export default AllClassDisp;