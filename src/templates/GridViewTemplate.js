import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import UserPageTemplate from '../templates/UserPageTamplate';
import Input from '../components/atoms/Input/Input';
import Heading from '../components/atoms/Heading/Heading';
import Paragraph from '../components/atoms/Paragraph/Paragraph';
import ButtonIcon from '../components/atoms/ButtonIcon/ButtonIcon';
import NewItemBar from '../components/organisms/NewItemBar/NewItemBar';
import plusicon from '../assets/icons/plus.svg';
import withContext from '../hoc/withContext';


const StyledWrapper=styled.div`
    position:relative;
    padding: 25px 150px 25px 70px;
`;

const StyledGrid=styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 85px;

    @media (max-width: 1500px) {
      grid-gap: 45px;
      grid-template-columns: repeat(2, 1fr);
    }

  @media (max-width: 1100px) {
    grid-template-columns: 1fr;
  }
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

const StyledButtonIcon=styled(ButtonIcon)`
    position:fixed;
    bottom:40px;
    right:40px;
    background-color: ${({ pageContext,theme })=>( theme[pageContext] )};
    border-radius:50px;
    background-size:25px;
    z-index:9999;
    transform: ${({ isVisible })=>( isVisible ? 'rotate(45deg)' : 'rotate(90deg)' )};
    transition: transform 0.5s ease-in-out;
`;

const GridViewTemplate = ({children, pageContext}) => {
    const [itemBar,setItemBar]=useState(false);

    const handleNewItemBarToogle=()=>{
        setItemBar(prevState=>!prevState);
    }

    return ( 
        <>
            <UserPageTemplate>
                <StyledWrapper>
                    <StyledPageHeader>
                        <Input search placeholder="Search"/>
                        <StyledHeading big as="h1">{pageContext}</StyledHeading>
                        <StyledParagraph>12 {pageContext}</StyledParagraph>                    
                    </StyledPageHeader>
                    <StyledGrid>
                        {children}
                    </StyledGrid>
                    <StyledButtonIcon icon={plusicon} pageContext={pageContext} onClick={handleNewItemBarToogle} isVisible={itemBar}/>        
                </StyledWrapper>
                <NewItemBar isVisible={itemBar}/>
            </UserPageTemplate>
        </>
     );
}

GridViewTemplate.propTypes={
    children: PropTypes.arrayOf(PropTypes.object).isRequired,
    pageContext: PropTypes.oneOf(['notes','twitters','articles'])    
};
 
export default withContext(GridViewTemplate);