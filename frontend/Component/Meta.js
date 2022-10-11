import React from 'react';
import { Helmet } from 'react-helmet'

const MetaData = ({title}) => {
    return (
        <Helmet>
            <title>{ `${title} - airbnb`}</title>
        </Helmet>
    );
};

export default MetaData;