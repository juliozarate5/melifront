import React from 'react';
import PropTypes from 'prop-types';

export default function SubTitle({subtitle}) {
    return (
        <div className="row my-4">
            <div className="col-lg-12 text-center">
                <h1>
                    {subtitle}
                </h1>
            </div>
        </div>
    )
}

SubTitle.propTypes = {
    subtitle: PropTypes.string.isRequired
}
