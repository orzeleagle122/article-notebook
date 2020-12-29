import React from 'react';
import {storiesOf} from '@storybook/react';
import Card from './Card';

storiesOf('Molecules/Card', module)
    .add('Notes',()=><Card cardType="notes"/>)
    .add('Twitter',()=><Card cardType="twitters"/>)
    .add('Article',()=><Card cardType="articles"/>);

