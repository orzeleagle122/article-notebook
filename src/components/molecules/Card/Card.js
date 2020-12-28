import React from 'react';
import styled, {css} from 'styled-components';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import Heading from '../../atoms/Heading/Heading';
import Button from '../../atoms/Button/Button';

const StyleWrapper=styled.div`  
    min-height: 380px;
    box-shadow: 0 10px 30px -10px hsla(0,0%,0%,0.1);
    border-radius: 10px;
    overflow: hidden;
    position: relative;
    display: grid;
    grid-template-rows: 0.25fr 1fr;
`;

const InnerWrapper=styled.div`
    padding: 17px 30px;
    background-color: ${({yellow,theme})=>(yellow?theme.notes:'white')};

    ${({flex})=>
       flex&&css`
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    ` 
    }
`;

const DateInfo=styled(Paragraph)`
    margin: 0 0 10px;
    font-weight: ${(theme)=>theme.bold};
    font-size: ${({theme})=>theme.fontSize.xs};
`;

const StyleHeading=styled(Heading)`
    margin: 10px 0 0;
`;


const Card = () => {
    return ( 
        <StyleWrapper>
            <InnerWrapper yellow>
                <StyleHeading>
                    Hello Patryk
                </StyleHeading>
                <DateInfo>
                    3 days
                </DateInfo>
            </InnerWrapper>
            <InnerWrapper flex>
                <Paragraph>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id pellentesque turpis. Fusce tristique id diam quis varius. Nulla malesuada dolor in lorem efficitur, et tincidunt justo semper. Phasellus mattis commodo elit, nec tincidunt nibh pretium ut. Nullam pharetra vel nunc id volutpat. Ut in enim id ex tincidunt auctor. Aliquam erat volutpat. Quisque id massa ut urna facilisis pellentesque. Nullam at mauris in diam sodales semper.
                </Paragraph>
            
                <Button secondary>REMOVE</Button>
            </InnerWrapper>
        </StyleWrapper>
     );
}
 
export default Card;