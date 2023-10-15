'use client';

import StyledComponentsRegistry from '@/lib/registry';
import GlobalStyles from '@/styles/GlobalStyles';
import { theme } from '@/styles/variables';
import { StyleSheetManager, ThemeProvider } from 'styled-components';

import isPropValid from '@emotion/is-prop-valid';

const Providers = (props: React.PropsWithChildren) => {
  return (
    <StyledComponentsRegistry>
      <StyleSheetManager shouldForwardProp={isPropValid}>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          {props.children}
        </ThemeProvider>
      </StyleSheetManager>
    </StyledComponentsRegistry>
  );
};

export default Providers;
