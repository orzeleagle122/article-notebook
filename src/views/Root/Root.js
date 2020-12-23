import React, { Component } from 'react';
import Button from '../../components/Button/Button';
import GlobalStyle from '../../theme/GlobalStyle';

class Root extends Component {
  state = {  }
  render() { 
    return ( 
      <div>
        <GlobalStyle/>
        <h1>
          Hellow Word
        </h1>
        <Button>Close/Save</Button>
        <Button secondary={true}>Close/Save</Button>
      </div>
     );
  }
}
 
export default Root;
