import React from 'react';
import Login from './Login';

const Layout = ({Children}) => {
    return (
        <div className="Layout">
            {Children}
        </div>
    );
}
export default Layout ;