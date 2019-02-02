import styled, { css } from 'styled-components';

const disabled = css`
  &[disabled] {
    background-color: white;
    color: #B9C3C6;
    border: 1px solid #B9C3C6;
  }
`;

export const standard = styled.button`
  height: 34px;
  padding: 0 12px;
  border-radius: 4px;
  box-sizing: border-box;
  background-color: #70879E;
  color: white;
  font-size: 14px;
  line-height: 1.5;
  
  :hover {
  	border: 1px solid #596F86;
  }
  
  :active {}
  
  ${disabled}
`;


export const light = styled.button`
  height: 34px;
  padding: 0 12px;
  border-radius: 4px;
  border: 1px solid #70879E;
  box-sizing: border-box;
  background-color: white;
  color: #70879E;
  font-size: 14px;
  line-height: 1.5;
`;


export const link = styled.button`
  height: 34px;
  padding: 0 12px;
  border: none;
  background-color: white;
  color: #70879E;
  font-size: 14px;
  line-height: 1.5;
  
  :hover {
  	border: 1px solid #596F86;
  }
`;

