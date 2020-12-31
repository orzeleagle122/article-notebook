import React from 'react';
import {Link} from 'react-router-dom';
import UserPageTemplate from '../templates/UserPageTamplate';

const DetailsTemplate = ({children, pageType}) => {
    return ( 
        <UserPageTemplate pageType={pageType}>
            {children}
            <Link to="/">go back</Link>

        </UserPageTemplate>
     );
}
 
export default DetailsTemplate;