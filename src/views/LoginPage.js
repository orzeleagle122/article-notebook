import React from 'react';
import {Formik,Form,Field} from 'formik';
import axios from 'axios';
import styled from 'styled-components';
import Heading from '../components/atoms/Heading/Heading';
import Button from '../components/atoms/Button/Button';
import { routers } from '../router';
import Input from '../components/atoms/Input/Input';
import { Link } from 'react-router-dom';
import AuthTemplate from '../templates/AuthTemplate';
import {connect} from 'react-redux';
import {authenticate} from '../actions'


const StyledForm = styled(Form)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const StyledInput = styled(Input)`
  margin: 0 0 30px 0;
  height: 40px;
  width: 300px;
`;

const StyledLink = styled(Link)`
  display: block;
  font-weight: ${({ theme }) => theme.bold};
  font-size: ${({ theme }) => theme.fontSize.xs};
  color: black;
  text-transform: uppercase;
  margin: 20px 0 50px;
`;

const LoginPage = ({authenticate}) => (
  <AuthTemplate>
    <Formik
      initialValues={{ username: '', password: '' }}
      onSubmit={({ username, password }) => {
        authenticate(username,password);
      }}
    >
      {({ handleChange, handleBlur, values }) => (
        <>
          <Heading>Sign in</Heading>
          <StyledForm>
            <StyledInput
              type="text"
              name="username"
              placeholder="Login"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.title}
            />
            <StyledInput
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.title}
            />
            <Button activecolor="notes" type="submit">
              sign in
            </Button>
          </StyledForm>
          <StyledLink to={routers.register}>I want my account!</StyledLink>
        </>
      )}
    </Formik>
  </AuthTemplate>
);

const mapDispatchToProps=dispatch=>({
    authenticate:(username,password)=>dispatch(authenticate(username,password))
})

export default connect(null,mapDispatchToProps)(LoginPage);
