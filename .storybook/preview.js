// .storybook/preview.js

import React from "react";
import { ThemeProvider } from 'styled-components';
import {theme} from '../src/theme/mainTheme';

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <Story />
    </ThemeProvider>
  ),
];