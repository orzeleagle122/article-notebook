import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import UserPageTemplate from '../templates/UserPageTamplate';

const DetailsTemplate = () => {
    return ( 
        <UserPageTemplate>
        <div>
            <h1>Notes</h1>
            <p>Lotem impsum</p>
            <Link to="/">go back</Link>
        </div>
        </UserPageTemplate>
     );
}
 
export default DetailsTemplate;