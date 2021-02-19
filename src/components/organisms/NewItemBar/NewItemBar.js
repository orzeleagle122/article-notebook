import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'; 
import Heading from '../../atoms/Heading/Heading';
import Button from '../../atoms/Button/Button';
import Input from '../../atoms/Input/Input';
import withContext from '../../../hoc/withContext';
import {connect} from 'react-redux';
import {addItem as addItemAction} from '../../../actions';
import { Formik, Form, ErrorMessage } from 'formik';


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

const StyledForm=styled(Form)`
  display:flex;
  flex-direction:column;
`;

const StyledErrorMessage=styled(ErrorMessage)`
  color: red;
  font-weight:700;
  margin-left: 25px;
  font-size:12px;
`;


const NewItemBar = ({ pageContext,isVisible,addItem,handleClose }) => (
  <StyledWrapper activecolor={pageContext} isVisible={isVisible}>
    <Heading big>Create new {pageContext}</Heading>
    <Formik 
      initialValues={{title:'',content:'',articleUrl:'',twitterName:'',created:''}}
      onSubmit={(values, { setSubmitting })=>{
        addItem(pageContext,values);
        handleClose();
        values.articleUrl='';
        values.title='';
        values.twitterName='';
        values.content='';
      }}
      // validate={values => {
      //   const errors = {};
      //   if (!values.title) {
      //     errors.title = 'Required';
      //   } 
      //   if (!values.twitterName) {
      //     errors.twitterName = 'Required';
      //   } 
      //   if (!values.articleUrl) {
      //     errors.articleUrl = 'Required';
      //   } 
      //   if (!values.content) {
      //     errors.content = 'Required';
      //   }
      //   return errors;
      // }}
      >
        {({values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting})=>(
          <StyledForm>
            <StyledInput 
              type="text" 
              name="title" 
              placeholder="title"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.title}/> 
              <StyledErrorMessage name="title" component="div" />           
            {pageContext==='twitters' && <StyledInput 
                                            placeholder="twitter name eg. orzeleagle" 
                                            type="text" 
                                            name="twitterName" 
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.twitterName}/>}
            {pageContext==='twitters' && <StyledErrorMessage name="twitterName" component="div" />}
            {pageContext==='articles' && <StyledInput 
                                            placeholder="link" 
                                            type="text" 
                                            name="articleUrl"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.articleUrl}/>}
            {pageContext==='articles' && <StyledErrorMessage name="articleUrl" component="div" />}
            <StyledTextArea 
              name="content" 
              as="textarea"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.content} />
            <StyledErrorMessage name="content" component="div" />
            <Button activecolor={pageContext} type="submit">Add Note</Button>
          </StyledForm>
        )}

      </Formik>
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