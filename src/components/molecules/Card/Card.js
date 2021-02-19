import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import PropTypes from 'prop-types';
import styled, {css} from 'styled-components';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import Heading from '../../atoms/Heading/Heading';
import Button from '../../atoms/Button/Button';
import linkIcon from '../../../assets/icons/link.svg';
import {removeItem as removeItemAction} from '../../../actions/index';
import {connect} from 'react-redux';
import withContext from '../../../hoc/withContext';

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
    background-color: ${({activecolor,theme})=>(activecolor?theme[activecolor]:'white')};
    position: relative;
    :first-of-type{
        z-index: 999;
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


class Card extends Component {
    state={
        redirect: false
    }

    handleCardClick=()=>{
        this.setState({redirect:true});
    }

    render(){
        const {pageContext, title, created, twitterName,articleUrl, content, id, removeItem} = this.props;
        if(this.state.redirect){
           return <Redirect to={`${pageContext}/${id}`} />
        }
        return ( 
            <StyleWrapper >
                <InnerWrapper activecolor={pageContext} onClick={this.handleCardClick}>
                    <StyleHeading>
                        {title}
                    </StyleHeading>
                    <DateInfo>
                        {created}
                    </DateInfo>
                    {pageContext==='twitters'&&<StyledAvatar src={`https://unavatar.now.sh/twitter/${twitterName}`}/>}
                    {pageContext==='articles'&&<StyledLink href={articleUrl}/>}
                </InnerWrapper>
                <InnerWrapper flex>
                    <Paragraph>
                        {content}
                    </Paragraph>
                
                    <Button onClick={()=>removeItem(pageContext,id)} secondary>REMOVE</Button>
                </InnerWrapper>
            </StyleWrapper>
        );
    }
};

Card.propTypes={
    pageContext: PropTypes.oneOf(['notes','twitters','articles']),
    title: PropTypes.string.isRequired,
    created: PropTypes.string.isRequired,
    twitterName: PropTypes.string,
    articleUrl: PropTypes.string,
    content: PropTypes.string.isRequired,
    removeItem:PropTypes.func.isRequired,
};

Card.defaultProps={
    pageContext: 'notes',
    twitterName: null,
    articleUrl: null
};

const mapDispatchToProps=(dispatch)=>(
        {
            removeItem:(pageContext,id)=>dispatch(removeItemAction(pageContext,id))
        }
    )
 
export default connect(null,mapDispatchToProps)(withContext(Card));