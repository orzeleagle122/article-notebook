import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'; 
import Heading from '../../atoms/Heading/Heading';
import Button from '../../atoms/Button/Button';
import Input from '../../atoms/Input/Input';
import withContext from '../../../hoc/withContext';


const StyledWrapper = styled.div`
  border-left: 10px solid ${({ theme, activecolor }) => theme[activecolor]};
  z-index: 9999;
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
`;

const StyledTextArea = styled(Input)`
  margin: 30px 0 100px;
  border-radius: 20px;
  height: 30vh;
`;

const NewItemBar = ({ pageContext }) => (
  <StyledWrapper activecolor={pageContext}>
    <Heading big>Create new {pageContext}</Heading>
    <Input placeholder="title" />
    <StyledTextArea as="textarea" placeholder="title" />
    <Button activecolor={pageContext}>Add Note</Button>
  </StyledWrapper>
);

NewItemBar.propTypes = {
  pageContext: PropTypes.oneOf(['notes', 'twitters', 'articles']),
};

NewItemBar.defaultProps = {
  pageContext: 'notes',
};

export default withContext(NewItemBar);