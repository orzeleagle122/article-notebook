import React from 'react';
import MainTemplate from '../../templates/MainTemplete';
import Button from '../../components/atoms/Button/Button';


const Root = () => {
  return ( 
    <MainTemplate>
          <>
            <h1>
              Hellow Word
            </h1>
            <Button>Close/Save</Button>
            <Button secondary={true}>Close/Save</Button>
          </>
    </MainTemplate>
   );
}
 
export default Root;
