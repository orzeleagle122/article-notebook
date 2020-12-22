import './App.css';
import React, { Component } from 'react';
import styled from 'styled-components';

const MyButton = styled.button`
  border: 2px solid blue;
  padding: 50px;
`;

class App extends Component {
  state = {  }
  render() { 
    return ( 
      <>
        <MyButton>This is my button</MyButton>
      </>
     );
  }
}
 
export default App;
