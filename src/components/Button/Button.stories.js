// Button.stories.js

import React from 'react';
import Button from './Button';
import {storiesOf} from '@storybook/react';

storiesOf("Button", module)
.add('Primary',()=><Button>Hello Patrick</Button>)
.add('Secondary',()=><Button secondary>Hello Patrick</Button>)