// ButtonIcon story
import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import ButtonIcon from './ButtonIcon';
import bulbIcon from '../../../assets/icons/bulb.svg';
import logoutIcon from '../../../assets/icons/logout.svg';
import penIcon from '../../../assets/icons/pen.svg';
import plusIcon from '../../../assets/icons/plus.svg';
import twitterIcon from '../../../assets/icons/twitter.svg';

const YellowBackground=styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 500px;
    height: 500px;
    background: ${({theme})=>theme.notes};
`;

storiesOf('Atoms/ButtonIcon', module)
.addDecorator(story=><YellowBackground>{story()}</YellowBackground>)
.add('Bulb', () => <ButtonIcon icon={bulbIcon}/>)
.add('Bulb active', () => <ButtonIcon active icon={bulbIcon}/>)
.add('Logout', () => <ButtonIcon icon={logoutIcon}/>)
.add('Pen', () => <ButtonIcon icon={penIcon}/>)
.add('Plus', () => <ButtonIcon icon={plusIcon}/>)
.add('Twitter', () => <ButtonIcon icon={twitterIcon}/>);
