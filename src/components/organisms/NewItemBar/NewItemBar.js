import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'; 
import Heading from '../../atoms/Heading/Heading';
import Button from '../../atoms/Button/Button';
import Input from '../../atoms/Input/Input';
import withContext from '../../../hoc/withContext';
import {connect} from 'react-redux';
import {addItem as addItemAction} from '../../../actions';


const StyledWrapper = styled.div`
  border-left: 10px solid ${({ theme, activecolor }) => theme[activecolor]};
  z-index: 9998;
  position: fixed;
  display: flex;
  padding: 100px 90px;
  flex-direction: column;
  right: 0;
  top: 0;
  height: 100vh;
  width: 680px;
  background-color: white;
  box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
  transform: translate(${({ isVisible })=>( isVisible ? '0' : '100%' )});
  transition: transform 0.5s ease-in-out;
`;

const StyledTextArea = styled(Input)`
  margin: 30px 0 100px;
  border-radius: 20px;
  height: 30vh;
`;

const StyledInput=styled(Input)`
  margin-top:30px;
`;


const NewItemBar = ({ pageContext,isVisible,addItem }) => (
  <StyledWrapper activecolor={pageContext} isVisible={isVisible}>
    <Heading big>Create new {pageContext}</Heading>
    <StyledInput placeholder="title"/>
    <StyledInput placeholder={pageContext==='twitters'?'Accont Name eg. orzeleagle122':'title'} />
    {pageContext==='articles' && <StyledInput placeholder="link" />}
    <StyledTextArea as="textarea" placeholder="title" />
    <Button activecolor={pageContext} onClick={()=>addItem(pageContext,{title:'tytul'})}>Add Note</Button>
  </StyledWrapper>
);

NewItemBar.propTypes = {
  pageContext: PropTypes.oneOf(['notes', 'twitters', 'articles']),
};

NewItemBar.defaultProps = {
  pageContext: 'notes',
};

const mapDispatchToProps=(dispatch)=>(
    {
      addItem: (itemType,itemContent)=>dispatch(addItemAction(itemType,itemContent))
    }
)

export default connect(null,mapDispatchToProps)(withContext(NewItemBar));