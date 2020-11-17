import React, { Component } from 'react';
import Header from './Header';
import Meta from './Meta';
import styled, { ThemeProvider, injectGlobal} from 'styled-components';

const theme = {
  red: '#F00',
  black: '#393939',
  grey: '#3A3A3A',
  maxWidth: '1000px',
  offWhite: '#EDEDED'
}

const StyledPage = styled.div`
  background: ${props => props.theme.offWhite};
  color: ${props => props.theme.black};
`

const Inner = styled.div`
  max-width: ${props => props.theme.maxWidth};
  padding: 2em;
  margin:0 auto;
`

class Page extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <StyledPage>
          <Meta />
          <Header />
            <Inner>
              {this.props.children}
            </Inner>
        </StyledPage>
      </ThemeProvider>
    );
  }
}

export default Page;