import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
@import url('${props => props.theme.fontSource}');
* {
  padding: 0;
  margin: 0;
  font-family: ${props => props.theme.fontFamily.body};
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

`;
export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 50px;
  padding-left: 50px;
  @media screen and (max-width: 991px) {
    padding-right: 30px;
    padding-left: 30px;
  }
`;

export const ButtonPrimary = styled.button`
font-size: ${props => props.theme.fontSizes.m};
font-weight: ${props => props.theme.fontWeights.regular};
  border-radius: 30px;
  background: transparent;
  white-space: nowrap;
  padding: 6px 20px ;
  color: #fff;
  outline: none;
  border: 1px solid #fff;
  cursor: pointer;
  &:hover {
    transition: all 0.3s ease-out;
    color: ${props => props.theme.colors.primary};
    background-color: #fff;
  }
  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;

export default GlobalStyles;
