'use client';

import StyledComponentsRegistry from '@/lib/registry';
import GlobalStyles from '@/styles/GlobalStyles';
import { theme } from '@/styles/variables';
import { StyleSheetManager, ThemeProvider } from 'styled-components';

const Providers = (props: React.PropsWithChildren) => {
  return (
    <StyledComponentsRegistry>
      <StyleSheetManager>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          {props.children}
        </ThemeProvider>
      </StyleSheetManager>
    </StyledComponentsRegistry>
  );
};

export default Providers;
