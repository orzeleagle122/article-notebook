import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import UserPageTemplate from '../templates/UserPageTamplate';
import Input from '../components/atoms/Input/Input';
import Heading from '../components/atoms/Heading/Heading';
import Paragraph from '../components/atoms/Paragraph/Paragraph';

const StyledWrapper=styled.div`
    padding: 25px 150px 25px 70px;
`;

const StyledGrid=styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 85px;
`;

const StyledPageHeader=styled.div`
    margin: 25px 0 50px 0px;
`;

const StyledHeading=styled(Heading)`
    margin:25px 0 0 0;
    ::first-letter{
        text-transform: uppercase;
    }
`;

const StyledParagraph=styled(Paragraph)`
    margin: 0;
    font-weight: ${({theme})=>theme.bold};
`;

const GridViewTemplate = ({children, pageType}) => {
    return ( 
        <>
            <UserPageTemplate pageType={pageType}>
            <StyledWrapper>
                <StyledPageHeader>
                    <Input search placeholder="Search"/>
                    <StyledHeading big as="h1">{pageType}</StyledHeading>
                    <StyledParagraph>12 {pageType}</StyledParagraph>                    
                    </StyledPageHeader>
                    <StyledGrid>
                        {children}
                    </StyledGrid>            
                </StyledWrapper>
            </UserPageTemplate>
        </>
     );
}

GridViewTemplate.propTypes={
    children: PropTypes.arrayOf(PropTypes.object).isRequired,
    pageType: PropTypes.oneOf(['notes','twitters','articles'])    
};
 
export default GridViewTemplate;