import styled, { css, keyframes } from 'styled-components';
import { rgba, darken } from 'polished';

export const COLOR = {
  blue: '#70879E',
  red: '#DF293E',
};

const colorProp = props => COLOR[props.color] || COLOR.blue;
const hoverColorProp = props => darken(.05, colorProp(props));
const loadingProp = props => props.loading && loading;

const commonCSS = css`
  position: relative;
  height: 34px;
  padding: 0 12px;
  border-radius: 4px;
  box-sizing: border-box;
  font-size: 14px;
  line-height: 1.5;
  outline: none;
  cursor: pointer;
`;

const disabledCSS = css`
  &[disabled] {
    background-color: white;
    color: #B9C3C6;
    border: 1px solid #B9C3C6;
    cursor: not-allowed;
  }
`;

const rotate = keyframes`
  from {
    transform: translate(-50%, -50%) rotate(0);
  }
  to {
    transform: translate(-50%, -50%) rotate(360deg);
  }
`;

const loading = css`
  text-shadow: none!important;
  color: transparent!important;
    
  :before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 1em;
    height: 1em;
    transform: translate(-50%, -50%);
    border-radius: 500rem;
    border: .2em solid ${props => rgba(colorProp(props), 0.2)};
  }

  :after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 1em;
    height: 1em;
    animation: ${rotate} .6s linear;
    animation-iteration-count: infinite;
    border-radius: 500rem;
    border-color: #fff transparent transparent;
    border-style: solid;
    border-width: .2em;
    box-shadow: 0 0 0 1px transparent;
  }
`;


export const StandardStyled = styled.button`
  ${commonCSS}
  color: white;
  background-color: ${colorProp};
  border: 1px solid ${colorProp};
  
  :hover {
    background-color: ${hoverColorProp};
  	border: 1px solid ${hoverColorProp};
  }
  
  ${disabledCSS}
  ${loadingProp}
`;


export const LightStyled = styled.button`
  ${commonCSS}
  border: 1px solid ${colorProp};
  background-color: white;
  color: ${colorProp};
  
  ${disabledCSS}
  ${loadingProp}
`;


export const LinkStyled = styled.button`
  ${commonCSS}
  border: none;
  background-color: white;
  color: ${colorProp};
  
  :hover {
    text-decoration: underline;
  }
  
  ${disabledCSS}
  &[disabled] {
    border: none;
  }
  
  ${loadingProp}
`;
