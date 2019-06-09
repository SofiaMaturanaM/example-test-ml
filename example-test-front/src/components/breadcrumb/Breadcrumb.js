import React from 'react';

const BreadCrumb = ({ path = [] }) => {
    return (
        <ul>
            {
                path.forEach((element) => <li>{element}</li>)
            }
        </ul>);
};

export default BreadCrumb;