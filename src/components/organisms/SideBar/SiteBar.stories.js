import React from 'react';
import {storiesOf} from '@storybook/react';
import SiteBar from './SideBar';
import StoryRouter from 'storybook-react-router';

storiesOf('Organisms/SiteBar', module)
    .addDecorator(StoryRouter())
    .add('SiteBar',()=><SiteBar />);

