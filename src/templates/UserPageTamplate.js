import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import SideBar from '../components/organisms/SideBar/SideBar';
import Input from '../components/atoms/Input/Input';
import Heading from '../components/atoms/Heading/Heading';
import Paragraph from '../components/atoms/Paragraph/Paragraph';

const UserPageTemplate = ({children, pageType}) => {
    return ( 
        <>
            <SideBar pageType={pageType}/>
            {children}
        </>
     );
}

UserPageTemplate.propTypes={
    children: PropTypes.element.isRequired
};
 
export default UserPageTemplate;