import React from 'react';
import PropTypes from 'prop-types';
import SideBar from '../components/organisms/SideBar/SideBar';

const UserPageTemplate = ({children, pageType}) => {
    return ( 
        <>
            <SideBar pageType={pageType}/>
            {children}
        </>
     );
}

UserPageTemplate.propTypes={
    pageTypes: PropTypes.oneOf(['notes','articles','twitters']),
    children: PropTypes.oneOfType([PropTypes.element, PropTypes.node])
};
 
export default UserPageTemplate;