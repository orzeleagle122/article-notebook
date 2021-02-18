import React from 'react';
import PropTypes from 'prop-types';
import SideBar from '../components/organisms/SideBar/SideBar';

const UserPageTemplate = ({children}) => {
    return ( 
        <>
            <SideBar/>
            {children}
        </>
     );
}

UserPageTemplate.propTypes={
    children: PropTypes.oneOfType([PropTypes.element, PropTypes.node]).isRequired,
};

 
export default UserPageTemplate;