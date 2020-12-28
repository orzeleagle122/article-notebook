import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import Button from '../../components/atoms/Button/Button';
import GlobalStyle from '../../theme/GlobalStyle';
import {theme} from '../../theme/mainTheme';


class Root extends Component {
  state = {  }
  render() { 
    return ( 
      <div>
        <GlobalStyle/>
        <ThemeProvider theme={theme}>
          <>
            <h1>
              Hellow Word
            </h1>
            <Button>Close/Save</Button>
            <Button secondary={true}>Close/Save</Button>
          </>
        </ThemeProvider>
      </div>
     );
  }
}
 
export default Root;
