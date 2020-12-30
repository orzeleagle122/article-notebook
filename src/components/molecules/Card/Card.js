import React from 'react';
import PropTypes from 'prop-types';
import styled, {css} from 'styled-components';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import Heading from '../../atoms/Heading/Heading';
import Button from '../../atoms/Button/Button';
import linkIcon from '../../../assets/icons/link.svg'

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
    background-color: ${({activeColor,theme})=>(activeColor?theme[activeColor]:'white')};
    position: relative;
    :first-of-type{
        z-index: 9999;
    }
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

const StyledAvatar=styled.img`
    width: 86px;
    height: 86px;
    border: 5px solid ${({theme})=>theme.twitters};
    position: absolute;
    right: 25px;
    top: 25px;
    border-radius: 50px;
`;

const StyledLink=styled.a`
    width: 47px;
    height: 47px;
    display: block;
    border-radius: 50px;
    background: white url(${linkIcon}) no-repeat;
    background-size: 60%;
    background-position: 50%;
    position: absolute;
    right: 25px;
    top: 50%;
    transform: translateY(-50%);
`;


const Card = ({cardType, title, created, twitterName,articleUrl, content}) => {
    return ( 
        <StyleWrapper>
            <InnerWrapper activeColor={cardType}>
                <StyleHeading>
                    {title}
                </StyleHeading>
                <DateInfo>
                    {created}
                </DateInfo>
                {cardType==='twitters'&&<StyledAvatar src={`https://unavatar.now.sh/twitter/${twitterName}`}/>}
                {cardType==='articles'&&<StyledLink href={articleUrl}/>}
            </InnerWrapper>
            <InnerWrapper flex>
                <Paragraph>
                    {content}
                </Paragraph>
            
                <Button secondary>REMOVE</Button>
            </InnerWrapper>
        </StyleWrapper>
     );
};

Card.propTypes={
    cardType: PropTypes.oneOf(['notes','twitter','article']),
    title: PropTypes.string.isRequired,
    created: PropTypes.string.isRequired,
    twitterName: PropTypes.string,
    articleUrl: PropTypes.string,
    content: PropTypes.string.isRequired
};

Card.defaultProps={
    cardType: 'notes',
    twitterName: null,
    articleUrl: null
};
 
export default Card;